import { motion } from "framer-motion";

const Experience = () => {
  const bullets = [
    "Engineered and managed the Reltio Cloud MDM ecosystem handling 9M+ physician (HCP) records, ensuring seamless integrations with 100% transaction accuracy across enterprise systems.",
    "Designed and developed end-to-end data ingestion workflows by creating structured JSON payloads and integrating sensitive healthcare data using AWS, Informatica PowerCenter, and Java.",
    "Leveraged Oracle SQL, Teradata, Postman, and AWS services to optimize large-scale healthcare data operations and streamline cross-platform data movement.",
    "Enhanced and maintained real-time data workflows using AutoSys and Informatica, proactively resolving technical issues to ensure uninterrupted data transitions.",
    "Implemented and optimized List of Values (LOV) frameworks in Reltio, reloading historical data to reflect evolving business rules and compliance needs.",
    "Developed interactive Tableau dashboards and analytical reports enabling executive-level decision-making, performance tracking, and actionable business insights.",
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
            <span className="text-primary">03.</span> Experience
          </h2>
          <div className="w-20 h-0.5 bg-gradient-primary mb-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card-gradient glow-border rounded-xl p-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h3 className="text-xl font-display font-bold text-foreground">
                Associate / Data Analyst
              </h3>
              <p className="text-primary font-display text-sm mt-1">
                Cognizant Technology Solutions · Client: AbbVie
              </p>
            </div>
            <p className="text-muted-foreground text-sm font-display mt-2 md:mt-0">
              2021 – 2025 · Hyderabad, India
            </p>
          </div>

          <ul className="space-y-4">
            {bullets.map((item, i) => (
              <li key={i} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                <span className="text-primary mt-1 shrink-0">▹</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
