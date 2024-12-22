const Arrow = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 600 600"
            width="100%"
            height="100%"
            className="transform rotate-90 absolute w-80 h-80"
        >
            <g
                strokeWidth="10"
                stroke="hsl(0, 0%, 0%)"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path
                    d="M285.0358371734619 283.4008102416992Q255.0358371734619 523.4008102416992 518.0358371734619 516.4008102416992"
                    markerEnd="url(#SvgjsMarker2014)"
                ></path>
            </g>
            <defs>
                <marker
                    markerWidth="8"
                    markerHeight="8"
                    refX="4"
                    refY="4"
                    viewBox="0 0 8 8"
                    orient="auto"
                    id="SvgjsMarker2014"
                >
                    <polyline
                        points="0,4 4,2 0,0"
                        fill="none"
                        strokeWidth="1.3333333333333333"
                        stroke="hsl(0, 0%, 0%)"
                        strokeLinecap="round"
                        transform="matrix(1,0,0,1,1.3333333333333333,2)"
                        strokeLinejoin="round"
                    ></polyline>
                </marker>
            </defs>
        </svg>
    )
}

export default Arrow;