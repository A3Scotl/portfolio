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
    
    // Find the project directly during render, as it's a synchronous operation
    // and doesn't require an effect.
    const foundProject = projects.find(p => p.slug === slug);
    if (!project && foundProject) setProject(foundProject);

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
