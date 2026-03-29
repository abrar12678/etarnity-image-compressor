"use client";

import imageCompression from "browser-image-compression";
import { useEffect, useMemo, useState } from "react";

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
            setSuccessMessage("Image compressed successfully.");

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
        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm md:p-8">
            <div
                className={`rounded-2xl border-2 border-dashed bg-white p-6 transition md:p-8 ${isDragging
                    ? "border-black bg-gray-50"
                    : "border-gray-300"
                    }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-900">
                        Image Compressor Tool
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-gray-500">
                        Upload your JPG, PNG, or WebP image and compress it in seconds.
                    </p>
                </div>

                <div className="mt-6 text-center">
                    <label
                        htmlFor="image-upload"
                        className="inline-block cursor-pointer rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
                    >
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

                {selectedFile && (
                    <div className="mt-8 space-y-6">
                        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
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
                                className="w-full"
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
                                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900"
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
                                className="w-full rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {isCompressing ? "Compressing..." : "Compress Image"}
                            </button>

                            <button
                                onClick={handleReset}
                                type="button"
                                className="w-full rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
                            >
                                Reset
                            </button>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-3">
                            <div className="rounded-2xl border border-gray-200 bg-white p-4">
                                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                                    Original Size
                                </p>
                                <p className="mt-2 text-lg font-semibold text-gray-900">
                                    {originalSizeKB.toFixed(2)} KB
                                </p>
                            </div>

                            <div className="rounded-2xl border border-gray-200 bg-white p-4">
                                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                                    Compressed Size
                                </p>
                                <p className="mt-2 text-lg font-semibold text-gray-900">
                                    {compressedFile ? `${compressedSizeKB.toFixed(2)} KB` : "--"}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-gray-200 bg-white p-4">
                                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                                    Saved
                                </p>
                                <p className="mt-2 text-lg font-semibold text-green-600">
                                    {compressedFile ? `${reductionPercent.toFixed(1)}%` : "--"}
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="rounded-2xl bg-gray-50 p-4">
                                <p className="mb-3 text-sm font-semibold text-gray-900">
                                    Original Image
                                </p>
                                <img
                                    src={previewUrl}
                                    alt="Original preview"
                                    className="h-48 w-full rounded-xl object-cover"
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
                                <div className="rounded-2xl bg-gray-50 p-4">
                                    <p className="mb-3 text-sm font-semibold text-gray-900">
                                        Compressed Image
                                    </p>
                                    <img
                                        src={compressedPreviewUrl}
                                        alt="Compressed preview"
                                        className="h-48 w-full rounded-xl object-cover"
                                    />
                                    <p className="mt-3 text-sm text-gray-600">
                                        Size: {compressedSizeKB.toFixed(2)} KB
                                    </p>
                                    {compressedDimensions && (
                                        <p className="mt-1 text-sm text-gray-600">
                                            Dimensions: {compressedDimensions}
                                        </p>
                                    )}
                                    <p className="mt-1 text-sm text-green-600">
                                        Reduced by {reductionPercent.toFixed(1)}%
                                    </p>

                                    <button
                                        onClick={handleDownload}
                                        className="mt-4 w-full rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
                                    >
                                        Download Compressed Image
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {successMessage && (
                    <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                        {successMessage}
                    </div>
                )}

                {error && (
                    <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                        {error}
                    </div>
                )}
            </div>
        </div>
    );
}