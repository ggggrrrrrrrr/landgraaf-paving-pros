import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="font-display text-2xl font-bold">Ron Smeijsters</h3>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-primary-foreground/50">Bestratingen</p>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
              Vakkundige bestrating en tuinaanleg in Landgraaf en omstreken. Al jaren uw betrouwbare partner voor elk project.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Navigatie</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Home</Link>
              <Link to="/diensten" className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Diensten</Link>
              <Link to="/projecten" className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Projecten</Link>
              <Link to="/contact" className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:0617432464" className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4 text-accent" />
                06 17432464
              </a>
              <a href="mailto:ron.bestratingen@hotmail.com" className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Mail className="h-4 w-4 text-accent" />
                ron.bestratingen@hotmail.com
              </a>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <span>Veeweg 91, 6374 AN Landgraaf<br />Limburg</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Ron Smeijsters Bestratingen. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
}
