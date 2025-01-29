import { Experience } from "@customTypes/experience";

class ExperienceApi {
    async fetchExperiences(): Promise<Experience[]> {
        try {
            const APIURL = import.meta.env.VITE_API_URL;
            const response = await fetch(`${APIURL}/experience`);
            if (!response.ok) {
                throw new Error('Failed to fetch experiences');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching experiences", error);
            return [];
        }
    }
}

export default ExperienceApi;