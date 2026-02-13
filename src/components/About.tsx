import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto">
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
          <div className="space-y-5 text-muted-foreground leading-relaxed font-body text-base md:text-lg">
            <p>
              I am a Data Engineering and Analytics professional with over three years of industry experience working at Cognizant, supporting AbbVie's enterprise healthcare systems. I have managed and engineered data ecosystems handling over <span className="text-foreground font-medium">9 million physician records</span>, ensuring high accuracy, scalability, and reliability across systems.
            </p>
            <p>
              My expertise lies in designing end-to-end data pipelines, building OLTP to OLAP architectures, and implementing machine learning models for predictive healthcare analytics. I specialize in AWS-based integrations, Reltio MDM systems, Informatica workflows, and advanced SQL optimization.
            </p>
            <p>
              Currently pursuing my <span className="text-foreground font-medium">Master's in Engineering Science (Data Science)</span> at the University at Buffalo, I am focused on building intelligent, scalable, and explainable data systems that solve real-world healthcare and business challenges.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
