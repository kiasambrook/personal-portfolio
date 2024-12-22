
import { ReactNode } from 'react';

const HightLightedText = ({ children }: { children: ReactNode }) => {
    return (
        <span className="hightlighter">
            {children}
        </span>
    );
};

export default HightLightedText;