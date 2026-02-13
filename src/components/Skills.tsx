import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming & Scripting",
    skills: ["Python", "Java", "R", "C", "SQL", "Shell Scripting"],
  },
  {
    title: "Data Engineering & ETL",
    skills: ["AWS (S3, EC2, SQS)", "Informatica PowerCenter", "Reltio MDM", "AutoSys", "dbt"],
  },
  {
    title: "Databases & Warehousing",
    skills: ["PostgreSQL", "Oracle SQL", "MySQL", "Teradata", "Snowflake"],
  },
  {
    title: "Machine Learning & Big Data",
    skills: ["XGBoost", "Random Forest", "Logistic Regression", "Apache Spark", "PySpark"],
  },
  {
    title: "BI & Visualization",
    skills: ["Power BI", "Tableau", "Streamlit", "Matplotlib", "Seaborn"],
  },
  {
    title: "DevOps & Tools",
    skills: ["REST APIs", "JSON", "Git", "Docker", "Postman"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
            <span className="text-primary">02.</span> Technical Skills
          </h2>
          <div className="w-20 h-0.5 bg-gradient-primary mb-10" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-gradient glow-border rounded-xl p-6"
            >
              <h3 className="font-display text-sm text-primary mb-4 tracking-wide">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-body px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {skill}
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

export default Skills;
