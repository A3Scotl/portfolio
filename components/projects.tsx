import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { ProjectsSectionProps } from '@/app/type';




export default function ProjectsSection({ theme, textColor, inverseBg, inverseText, projects }: ProjectsSectionProps) {
    return (
        <section id="portfolio" className="min-h-screen flex items-center py-20 px-6">
            <div className="max-w-6xl mx-auto w-full px-4 md:px-0">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-16 text-center"
                >
                    Featured Projects
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Link href={`/projects/${project.slug}`} key={project.id} className="block h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className={`${theme === 'dark' ? 'bg-zinc-900 hover:bg-zinc-800' : 'bg-gray-100 hover:bg-gray-200'} rounded-2xl overflow-hidden cursor-pointer transition-all shadow-xl h-full flex flex-col`}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <motion.img
                                        src={project.thumbnail}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="opacity-70 mb-4 line-clamp-3 flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.slice(0, 5).map(tag => (
                                            <span key={tag} className={`${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'} px-3 py-1 rounded-full text-xs`}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4 mt-auto pt-4 border-t border-gray-500/10">
                                        <span className={`flex items-center gap-2 text-sm font-medium ${theme === 'dark' ? 'text-white':'text-black' }`}>
                                            View Details <ExternalLink className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
