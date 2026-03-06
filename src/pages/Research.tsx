import { motion } from "framer-motion";
import { Scale, Bot, Plane, Handshake, Trophy } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const programmes = [
  {
    icon: Scale,
    title: "Labour Law and Workplace Governance",
    description: "This research programme examines legal frameworks governing employment relations, workplace governance and labour standards. It focuses on worker protection, dispute resolution and regulatory responses to evolving labour market conditions.",
  },
  {
    icon: Bot,
    title: "Artificial Intelligence and the Future of Work",
    description: "This programme explores the legal and policy implications of artificial intelligence and digital technologies in modern workplaces. Research in this area focuses on algorithmic management, workplace surveillance, automated decision-making and the regulation of digital labour platforms.",
  },
  {
    icon: Plane,
    title: "Migration, Immigration and Labour Markets",
    description: "This programme studies the intersection between immigration regulation, labour mobility and labour market governance. It focuses on visa regimes, labour exploitation risks and regulatory frameworks governing cross-border employment.",
  },
  {
    icon: Handshake,
    title: "Dispute Resolution and Institutional Reform",
    description: "Research under this programme examines mediation, arbitration and other alternative dispute resolution mechanisms as tools for improving institutional accountability and resolving employment disputes efficiently.",
  },
  {
    icon: Trophy,
    title: "Sports Law and Sports Governance",
    description: "This programme explores legal and governance challenges in the sports sector, including sports arbitration, athlete rights, contractual governance and regulatory responses to match-fixing and betting scandals.",
  },
];

const flagshipProjects = [
  {
    title: "Governing Artificial Intelligence in African Labour Markets",
    description: "This project examines the increasing use of artificial intelligence and algorithmic management in African workplaces and its implications for labour regulation and worker protection.",
  },
  {
    title: "Migration and Labour Mobility Governance",
    description: "This research project investigates the relationship between immigration regulation, labour mobility and labour market governance, focusing on legal frameworks aimed at preventing labour exploitation and strengthening immigration compliance systems.",
  },
  {
    title: "Transforming Employment Dispute Resolution",
    description: "This project studies the role of mediation and alternative dispute resolution mechanisms in improving efficiency and accountability in employment dispute resolution.",
  },
  {
    title: "Algorithmic Management and Labour Rights",
    description: "This research project explores how algorithmic management systems affect worker autonomy, workplace monitoring and labour protection in digital workplaces.",
  },
  {
    title: "Integrity and Governance in Sports Administration",
    description: "This research examines governance challenges in the sports sector, including dispute resolution mechanisms, sports arbitration and regulatory responses to match-fixing and corruption in sports institutions.",
  },
];

const outputs = [
  "Peer-reviewed academic journal articles",
  "Policy briefs",
  "Working papers",
  "Conference papers",
  "Policy reports and research commentaries",
];

const Research = () => (
  <PageLayout>
    <section className="hero-gradient py-20 md:py-28">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4"
        >
          Research Programmes
        </motion.h1>
        <div className="w-16 h-1 gold-gradient rounded" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary-foreground/70 text-lg mt-4 max-w-2xl"
        >
          The Institute's research is organised around several core thematic areas.
        </motion.p>
      </div>
    </section>

    {/* Core Programmes */}
    <section className="py-16 md:py-24">
      <div className="container">
        <SectionHeading title="Core Research Programmes" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programmes.map((prog, i) => (
            <motion.div
              key={prog.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded gold-gradient flex items-center justify-center mb-4">
                <prog.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3">{prog.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{prog.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Flagship Projects */}
    <section className="section-alt py-16 md:py-24">
      <div className="container max-w-4xl">
        <SectionHeading title="Flagship Research Projects" />
        <div className="space-y-6">
          {flagshipProjects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-background border border-border rounded-lg p-6"
            >
              <h3 className="font-heading font-semibold text-lg mb-2">{project.title}</h3>
              <div className="w-10 h-0.5 gold-gradient rounded mb-3" />
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Research Impact & Outputs */}
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <SectionHeading title="Research Impact" />
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            Research produced through the Institute contributes to international academic and policy discussions on labour governance, technological transformation and institutional reform.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground mb-10">
            The Institute's work has been presented at international academic conferences hosted by institutions in the United States, the United Kingdom, Ireland and Nigeria, reflecting its growing engagement in global research networks.
          </p>
        </motion.div>

        <SectionHeading title="Research Outputs" />
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-lg text-muted-foreground mb-6">Research outputs produced by the Institute include:</p>
          <ul className="space-y-3">
            {outputs.map((output) => (
              <li key={output} className="flex items-start gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full gold-gradient mt-2 flex-shrink-0" />
                {output}
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground mt-6 leading-relaxed">
            These outputs aim to inform policymakers, researchers and institutions working on labour governance, artificial intelligence regulation and public policy reform.
          </p>
        </motion.div>
      </div>
    </section>
  </PageLayout>
);

export default Research;
