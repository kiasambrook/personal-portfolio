interface StarProps {
    classes: string;
}

const Star = ({ classes }: StarProps) => {
    let classNames = `w-36 h-36 stroke-black ${classes}`;

    return (
        <svg
            className={classNames}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            strokeWidth="2.5"
            filter="url(#boxShadow)" // Added filter attribute
        >
            <defs>
                <filter id="boxShadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feOffset result="offOut" in="SourceAlpha" dx="3" dy="3" />
                    <feGaussianBlur result="blurOut" in="offOut" stdDeviation="3" />
                    <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                </filter>
            </defs>
            <path
                stroke="none"
                transform="translate(-3,-1)"
                d="m96.563 74.251.507 2.005 1.748-1.103 58.576-36.958-48.666 49.408-1.436 1.458 1.823.93 29.058 14.83-32.615.754-1.793.042.358 1.758 6.523 31.964-20.924-25.029-1.193-1.426-1.142 1.467-36.286 46.605 21.836-53.313.826-2.018-2.18-.05-32.614-.754 29.058-14.83 1.598-.815-1.086-1.429L48.793 61.78 78.505 75.25l1.634.741.44-1.74 7.992-31.628 7.992 31.628Z"
            ></path>
            <path
                d="m96.563 74.251.507 2.005 1.748-1.103 58.576-36.958-48.666 49.408-1.436 1.458 1.823.93 29.058 14.83-32.615.754-1.793.042.358 1.758 6.523 31.964-20.924-25.029-1.193-1.426-1.142 1.467-36.286 46.605 21.836-53.313.826-2.018-2.18-.05-32.614-.754 29.058-14.83 1.598-.815-1.086-1.429L48.793 61.78 78.505 75.25l1.634.741.44-1.74 7.992-31.628 7.992 31.628Z"
            ></path>
        </svg>
    );
}

export default Star;