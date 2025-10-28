import SectionTitle from "@components/SectionTitle";
import ProjectList from "./components/ProjectList";

const Projects = () => {
    return (
        <div id="portfolio" className="py-20 px-2 lg:px-0">
            <div className="text-center mb-4">
                <SectionTitle>
                    My Portfolio
                </SectionTitle>
                <p>Things I've made...</p>
            </div>

            <ProjectList />
        </div>
    );
}

export default Projects;