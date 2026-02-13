import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, Download, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(hsl(175 70% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(175 70% 50%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-display text-primary text-sm md:text-base tracking-widest mb-4">
            {"// hello world"}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 text-foreground">
            Rama Seshu{" "}
            <span className="text-gradient">Pasupuleti</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-8 leading-relaxed">
            Data Engineer · Machine Learning Enthusiast · BI & Analytics Specialist
          </p>
          <p className="text-sm text-muted-foreground font-display flex items-center justify-center gap-2 mb-10">
            <MapPin className="w-4 h-4 text-primary" />
            Buffalo, NY
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="mailto:pramaseshu12345@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground font-display text-sm rounded-lg hover:opacity-90 transition-opacity">
            <Mail className="w-4 h-4" /> Contact Me
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-display text-sm rounded-lg hover:border-primary/50 transition-colors">
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-display text-sm rounded-lg hover:border-primary/50 transition-colors">
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-primary animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
