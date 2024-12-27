import { RoughNotation } from "react-rough-notation";

interface SectionTitleProps {
    children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
    return (
        <div className="text-3xl font-semi-bold pb-8">
            <RoughNotation type="underline" show={true} strokeWidth={2}>
                {children}
            </RoughNotation>
        </div>
    );
};

export default SectionTitle;