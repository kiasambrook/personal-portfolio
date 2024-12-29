interface CardProps {
    title: string;
    subTitle?: string;
    children: React.ReactNode;
}

const Card = ({ title, children, subTitle = "" }: CardProps) => {
    return (
        <div className="bg-white p-4 border-4 box-shadow border-black w-1/2">
            <h3 className="text-xl font-semibold">{title}</h3>
            <h4 className="text-lg font-medium text-gray-600">{subTitle}</h4>
            {children}
        </div>
    );
}

export default Card;