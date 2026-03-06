import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = false }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className={`mb-10 ${centered ? "text-center" : ""}`}
  >
    <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
      {title}
    </h2>
    <div className={`w-16 h-1 gold-gradient rounded mb-4 ${centered ? "mx-auto" : ""}`} />
    {subtitle && (
      <p className="text-muted-foreground max-w-2xl leading-relaxed text-lg">
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
