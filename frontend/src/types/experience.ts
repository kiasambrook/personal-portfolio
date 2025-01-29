export type ExperienceType = {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

export type Experience = {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    start_date: Date;
    end_date: Date | null;
    is_current: boolean;
    grade: string | null;
    experience_type: ExperienceType;
    created_at: string;
    updated_at: string;
};