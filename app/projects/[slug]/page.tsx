"use client"
import { use, useEffect, useState } from 'react';
import { projects } from '@/data/projects';
import ProjectDetail from '@/components/detail';
import { useTheme } from '@/context/theme-context';
import { useRouter } from 'next/navigation';

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const { theme } = useTheme();
    const router = useRouter();
    const [project, setProject] = useState<typeof projects[0] | null>(null);

    useEffect(() => {
        const foundProject = projects.find(p => p.slug === slug);
        if (foundProject) {
            setProject(foundProject);
        }
    }, [slug]);

    if (!project) return null;

    return (
        <div className="pt-24 min-h-screen">
            <ProjectDetail 
                project={project} 
                onBack={() => router.back()} 
                theme={theme} 
            />
        </div>
    );
}
