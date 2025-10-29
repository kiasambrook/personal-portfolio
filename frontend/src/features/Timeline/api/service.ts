import { Experience } from "@customTypes/experience";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

class ExperienceApi {
    async fetchExperiences(): Promise<Experience[]> {
        try {
            const APIURL = import.meta.env.VITE_API_URL;
            const response = await fetch(`${APIURL}/experience`);
            if (!response.ok) {
                throw new Error('Failed to fetch experiences');
            }
            const data = await response.json();

            data.forEach(experience => {
                this.setIcon(experience)
            });

            return data;
        } catch (error) {
            console.error("Error fetching experiences", error);
            return [];
        }
    }

    setIcon(experience: Experience) {
        if (experience.experience_type.name == "Education") {
            experience.icon = faGraduationCap
        } else {
            experience.icon = faBriefcase
        }
    }
}
export default ExperienceApi;