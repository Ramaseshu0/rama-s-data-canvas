import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
            <span className="text-primary">06.</span> Get In Touch
          </h2>
          <div className="w-20 h-0.5 bg-gradient-primary mx-auto mb-8" />
          <p className="text-muted-foreground font-body mb-10 max-w-lg mx-auto">
            I am always open to discussing new opportunities, collaborations, and innovative data-driven projects.
          </p>

          <div className="flex flex-col items-center gap-4 mb-10">
            <a href="mailto:pramaseshu12345@gmail.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors font-display text-sm">
              <Mail className="w-4 h-4 text-primary" /> pramaseshu12345@gmail.com
            </a>
            <a href="tel:+17167091548" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors font-display text-sm">
              <Phone className="w-4 h-4 text-primary" /> +1-716-709-1548
            </a>
            <p className="flex items-center gap-3 text-muted-foreground font-display text-sm">
              <MapPin className="w-4 h-4 text-primary" /> Buffalo, NY
            </p>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        <p className="text-muted-foreground text-xs font-display mt-20">
          © 2025 Rama Seshu Pasupuleti
        </p>
      </div>
    </section>
  );
};

export default Contact;
