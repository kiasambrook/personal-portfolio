interface CardProps {
    title: string;
    subtitle: string;
    description: string
}

const Card = ({ ...props }: CardProps) => {

    return (
        <div className="flex flex-col bg-white shadow px-10 py-3 pb-10 h-fit min-w-full">
            <div className="mb-2">
                <h5 className="text-lg font-semibold">{props.title}</h5>
                <h6>{props.subtitle}</h6>
            </div>
            <div className="whitespace-pre-line">
                {props.description}
            </div>
        </div>
    );
}

export default Card;
