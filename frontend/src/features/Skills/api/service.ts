import { Skill } from "@customTypes/skill";

class SkillApi {
    async fetchSkills(): Promise<Skill[]> {
        try {
            const APIURL = import.meta.env.VITE_API_URL;
            const response = await fetch(`${APIURL}/skills`);
            if (!response.ok) {
                throw new Error('Failed to fetch skills');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching skills", error);
            return [];
        }
    }
}
export default SkillApi;