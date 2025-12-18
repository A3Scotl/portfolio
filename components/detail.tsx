import { motion } from "framer-motion";
import { Github, ExternalLink, ChevronLeft } from "lucide-react";
import {Project} from "@/app/type"


export default function ProjectDetail({ project, onBack, theme }: { project: Project, onBack: () => void, theme: string }) {
    const bgColor = theme === 'dark' ? 'bg-black' : 'bg-white';
    const textColor = theme === 'dark' ? 'text-white' : 'text-black';

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`${bgColor} ${textColor} h-full pb-30`}
        >
            <div className=" sm:px-12 md:max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <motion.img
                        src={project.thumbnail}
                        alt="Hero image"
                        className="
    w-full h-full
    object-cover
    mx-auto
    cursor-pointer
    pb-6
  "
                    />

                    <div className="grid md:grid-cols-3 gap-12 mb-12 px-4">
                        <div className="md:col-span-2">
                            <h2 className="text-justify    text-3xl font-bold mb-4">{project.title}</h2>
                            <p className=" text-justify   text-lg opacity-80 leading-relaxed mb-6">
                                {project.description}
                            </p>
                            <p className="text-justify text-lg opacity-80 leading-relaxed">
                                This project showcases modern web development practices, including responsive design,
                                smooth animations, and optimal performance. Built with a focus on user experience
                                and accessibility, it demonstrates proficiency in the latest frontend technologies.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-4">Technologies</h3>
                            <div className="flex flex-wrap gap-3 mb-8">
                                {project.tags.map(tag => (
                                    <span key={tag} className={`${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'} px-4 py-2 rounded-full text-sm`}>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-2xl font-bold mb-4">Links</h3>
                            <div className="space-y-3">
                                <motion.a
                                    href={project.github}
                                    whileHover={{ scale: 1.05 }}
                                    className={`${theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'} px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 w-full justify-center hover:shadow-xl transition-shadow`}
                                >
                                    <Github className="w-5 h-5" />
                                    View Code
                                </motion.a>
                                <motion.a
                                    href={project.demo}
                                    whileHover={{ scale: 1.05 }}
                                    className={`${theme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'} px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 w-full justify-center transition-colors`}
                                >
                                    <ExternalLink className="w-5 h-5" />
                                    Live Demo
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}