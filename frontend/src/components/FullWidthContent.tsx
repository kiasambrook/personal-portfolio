interface FullWidthContentProps {
    children: React.ReactNode;
    classes?: string;
}

export const FullWidthContent: React.FC<FullWidthContentProps> = ({ children, classes = "" }) => {
    let className = `relative left-1/2 w-dvw max-w-none -translate-x-1/2 container ${classes}`;
    return (
        <div className={className}>
            {children}
        </div>
    );
};