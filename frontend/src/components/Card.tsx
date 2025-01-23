interface CardProps {
    title: string;
    subTitle?: string;
    children: React.ReactNode;
    className?: string;
}

const Card = ({ title, children, subTitle = "", className= '' }: CardProps) => {
    let classes = `bg-white p-4 border-4 box-shadow border-black w-3/4 ${className}`;
    return (
        <div className={classes} data-card>
            <h3 className="text-xl font-semibold">{title}</h3>
            <h4 className="text-lg font-medium text-gray-600">{subTitle}</h4>
            {children}
        </div>
    );
}

export default Card;