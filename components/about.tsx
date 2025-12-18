import { motion } from "framer-motion";

// About Section
export default function AboutSection({ theme, textColor }: { theme: string, textColor: string }) {
    return (
        <section id="about-me" className="min-h-screen flex items-center py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">About Me</h2>
                    <div className="space-y-6 text-lg opacity-80 leading-relaxed">


                        <p>
                            I am a passionate  Developer and UI/UX Designer with a strong foundation in backend technologies like Java and Spring Boot. I specialize in creating modern, responsive web applications using technologies such as ReactJS, Next.js, and TypeScript, while ensuring that performance, accessibility, and user experience are always at the forefront.

                        </p>
                        <p>
                            With a deep understanding of both frontend and backend development, I thrive in building scalable, full-stack solutions. I leverage tools like Spring Boot, Node.js, and RESTful APIs to ensure seamless integration across platforms.
                        </p>
                        <p>
                            Outside of coding, I am always exploring new design trends, contributing to open-source projects, and mentoring the next generation of developers. My approach is rooted in combining technical expertise with creative design thinking to deliver polished, user-centered digital experiences.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}