"use client"
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '@/context/theme-context';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
    const { theme, toggleTheme } = useTheme();
    const router = useRouter();
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const inverseBg = theme === 'dark' ? 'bg-white' : 'bg-zinc-900';
    const inverseText = theme === 'dark' ? 'text-black' : 'text-white';

    const scrollToSection = (id: string) => {
        setIsMobileMenuOpen(false);
        if (pathname !== '/') {
            router.push(`/#${id}`);
            return;
        }
        
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleLogoClick = () => {
        if (pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            router.push('/');
        }
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 ${theme === 'dark' ? 'bg-white' : 'bg-zinc-900'} backdrop-blur-md border-b ${theme === 'dark' ? 'border-white/10' : 'border-black/10'}`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-2xl font-bold cursor-pointer"
                    onClick={handleLogoClick}
                >
                    <button
                        className={`${inverseBg} ${inverseText} cursor-pointer  px-6 py-2 rounded-full text-xl  font-bold hover:scale-105 transition-transform`}
                    >
                        Angx_
                    </button>       
                 </motion.div>

                <nav className="hidden md:flex items-center gap-8">
                    <button
                        onClick={() => scrollToSection('about-me')}
                        className={`${inverseBg} ${inverseText} px-6 py-2 rounded-full text-sm cursor-pointer font-medium hover:scale-105 transition-transform`}
                    >
                        About me
                    </button>
                    <button
                        onClick={() => scrollToSection('skills')}
                        className={`${inverseBg} ${inverseText} px-6 py-2 rounded-full text-sm cursor-pointer font-medium hover:scale-105 transition-transform`}
                    >
                        Skills
                    </button>
                    <button
                        onClick={() => scrollToSection('portfolio')}
                        className={`${inverseBg} ${inverseText} px-6 py-2 rounded-full text-sm cursor-pointer font-medium hover:scale-105 transition-transform`}
                    >
                        Projects
                    </button>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className={`${inverseBg} ${inverseText} px-6 py-2 rounded-full text-sm cursor-pointer font-medium hover:scale-105 transition-transform`}
                    >
                        Contact Me
                    </button>

                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-full ${theme === 'dark' ? 'bg-black' : 'bg-white'} cursor-pointer hover:scale-110 transition-transform`}
                    >
                        {theme === 'dark' ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-black" />}
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className={`p-2 rounded-full ${theme === 'dark' ? 'bg-black' : 'bg-white'} cursor-pointer hover:scale-110 transition-transform`}
                    >
                        {theme === 'dark' ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-black" />}
                    </button>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Menu"
                        className={`p-2 rounded-full ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} cursor-pointer hover:scale-110 transition-transform`}
                    >
                        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`md:hidden overflow-hidden border-t ${theme === 'dark' ? 'border-gray-200' : 'border-gray-800'}`}
                    >
                        <div className="flex flex-col p-4 gap-4 items-center pb-8">
                            <button
                                onClick={() => scrollToSection('about-me')}
                                className={`${inverseBg} ${inverseText} px-6 py-2 rounded-full text-sm cursor-pointer font-medium hover:scale-105 transition-transform w-full`}
                            >
                                About me
                            </button>
                            <button
                                onClick={() => scrollToSection('skills')}
                                className={`${inverseBg} ${inverseText} px-6 py-2 rounded-full text-sm cursor-pointer font-medium hover:scale-105 transition-transform w-full`}
                            >
                                Skills
                            </button>
                            <button
                                onClick={() => scrollToSection('portfolio')}
                                className={`${inverseBg} ${inverseText} px-6 py-2 rounded-full text-sm cursor-pointer font-medium hover:scale-105 transition-transform w-full`}
                            >
                                Projects
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className={`${inverseBg} ${inverseText} px-6 py-2 rounded-full text-sm cursor-pointer font-medium hover:scale-105 transition-transform w-full`}
                            >
                                Contact Me
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
