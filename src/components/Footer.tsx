import { Home, Package, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="section-gray py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <Home className="w-6 h-6 text-porch-orange absolute" strokeWidth={2.5} />
                <Package className="w-3 h-3 text-primary-foreground absolute bottom-1 right-1" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-lg text-primary-foreground">
                PorchPickup Storage
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              Storage without leaving your porch.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-6 justify-center">
            {[
              { href: "#how-it-works", label: "How It Works" },
              { href: "#pricing", label: "Pricing" },
              { href: "#faq", label: "FAQ" },
            ].map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Location */}
          <div className="text-center md:text-right">
            <div className="inline-flex items-center gap-2 text-primary-foreground/70 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Secure, climate-controlled facility in the north metro area</span>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} PorchPickup Storage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
