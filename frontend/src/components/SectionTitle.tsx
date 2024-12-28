import { RoughNotation } from "react-rough-notation";

interface SectionTitleProps {
    children: React.ReactNode;
    classes?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, classes }) => {
    let className= `text-3xl font-semi-bold pb-8 ${classes}`;
    return (
        <div className={className}>
            <RoughNotation type="underline" show={true} strokeWidth={2}>
                {children}
            </RoughNotation>
        </div>
    );
};

export default SectionTitle;