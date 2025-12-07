import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  portals: [
    { name: "Producer Portal", path: "/producer" },
    { name: "Wholesaler Portal", path: "/wholesaler" },
    { name: "Retailer Portal", path: "/retailer" },
    { name: "Customer Ordering", path: "/order" },
  ],
  company: [
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Careers", path: "/careers" },
    { name: "Blog", path: "/blog" },
  ],
  support: [
    { name: "Help Center", path: "/help" },
    { name: "FAQs", path: "/contact#faq" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Privacy Policy", path: "/privacy" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src={logo} alt="UrbanSwift Logistics" className="h-14 w-auto mb-6 brightness-0 invert" />
            <p className="text-secondary-foreground/70 mb-6 max-w-sm">
              Fast, direct, and reliable deliveries for every need. Connecting producers, wholesalers, retailers, and customers seamlessly.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Portals */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Portals</h4>
            <ul className="space-y-3">
              {footerLinks.portals.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-secondary-foreground/70">
                <Phone className="h-5 w-5 text-primary" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/70">
                <Mail className="h-5 w-5 text-primary" />
                hello@urbanswift.com
              </li>
              <li className="flex items-start gap-3 text-secondary-foreground/70">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                123 Logistics Ave, Suite 100, New York, NY 10001
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/60 text-sm">
            © {new Date().getFullYear()} UrbanSwift Logistics. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-secondary-foreground/60">
            <Link to="/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link to="/cookies" className="hover:text-primary transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
