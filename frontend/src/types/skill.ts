import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type Skill = {
    id?: number;
    name: string;
    icon: IconProp;
    created_at?: string;
    updated_at?: string;
}