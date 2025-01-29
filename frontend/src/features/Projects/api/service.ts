import { Project } from "@customTypes/project";

class ProjectApi {
    async fetchProjects(): Promise<Project[]> {
        try {
            const APIURL = import.meta.env.VITE_API_URL;
            const response = await fetch(`${APIURL}/projects`);
            if (!response.ok) {
                throw new Error('Failed to fetch projects');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching projects", error);
            return [];
        }
    }
}
export default ProjectApi;