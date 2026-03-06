import { Link } from "react-router-dom";

const SiteFooter = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-16">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded gold-gradient flex items-center justify-center">
              <span className="font-heading font-bold text-primary text-base">Z</span>
            </div>
            <span className="font-heading font-semibold text-lg">Zinago Institute</span>
          </div>
          <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
            An independent, non-profit research organisation dedicated to advancing evidence-based scholarship on law, public policy and labour governance in Africa.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-accent">Quick Links</h4>
          <nav className="flex flex-col gap-2">
            {[
              { label: "About", path: "/about" },
              { label: "Research Programmes", path: "/research" },
              { label: "Publications", path: "/publications" },
              { label: "Events", path: "/events" },
              { label: "Policy Research", path: "/policy" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-accent">Contact</h4>
          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            For research inquiries, collaboration proposals or general information, please reach out to the Institute.
          </p>
          <p className="text-primary-foreground/80 text-sm mt-3">
            info@zinagoinstitute.org
          </p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
        <p className="text-primary-foreground/40 text-sm">
          &copy; {new Date().getFullYear()} Zinago Institute for Policy and Socio-Legal Research. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
