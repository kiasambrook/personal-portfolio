import SectionTitle from "@components/SectionTitle";
import ProjectList from "./components/ProjectList";

const Projects = () => {
    const projects = [
        {
            id: 1,
            name: "Project 1",
            description: "Description 1",
            image: "https://fakeimg.pl/150x150",
            link: "#",
            skills: ["HTML", "CSS", "JavaScript"]
        },
        {
            id: 2,
            name: "Project 2",
            description: "Description 2",
            image: "https://fakeimg.pl/150x150",
            link: "#",
            skills: ["React", "TypeScript"]
        },
        {
            id: 3,
            name: "Project 3",
            description: "Description 3",
            image: "https://fakeimg.pl/150x150",
            link: "#",
            skills: ["React", "TypeScript"]
        },
        {
            id: 4,
            name: "Project 4",
            description: "Description 4",
            image: "https://fakeimg.pl/150x150",
            link: "#",
            skills: ["React", "TypeScript"]
        }
    ];

    return (
        <div id="portfolio" className="py-20">
            <SectionTitle classes="text-center">
                My Portfolio
            </SectionTitle>

            <ProjectList
            projects={{ projects }}/>
        </div>
    );
}

export default Projects;