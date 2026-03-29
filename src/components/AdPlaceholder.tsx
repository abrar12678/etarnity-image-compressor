type AdPlaceholderProps = {
    label?: string;
};

export default function AdPlaceholder({
    label = "Ad Space",
}: AdPlaceholderProps) {
    return (
        <div className="rounded-2xl border border-dashed border-orange-200 bg-orange-50 p-6 text-center">
            <p className="text-sm font-medium text-orange-700">{label}</p>
        </div>
    );
}