import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Healthcare Admissions Analytics System",
    subtitle: "End-to-End Data Engineering Project",
    description: "Built a complete OLTP → OLAP healthcare analytics pipeline to analyze patient appointment no-show behavior using a real-world dataset.",
    bullets: [
      "Designed a normalized transactional schema and transformed it into an analytics-ready star schema.",
      "Implemented PostgreSQL, Python, dbt, and Docker for scalable and modular data transformation.",
      "Performed advanced SQL analysis using CTEs, window functions, and performance optimization.",
      "Developed an interactive Streamlit dashboard with KPIs and filters for demographic insights.",
    ],
    tech: ["PostgreSQL", "Python", "dbt", "Docker", "Streamlit", "SQL"],
  },
  {
    title: "Early Detection of Type 2 Diabetes",
    subtitle: "Machine Learning Project",
    description: "Developed predictive ML models on a 253K-record healthcare dataset to identify early-stage Type 2 Diabetes risk.",
    bullets: [
      "Built and compared Logistic Regression, Random Forest, and XGBoost models.",
      "Achieved 81% accuracy with XGBoost.",
      "Applied ROC-AUC and PR-AUC evaluation techniques for imbalanced medical datasets.",
      "Conducted feature importance analysis to enhance model explainability.",
    ],
    tech: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Matplotlib"],
  },
  {
    title: "Early Detection of Cardiovascular Disease",
    subtitle: "Machine Learning Project",
    description: "Designed and optimized ensemble ML models to predict cardiovascular disease risk using structured clinical data.",
    bullets: [
      "Implemented Logistic Regression, Random Forest, and XGBoost with cross-validation.",
      "Applied feature scaling and feature selection for robust model performance.",
      "Achieved strong ROC-AUC performance using ensemble modeling techniques.",
      "Identified key clinical risk factors through explainable AI techniques.",
    ],
    tech: ["Python", "Scikit-learn", "XGBoost", "Pandas"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
            <span className="text-primary">04.</span> Projects
          </h2>
          <div className="w-20 h-0.5 bg-gradient-primary mb-10" />
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-gradient glow-border rounded-xl p-8"
            >
              <p className="text-primary font-display text-xs tracking-widest mb-2 uppercase">
                {project.subtitle}
              </p>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {project.description}
              </p>
              <ul className="space-y-2 mb-6">
                {project.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-muted-foreground text-sm">
                    <span className="text-primary shrink-0">▹</span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-display px-3 py-1 rounded-full bg-secondary text-primary">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
