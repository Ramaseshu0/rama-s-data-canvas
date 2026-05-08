import { motion } from "framer-motion";
import { Database, Brain, BarChart3, Cloud } from "lucide-react";

const focusAreas = [
  {
    icon: Database,
    title: "Data Engineering",
    description: "End-to-end pipelines, MDM, ETL/ELT, and warehousing at scale.",
  },
  {
    icon: Cloud,
    title: "Cloud & Integration",
    description: "AWS-native designs, Informatica, Reltio, and API ecosystems.",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Predictive modeling for healthcare with explainable AI.",
  },
  {
    icon: BarChart3,
    title: "BI & Analytics",
    description: "Tableau, Power BI, and Streamlit for decision-grade insights.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
            <span className="text-primary">01.</span> About Me
          </h2>
          <div className="w-20 h-0.5 bg-gradient-primary mb-10" />
          <div className="space-y-5 text-muted-foreground leading-relaxed font-body text-base md:text-lg max-w-4xl">
            <p>
              I'm a Data Engineering and Analytics professional with over three
              years of industry experience at Cognizant, supporting AbbVie's
              enterprise healthcare systems. I've engineered data ecosystems
              handling{" "}
              <span className="text-foreground font-medium">
                9 million+ physician records
              </span>{" "}
              with high accuracy, scalability, and reliability.
            </p>
            <p>
              My expertise lies in designing end-to-end data pipelines, building
              OLTP → OLAP architectures, and implementing machine learning models
              for predictive healthcare analytics. I specialize in AWS-based
              integrations, Reltio MDM, Informatica workflows, and advanced SQL
              optimization.
            </p>
            <p>
              I'm currently pursuing my{" "}
              <span className="text-foreground font-medium">
                M.S. in Engineering Science (Data Science)
              </span>{" "}
              at the University at Buffalo, where I focus on building intelligent,
              scalable, and explainable data systems for real-world impact.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {focusAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-gradient glow-border rounded-xl p-5 hover:border-primary/40 transition-colors"
            >
              <area.icon className="w-7 h-7 text-primary mb-3" />
              <h3 className="font-display text-sm font-semibold text-foreground mb-1.5">
                {area.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
