import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

// Contact Section
export default function ContactSection({ theme, textColor, inverseBg, inverseText }: { theme: string, textColor: string, inverseBg: string, inverseText: string }) {
  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-4xl mx-auto w-full text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-8"
        >
          Lets Work Together
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-xl opacity-70 mb-12"
        >
          I am always interested in hearing about new projects and opportunities.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <motion.a
            href="mailto:alex@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${inverseBg} ${inverseText} px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 hover:shadow-2xl transition-shadow`}
          >
            <Mail className="w-5 h-5" />
            nguyentruongan0610@gmail.com
          </motion.a>

          <motion.a
            href="https://github.com/A3Scotl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${theme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'} px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 transition-colors`}
          >
            <Github className="w-5 h-5" />
            GitHub
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/nguyentruongan-se/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${theme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'} px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 transition-colors`}
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </motion.a>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 opacity-50 text-sm"
        >
          © 2025 AnNgyxn. All rights reserved.
        </motion.p>
      </div>
    </section>
  );
}
