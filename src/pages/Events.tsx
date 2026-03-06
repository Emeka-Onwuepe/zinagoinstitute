import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";

interface ConferenceEvent {
  conference: string;
  host: string;
  theme?: string;
  location: string;
  date: string;
  paper: string;
  authors: string;
  year: string;
  summary: string;
}

const internationalEvents: ConferenceEvent[] = [
  {
    conference: "Labor and Employment Relations Association Annual Meeting",
    host: "Labor and Employment Relations Association",
    theme: "Bridging the Divide: Tripartite Solutions for a Changing World",
    location: "Minneapolis, Minnesota, United States",
    date: "28–31 May 2026",
    paper: "Regulating the Algorithm: Rethinking Labour Rights and Collective Bargaining in the Age of Artificial Intelligence",
    authors: "Nancy Nzom",
    year: "2026",
    summary: "This research examines how algorithmic management is transforming labour governance and collective bargaining frameworks. It explores regulatory approaches aimed at protecting workers in artificial intelligence-driven workplaces.",
  },
  {
    conference: "Americans with Disabilities Act and Universal Design Conference",
    host: "Syracuse University College of Law",
    theme: "Americans with Disabilities Act and Universal Design: Global Legacy and Potential in Higher Education",
    location: "Syracuse, New York, United States",
    date: "10 April 2026",
    paper: "Artificial Intelligence for Inclusion: Operationalising Universal Design for Learning in African Universities",
    authors: "Nancy Nzom",
    year: "2026",
    summary: "This research explores how artificial intelligence can strengthen accessibility and inclusive education in African universities through the framework of Universal Design for Learning.",
  },
  {
    conference: "Agriculture and Food Policy Spring Symposium",
    host: "University of St. Thomas School of Law",
    theme: "",
    location: "Virtual Symposium",
    date: "10 April 2026",
    paper: "Joint Presentation",
    authors: "Nancy Nzom & Daniel Moses Eyyazo",
    year: "2026",
    summary: "This research examines regulatory and governance issues within agricultural and food policy systems, including institutional ownership of farmland and broader policy implications for food security and rural development.",
  },
  {
    conference: "Development Studies Association Annual Conference",
    host: "University College Dublin",
    theme: "Reimagining Development: Power, Agency and Futures in an Uncertain World",
    location: "Dublin, Ireland",
    date: "8–11 July 2026",
    paper: "Reimagining Labour Regulation in the Age of Algorithmic Management: Power, Agency and Job Quality in the Global South",
    authors: "Nancy Nzom & Daniel Moses Eyyazo",
    year: "2026",
    summary: "This research analyses the implications of algorithmic management for labour regulation and job quality in the Global South and proposes legal and institutional frameworks aimed at protecting workers in digitally managed workplaces.",
  },
  {
    conference: "Human Resource Management and Employment Relations Conference",
    host: "King's Business School",
    theme: "Shaping the Future of Work",
    location: "London, United Kingdom",
    date: "2026",
    paper: "Artificial Intelligence as Workplace Infrastructure: Accessibility, Algorithmic Management and Employment Protection",
    authors: "Nancy Nzom",
    year: "2026",
    summary: "This research analyses how artificial intelligence is reshaping workplace governance and employment protection frameworks and evaluates regulatory approaches for ensuring fairness, accessibility and accountability in technology-driven workplaces.",
  },
];

const nigerianEvents: ConferenceEvent[] = [
  {
    conference: "Hybrid International Conference on Sustainable Development Goals, Contemporary Challenges and the Role of Law",
    host: "Faculty of Law, University of Nigeria",
    theme: "",
    location: "Enugu, Nigeria",
    date: "24 June 2025",
    paper: "Labour Disputes, Legal Frameworks and the Sustainable Development Goals: Strengthening Public Sector Accountability through Effective Dispute Resolution in Nigeria",
    authors: "Nancy Nzom",
    year: "2025",
    summary: "This research examines the role of effective dispute resolution mechanisms in strengthening labour governance and institutional accountability in Nigeria's public sector while supporting the achievement of the Sustainable Development Goals.",
  },
];

const EventCard = ({ event, index }: { event: ConferenceEvent; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="bg-card border border-border rounded-lg p-6 md:p-8"
  >
    <h3 className="font-heading font-semibold text-xl mb-2">{event.conference}</h3>
    <p className="text-sm text-muted-foreground mb-1">Host: {event.host}</p>
    {event.theme && <p className="text-sm text-muted-foreground italic mb-3">Theme: {event.theme}</p>}
    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
      <span className="flex items-center gap-1"><MapPin size={14} className="text-accent" /> {event.location}</span>
      <span className="flex items-center gap-1"><Calendar size={14} className="text-accent" /> {event.date}</span>
    </div>
    <div className="border-t border-border pt-4 mt-2">
      <p className="text-sm text-muted-foreground mb-1">{event.authors} ({event.year})</p>
      <h4 className="font-heading font-semibold text-base mb-2">{event.paper}</h4>
      <p className="text-muted-foreground text-sm leading-relaxed">{event.summary}</p>
    </div>
  </motion.div>
);

const Events = () => (
  <PageLayout>
    <section className="hero-gradient py-20 md:py-28">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4"
        >
          Events &amp; Conferences
        </motion.h1>
        <div className="w-16 h-1 gold-gradient rounded" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary-foreground/70 text-lg mt-4 max-w-2xl"
        >
          The Zinago Institute participates in academic conferences, policy dialogues and scholarly forums that contribute to global discussions on labour governance, artificial intelligence, migration regulation and institutional reform.
        </motion.p>
      </div>
    </section>

    {/* International */}
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <SectionHeading title="International Conference Presentations" />
        <div className="space-y-6">
          {internationalEvents.map((event, i) => (
            <EventCard key={i} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>

    {/* Nigerian */}
    <section className="section-alt py-16 md:py-24">
      <div className="container max-w-4xl">
        <SectionHeading title="Academic Conferences in Nigeria" />
        <div className="space-y-6">
          {nigerianEvents.map((event, i) => (
            <EventCard key={i} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>

    {/* Engagement */}
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <SectionHeading title="Academic Engagement" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            Through participation in international conferences and academic forums across the United States, the United Kingdom, Ireland and Nigeria, the Zinago Institute contributes to global scholarly discussions on labour law, artificial intelligence, governance reform and the future of work.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            These engagements strengthen research collaboration, knowledge exchange and the development of evidence-based legal and policy solutions to contemporary labour and governance challenges.
          </p>
        </motion.div>
      </div>
    </section>
  </PageLayout>
);

export default Events;
