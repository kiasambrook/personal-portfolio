import SectionTitle from "@components/SectionTitle";
import ProjectList from "./components/ProjectList";

const Projects = () => {
    return (
        <div id="portfolio" className="py-20">
            <SectionTitle classes="text-center">
                My Portfolio
            </SectionTitle>

            <ProjectList />
        </div>
    );
}

export default Projects;