import PolaroidShape from "@components/PolaroidShape";
import { useEffect, useState } from 'react';
import ProjectApi from "../api/service";
import { Project } from "@customTypes/project";

const ProjectList = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectService: ProjectApi = new ProjectApi();
        const fetcheProjects = await projectService.fetchProjects();
        setProjects(fetcheProjects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

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
