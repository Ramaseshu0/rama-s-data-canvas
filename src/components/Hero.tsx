import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, FileText, ChevronDown } from "lucide-react";

const roles = [
  "Data Engineer",
  "ML Enthusiast",
  "BI & Analytics Specialist",
];

const stats = [
  { value: "9M+", label: "HCP Records Engineered" },
  { value: "3+", label: "Years Industry Experience" },
  { value: "25%", label: "Latency Reduced" },
  { value: "100%", label: "Data Accuracy" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(175 70% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(175 70% 50%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Soft glow accents */}
      <div className="absolute top-1/3 -left-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-display text-primary text-sm md:text-base tracking-widest mb-4">
            {"// hello world"}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 text-foreground">
            Rama Seshu <span className="text-gradient">Pasupuleti</span>
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-base md:text-lg text-muted-foreground font-body mb-6">
            {roles.map((role, i) => (
              <span key={role} className="flex items-center gap-2 md:gap-3">
                <span>{role}</span>
                {i < roles.length - 1 && (
                  <span className="text-primary/60">·</span>
                )}
              </span>
            ))}
          </div>

          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Building scalable data ecosystems and intelligent analytics — from
            healthcare-scale MDM pipelines to ML models that drive real-world
            decisions.
          </p>

          <p className="text-sm text-muted-foreground font-display flex items-center justify-center gap-2 mb-10">
            <MapPin className="w-4 h-4 text-primary" />
            Buffalo, NY · Open to opportunities
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-16"
        >
          <a
            href="mailto:pramaseshu12345@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground font-display text-sm rounded-lg hover:opacity-90 transition-opacity"
          >
            <Mail className="w-4 h-4" /> Contact Me
          </a>
          <a
            href={`${import.meta.env.BASE_URL}Rama_Seshu_Pasupuleti_Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary/40 text-foreground font-display text-sm rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
          >
            <FileText className="w-4 h-4 text-primary" /> View Resume
          </a>
          <a
            href="https://github.com/Ramaseshu0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-display text-sm rounded-lg hover:border-primary/50 transition-colors"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rama-seshu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-display text-sm rounded-lg hover:border-primary/50 transition-colors"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="card-gradient glow-border rounded-lg px-4 py-5"
            >
              <div className="text-2xl md:text-3xl font-display font-bold text-gradient">
                {s.value}
              </div>
              <div className="text-[11px] md:text-xs text-muted-foreground font-body mt-1 leading-tight">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute -bottom-2 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-primary animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
