import PolaroidShape from "@components/PolaroidShape";
import { Projects } from "../types";

interface ProjectListProps {
    projects: Projects | null | undefined;
}

const ProjectList = ({ projects }: ProjectListProps) => {
    if (!projects) {
        return null
    }

    return (
        <div className="flex justify-center flex-wrap gap-12 w-full">
            {projects.projects.map((project) => (
                <PolaroidShape
                    key={project.id}
                    image={project.image}
                    title={project.name}
                    skills={project.skills}
                    link={project.link} />
            ))}
        </div>
    );
}

export default ProjectList;