import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Scale, Globe, Users } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const highlights = [
  {
    icon: Scale,
    title: "Labour Law & Governance",
    description: "Examining legal frameworks governing employment relations, workplace governance and labour standards.",
  },
  {
    icon: Globe,
    title: "AI & Future of Work",
    description: "Exploring legal and policy implications of artificial intelligence and digital technologies in workplaces.",
  },
  {
    icon: Users,
    title: "Migration & Labour Markets",
    description: "Studying the intersection between immigration regulation, labour mobility and labour market governance.",
  },
  {
    icon: BookOpen,
    title: "Dispute Resolution",
    description: "Examining mediation, arbitration and alternative dispute resolution mechanisms for employment disputes.",
  },
];

const Index = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="container relative z-10 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              Zinago Institute for Policy &amp; Socio-Legal Research
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              An independent, non-profit research organisation advancing evidence-based scholarship on law, public policy and labour governance in Africa.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 gold-gradient text-primary font-semibold rounded transition-transform hover:scale-105"
              >
                Learn More <ArrowRight size={18} />
              </Link>
              <Link
                to="/research"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary-foreground/30 text-primary-foreground font-medium rounded hover:bg-primary-foreground/10 transition-colors"
              >
                Our Research
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            title="Research Focus Areas"
            subtitle="The Institute conducts interdisciplinary research on the impact of artificial intelligence, digital technologies and economic transformation on employment, labour regulation and social protection."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 rounded gold-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Banner */}
      <section className="section-alt py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <div className="w-16 h-1 gold-gradient rounded mx-auto mb-6" />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                To produce high-quality interdisciplinary research that advances evidence-based policymaking, strengthens labour governance and promotes legal frameworks that support fair, inclusive and sustainable labour markets.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
              >
                Read More About Us <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recent Publications Preview */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            title="Research Impact"
            subtitle="Research produced through the Institute contributes to international academic and policy discussions on labour governance, technological transformation and institutional reform."
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-lg p-8 md:p-12"
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              The Institute's work has been presented at international academic conferences hosted by institutions in the United States, the United Kingdom, Ireland and Nigeria, reflecting its growing engagement in global research networks.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              {[
                { number: "25+", label: "Peer-Reviewed Publications" },
                { number: "6+", label: "International Conferences" },
                { number: "5", label: "Research Programmes" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <span className="text-3xl md:text-4xl font-heading font-bold text-accent block">
                    {stat.number}
                  </span>
                  <span className="text-muted-foreground text-sm mt-1 block">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="text-center mt-8">
            <Link
              to="/publications"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
            >
              View All Publications <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
