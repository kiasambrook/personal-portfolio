
import { ReactNode } from 'react';

const HightLightedText = ({ children }: { children: ReactNode }) => {
    return (
        <span className="highlighter">
            {children}
        </span>
    );
};

export default HightLightedText;