"use client"
import { useEffect } from "react";
import { useTheme } from "@/context/theme-context";
import AboutSection from "@/components/about";
import SkillsSection from "@/components/skills";
import ProjectsSection from "@/components/projects";
import ContactSection from "@/components/contact";
import HeroSection from "@/components/hero";
import { projects } from "@/data/projects";

export default function Portfolio() {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const bgColor = theme === 'dark' ? 'bg-zinc-900' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-white' : 'text-black';
  const inverseBg = theme === 'dark' ? 'bg-white' : 'bg-zinc-900';
  const inverseText = theme === 'dark' ? 'text-black' : 'text-white';

  return (
    <div className={`${bgColor} ${textColor} transition-colors duration-500`}>
      {/* Hero Section */}
      <HeroSection theme={theme} bgColor={bgColor} textColor={textColor} inverseBg={inverseBg} inverseText={inverseText} />

      {/* About Section */}
      <AboutSection theme={theme} textColor={textColor} />

      {/* Skills Section */}
      <SkillsSection theme={theme} textColor={textColor} inverseBg={inverseBg} inverseText={inverseText} />

      {/* Portfolio Section */}
      <ProjectsSection
        theme={theme}
        textColor={textColor}
        inverseBg={inverseBg}
        inverseText={inverseText}
        projects={projects}
      />

      {/* Contact Section */}
      <ContactSection theme={theme} textColor={textColor} inverseBg={inverseBg} inverseText={inverseText} />
    </div>
  );
}
