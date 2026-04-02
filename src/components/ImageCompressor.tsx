"use client";

import imageCompression from "browser-image-compression";
import { useEffect, useMemo, useState } from "react";
import {
    DownloadIcon,
    RefreshIcon,
    UploadIcon,
    LightningIcon,
    ShieldIcon,
    ImageIcon,
} from "@/components/Icons";

export default function ImageCompressor() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [compressedFile, setCompressedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string>("");
    const [compressedPreviewUrl, setCompressedPreviewUrl] = useState<string>("");
    const [quality, setQuality] = useState<number>(0.7);
    const [maxWidthPreset, setMaxWidthPreset] = useState<string>("1920");
    const [isCompressing, setIsCompressing] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [originalDimensions, setOriginalDimensions] = useState<string>("");
    const [compressedDimensions, setCompressedDimensions] = useState<string>("");
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [successMessage, setSuccessMessage] = useState<string>("");

    useEffect(() => {
        return () => {
            if (previewUrl) URL.revokeObjectURL(previewUrl);
            if (compressedPreviewUrl) URL.revokeObjectURL(compressedPreviewUrl);
        };
    }, [previewUrl, compressedPreviewUrl]);

    const originalSizeKB = useMemo(() => {
        if (!selectedFile) return 0;
        return selectedFile.size / 1024;
    }, [selectedFile]);

    const compressedSizeKB = useMemo(() => {
        if (!compressedFile) return 0;
        return compressedFile.size / 1024;
    }, [compressedFile]);

    const reductionPercent = useMemo(() => {
        if (!selectedFile || !compressedFile) return 0;
        return ((selectedFile.size - compressedFile.size) / selectedFile.size) * 100;
    }, [selectedFile, compressedFile]);

    const getImageDimensions = (fileUrl: string): Promise<string> => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(`${img.width} × ${img.height}`);
            img.onerror = reject;
            img.src = fileUrl;
        });
    };

    const processFile = async (file: File) => {
        setError("");
        setSuccessMessage("");

        if (!file.type.startsWith("image/")) {
            setError("Please upload a valid image file.");
            return;
        }

        if (previewUrl) URL.revokeObjectURL(previewUrl);
        if (compressedPreviewUrl) URL.revokeObjectURL(compressedPreviewUrl);

        setCompressedFile(null);
        setCompressedPreviewUrl("");
        setCompressedDimensions("");

        const newPreviewUrl = URL.createObjectURL(file);

        setSelectedFile(file);
        setPreviewUrl(newPreviewUrl);

        try {
            const dimensions = await getImageDimensions(newPreviewUrl);
            setOriginalDimensions(dimensions);
        } catch {
            setOriginalDimensions("");
        }
    };

    const handleFileChange = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files?.[0];
        if (!file) return;

        await processFile(file);
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(false);

        const file = event.dataTransfer.files?.[0];
        if (!file) return;

        await processFile(file);
    };

    const handleCompress = async () => {
        if (!selectedFile) {
            setError("Please choose an image first.");
            return;
        }

        try {
            setIsCompressing(true);
            setError("");

            const options = {
                maxSizeMB: 1,
                useWebWorker: true,
                initialQuality: quality,
                ...(maxWidthPreset !== "original"
                    ? { maxWidthOrHeight: Number(maxWidthPreset) }
                    : {}),
            };

            const compressed = await imageCompression(selectedFile, options);

            if (compressedPreviewUrl) URL.revokeObjectURL(compressedPreviewUrl);

            const compressedUrl = URL.createObjectURL(compressed);

            setCompressedFile(compressed as File);
            setCompressedPreviewUrl(compressedUrl);

            try {
                const dimensions = await getImageDimensions(compressedUrl);
                setCompressedDimensions(dimensions);
            } catch {
                setCompressedDimensions("");
            }

            setSuccessMessage("Image compressed successfully.");
        } catch {
            setError("Compression failed. Please try another image.");
        } finally {
            setIsCompressing(false);
        }
    };

    const handleDownload = () => {
        if (!compressedFile || !compressedPreviewUrl) return;

        const link = document.createElement("a");
        link.href = compressedPreviewUrl;
        link.download = `compressed-${compressedFile.name}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleReset = () => {
        if (previewUrl) URL.revokeObjectURL(previewUrl);
        if (compressedPreviewUrl) URL.revokeObjectURL(compressedPreviewUrl);

        setSelectedFile(null);
        setCompressedFile(null);
        setPreviewUrl("");
        setCompressedPreviewUrl("");
        setQuality(0.7);
        setOriginalDimensions("");
        setCompressedDimensions("");
        setError("");
        setSuccessMessage("");
    };

    return (
        <div className="interactive-smooth rounded-[28px] border border-orange-200 bg-orange-50/60 p-4 shadow-sm hover:shadow-md sm:p-6 md:p-8">
            <div
                className={`interactive-smooth rounded-[24px] border-2 border-dashed bg-white p-5 sm:p-6 md:p-8 ${isDragging
                    ? "border-orange-500 bg-orange-50 shadow-lg shadow-orange-100"
                    : "border-orange-200 hover:border-orange-300 hover:bg-orange-50/40"
                    }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <div className="text-center animate-fade-up">
                    <div className="animate-soft-float mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                        <ImageIcon className="h-7 w-7" />
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                        Image Compressor Tool
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
                        Upload your JPG, PNG, or WebP image and compress it in seconds.
                    </p>
                </div>

                <div className="mt-6 text-center">
                    <label
                        htmlFor="image-upload"
                        className="interactive-smooth hover-lift-sm inline-flex cursor-pointer items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-200"
                    >
                        <UploadIcon className="h-4 w-4" />
                        {selectedFile ? "Choose Another Image" : "Choose Image"}
                    </label>

                    <input
                        id="image-upload"
                        type="file"
                        accept="image/jpeg,image/png,image/webp"
                        className="hidden"
                        onChange={handleFileChange}
                    />

                    <p className="mt-4 text-xs text-gray-400">
                        Supported formats: JPG, PNG, WebP
                    </p>
                    <p className="mt-2 text-xs text-gray-400">
                        You can also drag and drop an image here.
                    </p>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    <div className="interactive-smooth hover-lift-sm hover-shadow-soft rounded-2xl border border-orange-100 bg-orange-50 p-4">
                        <div className="flex items-center gap-2 text-orange-600">
                            <LightningIcon className="h-4 w-4" />
                            <p className="text-sm font-medium text-gray-800">Fast</p>
                        </div>
                        <p className="mt-2 text-xs text-gray-500">
                            Lightweight browser compression
                        </p>
                    </div>

                    <div className="interactive-smooth hover-lift-sm hover-shadow-soft rounded-2xl border border-orange-100 bg-orange-50 p-4">
                        <div className="flex items-center gap-2 text-orange-600">
                            <ShieldIcon className="h-4 w-4" />
                            <p className="text-sm font-medium text-gray-800">Private</p>
                        </div>
                        <p className="mt-2 text-xs text-gray-500">
                            Your file stays on your device
                        </p>
                    </div>

                    <div className="interactive-smooth hover-lift-sm hover-shadow-soft rounded-2xl border border-orange-100 bg-orange-50 p-4">
                        <div className="flex items-center gap-2 text-orange-600">
                            <ImageIcon className="h-4 w-4" />
                            <p className="text-sm font-medium text-gray-800">Easy</p>
                        </div>
                        <p className="mt-2 text-xs text-gray-500">
                            Upload, compress, and download quickly
                        </p>
                    </div>
                </div>

                {selectedFile && (
                    <div className="mt-8 space-y-6 animate-fade-up">
                        <div className="interactive-smooth hover-shadow-soft rounded-2xl border border-orange-100 bg-orange-50 p-4">
                            <p className="text-sm font-medium text-gray-700">
                                Selected file:{" "}
                                <span className="font-semibold text-gray-900">
                                    {selectedFile.name}
                                </span>
                            </p>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                Compression Quality: {Math.round(quality * 100)}%
                            </label>
                            <input
                                type="range"
                                min="0.1"
                                max="1"
                                step="0.1"
                                value={quality}
                                onChange={(e) => setQuality(Number(e.target.value))}
                                className="w-full accent-orange-500"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                Target Size (Max Width/Height):
                                <span className="font-semibold text-gray-900">
                                    {" "}
                                    {maxWidthPreset === "original"
                                        ? "Original"
                                        : `${maxWidthPreset}px`}
                                </span>
                            </label>

                            <select
                                value={maxWidthPreset}
                                onChange={(e) => setMaxWidthPreset(e.target.value)}
                                className="interactive-smooth w-full rounded-xl border border-orange-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                            >
                                <option value="original">Original (no resize)</option>
                                <option value="1920">1920px (high)</option>
                                <option value="1280">1280px (medium)</option>
                                <option value="1024">1024px (small)</option>
                                <option value="800">800px (extra small)</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row">
                            <button
                                onClick={handleCompress}
                                disabled={isCompressing}
                                className="interactive-smooth hover-lift-sm inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-200 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                <LightningIcon className="h-4 w-4" />
                                {isCompressing ? "Compressing..." : "Compress Image"}
                            </button>

                            <button
                                onClick={handleReset}
                                type="button"
                                className="interactive-smooth hover-lift-sm inline-flex w-full items-center justify-center gap-2 rounded-full border border-orange-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-orange-50 hover:text-orange-600 hover:shadow-sm"
                            >
                                <RefreshIcon className="h-4 w-4" />
                                Reset
                            </button>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-3">
                            <div className="interactive-smooth hover-lift-sm hover-shadow-soft rounded-2xl border border-orange-100 bg-white p-4">
                                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                                    Original Size
                                </p>
                                <p className="mt-2 text-lg font-semibold text-gray-900">
                                    {originalSizeKB.toFixed(2)} KB
                                </p>
                            </div>

                            <div className="interactive-smooth hover-lift-sm hover-shadow-soft rounded-2xl border border-orange-100 bg-white p-4">
                                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                                    Compressed Size
                                </p>
                                <p className="mt-2 text-lg font-semibold text-gray-900">
                                    {compressedFile ? `${compressedSizeKB.toFixed(2)} KB` : "--"}
                                </p>
                            </div>

                            <div className="interactive-smooth hover-lift-sm hover-shadow-soft rounded-2xl border border-orange-100 bg-white p-4">
                                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                                    Saved
                                </p>
                                <p className="mt-2 text-lg font-semibold text-orange-600">
                                    {compressedFile ? `${reductionPercent.toFixed(1)}%` : "--"}
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-2">
                            <div className="interactive-smooth hover-lift-sm hover-shadow-soft rounded-2xl border border-orange-100 bg-white p-4">
                                <p className="mb-3 text-sm font-semibold text-gray-900">
                                    Original Image
                                </p>
                                <img
                                    src={previewUrl}
                                    alt="Original preview"
                                    className="h-48 w-full rounded-xl object-cover sm:h-56"
                                />
                                <p className="mt-3 text-sm text-gray-600">
                                    Size: {originalSizeKB.toFixed(2)} KB
                                </p>
                                {originalDimensions && (
                                    <p className="mt-1 text-sm text-gray-600">
                                        Dimensions: {originalDimensions}
                                    </p>
                                )}
                            </div>

                            {compressedPreviewUrl && compressedFile && (
                                <div className="interactive-smooth hover-lift-sm hover-shadow-soft rounded-2xl border border-orange-100 bg-white p-4">
                                    <p className="mb-3 text-sm font-semibold text-gray-900">
                                        Compressed Image
                                    </p>
                                    <img
                                        src={compressedPreviewUrl}
                                        alt="Compressed preview"
                                        className="h-48 w-full rounded-xl object-cover sm:h-56"
                                    />
                                    <p className="mt-3 text-sm text-gray-600">
                                        Size: {compressedSizeKB.toFixed(2)} KB
                                    </p>
                                    {compressedDimensions && (
                                        <p className="mt-1 text-sm text-gray-600">
                                            Dimensions: {compressedDimensions}
                                        </p>
                                    )}
                                    <p className="mt-1 text-sm font-medium text-orange-600">
                                        Reduced by {reductionPercent.toFixed(1)}%
                                    </p>

                                    <button
                                        onClick={handleDownload}
                                        className="interactive-smooth hover-lift-sm mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700 hover:shadow-lg"
                                    >
                                        <DownloadIcon className="h-4 w-4" />
                                        Download Compressed Image
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {successMessage && (
                    <div className="animate-fade-up mt-6 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 shadow-sm">
                        {successMessage}
                    </div>
                )}

                {error && (
                    <div className="animate-fade-up mt-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 shadow-sm">
                        {error}
                    </div>
                )}
            </div>
        </div>
    );
}