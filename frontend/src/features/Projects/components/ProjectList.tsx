import PolaroidShape from "@components/PolaroidShape";
import { useEffect, useState } from 'react';
import ProjectApi from "../api/service";
import { Project } from "@customTypes/project";
import Loading from "@components/Loading";

const ProjectList = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectService: ProjectApi = new ProjectApi();
        const fetcheProjects = await projectService.fetchProjects();
        setProjects(fetcheProjects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false)
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="flex justify-center flex-wrap gap-12 w-full">
      { loading &&
        <Loading />
      }
      {projects.map((project) => (
        <PolaroidShape
          key={project.id}
          image={project.image_url}
          title={project.name}
          tags={project.skills}
          link={project.link}
          linkTargetNewTab={true} />
      ))}
    </div>
  );
}

export default ProjectList;
