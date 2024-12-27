
import { ReactNode } from 'react';
import { RoughNotation } from "react-rough-notation";

const HightLightedText = ({ children }: { children: ReactNode }) => {
    return (
        <RoughNotation type='highlight' show={true} color='#fde047' iterations={1}>
            {children}
        </RoughNotation>
    );
};

export default HightLightedText;