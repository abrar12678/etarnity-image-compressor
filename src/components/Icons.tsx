type IconProps = {
    className?: string;
};

export function UploadIcon({ className = "h-5 w-5" }: IconProps) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden="true"
        >
            <path d="M12 16V4" />
            <path d="M7 9l5-5 5 5" />
            <path d="M4 20h16" />
        </svg>
    );
}

export function DownloadIcon({ className = "h-5 w-5" }: IconProps) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden="true"
        >
            <path d="M12 4v12" />
            <path d="M7 11l5 5 5-5" />
            <path d="M4 20h16" />
        </svg>
    );
}

export function RefreshIcon({ className = "h-5 w-5" }: IconProps) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden="true"
        >
            <path d="M20 11a8 8 0 1 0 2 5.3" />
            <path d="M20 4v7h-7" />
        </svg>
    );
}

export function LightningIcon({ className = "h-5 w-5" }: IconProps) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden="true"
        >
            <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
        </svg>
    );
}

export function ShieldIcon({ className = "h-5 w-5" }: IconProps) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden="true"
        >
            <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
        </svg>
    );
}

export function ImageIcon({ className = "h-5 w-5" }: IconProps) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden="true"
        >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <circle cx="8.5" cy="10" r="1.5" />
            <path d="M21 16l-5-5-4 4-2-2-4 4" />
        </svg>
    );
}