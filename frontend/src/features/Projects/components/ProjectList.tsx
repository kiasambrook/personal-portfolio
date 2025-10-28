import PolaroidShape from "@components/PolaroidShape";
import { useEffect, useState } from 'react';
import ProjectApi from "../api/service";
import { Project } from "@customTypes/project";
import { faCss, faLaravel, faPhp, faReact, faWordpress } from "@fortawesome/free-brands-svg-icons";

const ProjectList = () => {
  const [projects, setProjects] = useState<Project[]>([
      {
        id: 1,
        name: "My Portfolio",
        description: "Look familiar? This website is my homebase to track my skills, projects, and experiences as I have in the industry",
        image: "img/portfoliopic.png",
        skills: [{name: "React", icon: faReact}, {name: "Tailwind", icon: faCss}, {name: "Laravel", icon: faLaravel}],
        link: "https://kiasambrook.co.uk",
        created_at: "October 2025",
        updated_at: "October 2025",
      },
       {
        id: 2,
        name: "Newry Wildlife",
        description: "A nature blog to advertise local walks and biodiversity in Northern Ireland.",
        image: "img/newrywildlife.png",
        skills: [{name: "Wordpress", icon: faWordpress}, {name: "Tailwind", icon: faCss}, {name: "PHP", icon: faPhp}],
        link: "https://newrywildlife.com",
        created_at: "October 2025",
        updated_at: "October 2025",
      }
  ]);

  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       const projectService: ProjectApi = new ProjectApi();
  //       const fetcheProjects = await projectService.fetchProjects();
  //       setProjects(fetcheProjects);
  //     } catch (error) {
  //       console.error('Error fetching projects:', error);
  //     }
  //   };
  //   fetchProjects();
  // }, []);

  return (
    <div className="flex justify-center flex-wrap gap-12 w-full">
      {projects.map((project) => (
        <PolaroidShape
          key={project.id}
          image={project.image}
          title={project.name}
          tags={project.skills}
          link={project.link} />
      ))}
    </div>
  );
}

export default ProjectList;
