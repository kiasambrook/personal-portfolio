interface PolaroidShapeProps {
    image: string;
    title: string;
    skills: string[];
}

const PolaroidShape: React.FC<PolaroidShapeProps> = ({ image, title, skills }) => {
    const skillLength = skills.length;

    return (
        <div className="w-1/3 h-full py-6 bg-white border-4 border-black box-shadow flex flex-col items-center ">
            <img src={image} alt={title} className="bg-gray-400 h-80 border-4 border-black" />
            <div className="self-start md:ml-14">
                <h3 className="text-xl font-bold">{title}</h3>
                <ul className="flex justify-center space-x-2">
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}{++index >= skillLength ? "" : " - "}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default PolaroidShape;