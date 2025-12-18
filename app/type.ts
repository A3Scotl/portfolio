// Project Detail Component
interface Project {
    id: number;
    slug: string;
    title: string;
    description: string;
    // image: [];
    thumbnail: string;
    tags: string[];
    github: string;
    demo: string;
}
interface ProjectsSectionProps {
    theme: string;
    textColor: string;
    inverseBg: string;
    inverseText: string;
    projects: Project[];
}

export type { Project,ProjectsSectionProps };