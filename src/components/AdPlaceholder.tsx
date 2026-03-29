type AdPlaceholderProps = {
    label?: string;
};

export default function AdPlaceholder({
    label = "Ad Space",
}: AdPlaceholderProps) {
    return (
        <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-6 text-center">
            <p className="text-sm font-medium text-gray-500">{label}</p>
        </div>
    );
}