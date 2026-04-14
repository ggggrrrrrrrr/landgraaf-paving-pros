import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { to: "/" as const, label: "Home" },
    { to: "/diensten" as const, label: "Diensten" },
    { to: "/projecten" as const, label: "Projecten" },
    { to: "/contact" as const, label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold tracking-tight text-primary-foreground lg:text-xl">
                Ron Smeijsters
              </span>
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary-foreground/60">
                Bestratingen
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm font-medium text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                activeProps={{ className: "text-sm font-medium text-primary-foreground" }}
                activeOptions={{ exact: true }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:0655510614"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              <Phone className="h-4 w-4" />
              Bel ons
            </a>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-primary-foreground"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block py-2 text-primary-foreground/80 font-medium"
                activeProps={{ className: "block py-2 text-primary-foreground font-medium" }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:0655510614"
              className="flex items-center gap-2 py-2 text-accent font-semibold"
            >
              <Phone className="h-4 w-4" />
              06 55510614
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
