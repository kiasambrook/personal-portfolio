interface Project {
    id: number;
    name: string;
    description: string;
    image: string;
    link: string;
    skills: string[];
}

interface Projects {
    projects: Project[];
}

export type { Project, Projects };