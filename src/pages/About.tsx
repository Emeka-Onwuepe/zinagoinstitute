import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => (
  <PageLayout>
    {/* Page Hero */}
    <section className="hero-gradient py-20 md:py-28">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4"
        >
          About the Institute
        </motion.h1>
        <div className="w-16 h-1 gold-gradient rounded" />
      </div>
    </section>

    {/* About */}
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="prose-section">
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            Zinago Institute for Policy and Socio-Legal Research is an independent, non-profit research organisation dedicated to advancing evidence-based scholarship on law, public policy and labour governance in Africa.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            The Institute conducts interdisciplinary research on the impact of artificial intelligence, digital technologies and economic transformation on employment, labour regulation and social protection.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            Through research, policy engagement and capacity building, the Institute contributes to informed legal reform, institutional development and the promotion of decent work.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            The Institute aims to serve as a platform for rigorous socio-legal research that informs policy development, strengthens institutions and promotes inclusive economic and social progress.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-alt py-16 md:py-24">
      <div className="container max-w-4xl">
        <SectionHeading title="Mission and Vision" />
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-background border border-border rounded-lg p-8">
            <h3 className="font-heading text-2xl font-semibold mb-4">Mission</h3>
            <div className="w-12 h-1 gold-gradient rounded mb-4" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              The mission of Zinago Institute is to produce high-quality interdisciplinary research that advances evidence-based policymaking, strengthens labour governance and promotes legal frameworks that support fair, inclusive and sustainable labour markets.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The Institute seeks to bridge the gap between academic research, public policy and institutional practice through scholarship, policy dialogue and professional training.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-background border border-border rounded-lg p-8">
            <h3 className="font-heading text-2xl font-semibold mb-4">Vision</h3>
            <div className="w-12 h-1 gold-gradient rounded mb-4" />
            <p className="text-muted-foreground leading-relaxed">
              The Institute's vision is to become a leading African research centre on labour law, artificial intelligence governance and the future of work, contributing to global policy discussions on employment regulation, technological change and social justice.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Institutional Commitment */}
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <SectionHeading title="Institutional Commitment" />
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            Zinago Institute operates exclusively for public benefit and is committed to advancing research and policy development that promote justice, decent work and inclusive economic development.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            The Institute is guided by principles of academic independence, intellectual integrity and evidence-based policy engagement.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            All research and programme activities are conducted in furtherance of the Institute's public-interest objectives and not for private profit.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Collaboration */}
    <section className="section-alt py-16 md:py-24">
      <div className="container max-w-4xl">
        <SectionHeading title="Collaboration and Partnerships" />
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            Zinago Institute collaborates with universities, research institutions, government agencies, international organisations and civil society organisations in order to advance socio-legal research and policy development.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            Through these partnerships, the Institute promotes knowledge exchange, interdisciplinary research and the development of innovative legal and policy responses to emerging challenges affecting labour markets, technological change and institutional governance.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            The Institute also seeks to engage with scholars, policymakers and practitioners across Africa and globally to strengthen collaborative research on the future of work.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Funding */}
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <SectionHeading title="Funding and Support" />
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            As a non-profit research organisation, Zinago Institute supports its research and programmes through grants, research funding, donations and institutional partnerships that advance its public-interest objectives.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            All resources received are applied solely towards the Institute's research, educational and policy development activities in accordance with applicable laws and regulatory requirements.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            The Institute welcomes collaboration and support from research partners, philanthropic foundations, development organisations and institutions that share its commitment to advancing evidence-based policy research and institutional reform.
          </p>
        </motion.div>
      </div>
    </section>
  </PageLayout>
);

export default About;
