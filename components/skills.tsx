import { motion } from 'framer-motion';
import { Code2, Database, Figma } from 'lucide-react';
const skills = {
  frontend: [
    'ReactJS',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion'
  ],
  backend: [
    'Node.js',
    'Java',
    'Spring Boot ',
    'Hibernate '
  ],
  databases: [
    'MySQL',
    'MongoDB',
    'MariaDB',
    'SQL Server'
  ],
  tools: [
    'Git',
    'Docker',
    'Postman',
    'AWS',
    'VS Code',
  ],
  stateManagement: [
    'Zustand ',
    'React Query '
  ],
  dataHandling: [
    'RESTful API ',
    'WebSocket',
    'Microservices '
  ]
};


export default function SkillsSection({ theme, textColor, inverseBg, inverseText }: { theme: string, textColor: string, inverseBg: string, inverseText: string }) {
  return (
    <section id="skills" className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-7xl mx-auto md:px-0 p-4">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-16 text-center"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                {/* {category === 'frontend' && <Code2 className="w-6 h-6" />}
                {category === 'backend' && <Database className="w-6 h-6" />}
                {category === 'tools' && <Figma className="w-6 h-6" />}
                {category === 'stateManagement' && <Figma className="w-6 h-6" />}
                {category === 'dataHandling' && <Figma className="w-6 h-6" />}
                {category === 'databases' && <Figma className="w-6 h-6" />} */}
                <h3 className="text-2xl font-bold capitalize">{category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {items.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: categoryIndex * 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className={`${theme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'} px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-default`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
