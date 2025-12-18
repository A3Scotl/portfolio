import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';

export default function HeroSection({ theme, inverseBg, inverseText }: { theme: string, bgColor: string, textColor: string, inverseBg: string, inverseText: string }) {

    // Define variants for staggered animation (for the whole text)
    const textVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Delay between each letter
                duration: 2, // Duration of the animation for the whole text
            },
        },
    };

    // Define variants for each letter with spring effect
    const letterVariants = {
        hidden: { opacity: 0, y: 20 },  // Make letters start below and hidden
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                type: 'spring', 
                stiffness: 100,  // Spring stiffness
                damping: 25,     // Spring damping for smooth animation
            }
        },
    };

    return (
        <section id="hero" className="min-h-screen flex items-center">
            <div className="w-full flex">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.1 }}
                    className={`bg-transparent w-full pt-4 pl-12 sm:pl-12 lg:pl-42 flex flex-col justify-center min-h-screen `}
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-sm uppercase tracking-widest mb-4 opacity-60"
                    >
                        Hi, I am
                    </motion.p>

                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        {["N", "g", "u", "y", "e", "n", " ", "T", "r", "u", "o", "n", "g", " ", "A", "n"].map((letter, index) => (
                            <motion.span key={index} variants={letterVariants}>
                                {letter}
                            </motion.span>
                        ))}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl mb-8 opacity-80"
                    >
                        Developer / Designer
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="flex gap-4 mb-8"
                    >
                        {[
                            { icon: Github, href: 'https://github.com/A3Scotl' },
                            { icon: Linkedin, href: 'https://www.linkedin.com/in/nguyentruongan-se/' },
                            { icon: Mail, href: 'nguyentruongan0610@gmail.com' }
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.1 }}
                                className={`p-3 rounded-full ${theme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'} transition-colors`}
                            >
                                <social.icon className="w-5 h-5" />
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`${inverseBg} ${inverseText} px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 w-fit hover:shadow-2xl transition-shadow cursor-pointer`}
                    >
                        <Download className="w-5 h-5 " />
                        Download CV
                    </motion.button> */}

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="mt-12 animate-bounce"
                    >
                        <ChevronDown className="w-8 h-8" />
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{
                        clipPath: 'polygon(100% 0,100% 0,100% 100%,100% 100%)'
                    }}
                    animate={{
                        clipPath: 'polygon(15% 0,100% 0,100% 100%,0 100%)'
                    }}
                    transition={{ duration: 0.1 }} className="
    hidden md:flex
    w-[55%]
    min-h-[100vh]
    bg-zinc-900
    px-24
    items-center
    justify-center
  "
                >
                    <motion.img
                        src="/images/hero.jpg"
                        alt="Hero image"
                        className="w-70 h-70 object-cover rounded-full mx-auto cursor-pointer"
                        whileHover={{
                            scale: 1.12,
                            rotate: -2,
                            filter: 'brightness(1.1) contrast(1.1)',
                        }}
                        transition={{
                            duration: 0.4,
                            ease: 'easeOut',
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
}
