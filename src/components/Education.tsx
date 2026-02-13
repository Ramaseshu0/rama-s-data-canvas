import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master of Engineering Science (Data Science)",
    school: "University at Buffalo, Buffalo, NY",
    period: "2025 – 2026",
    gpa: "3.5 / 4.0",
  },
  {
    degree: "B.Tech – Electronics & Communication Engineering",
    school: "Amrita University, Bangalore, India",
    period: "2017 – 2021",
    gpa: "7.28 / 10",
  },
];

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
            <span className="text-primary">05.</span> Education
          </h2>
          <div className="w-20 h-0.5 bg-gradient-primary mb-10" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-gradient glow-border rounded-xl p-6"
            >
              <GraduationCap className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display font-bold text-foreground text-base mb-1">
                {edu.degree}
              </h3>
              <p className="text-muted-foreground text-sm mb-3">{edu.school}</p>
              <div className="flex items-center justify-between text-xs font-display">
                <span className="text-primary">{edu.period}</span>
                <span className="text-muted-foreground">GPA: {edu.gpa}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
