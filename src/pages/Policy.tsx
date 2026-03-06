import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";

const policyTopics = [
  "Artificial intelligence regulation in labour markets",
  "Algorithmic management and worker protection",
  "Migration governance and labour mobility",
  "Prevention of workplace violence",
];

const Policy = () => (
  <PageLayout>
    <section className="hero-gradient py-20 md:py-28">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4"
        >
          Policy Research &amp; Working Papers
        </motion.h1>
        <div className="w-16 h-1 gold-gradient rounded" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary-foreground/70 text-lg mt-4 max-w-2xl"
        >
          Translating academic research into practical policy recommendations for governments, international organisations and regulatory institutions.
        </motion.p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            The Zinago Institute for Policy and Socio-Legal Research produces policy-oriented research designed to inform public debate, support evidence-based policymaking and strengthen legal and institutional frameworks governing work, technology and social protection.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Through policy briefs, working papers and applied research reports, the Institute translates academic research into practical policy recommendations for governments, international organisations and regulatory institutions.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="section-alt py-16 md:py-24">
      <div className="container max-w-4xl">
        <SectionHeading title="Policy Briefs" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-lg leading-relaxed text-muted-foreground mb-8">
            Policy briefs provide concise and accessible analyses of emerging legal and policy issues affecting labour markets, governance systems and technological transformation.
          </p>
          <p className="text-muted-foreground mb-4">The Institute develops policy briefs addressing topics such as:</p>
          <ul className="space-y-3">
            {policyTopics.map((topic) => (
              <li key={topic} className="flex items-start gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full gold-gradient mt-2 flex-shrink-0" />
                {topic}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  </PageLayout>
);

export default Policy;
