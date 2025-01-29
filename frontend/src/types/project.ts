import { Skill } from './skill';
export type Project = {
    id: number;
    name: string;
    description: string;
    image: string;
    skills: Skill[];
    link: string;
    created_at: string;
    updated_at: string;
};