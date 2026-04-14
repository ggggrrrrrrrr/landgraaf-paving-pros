import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { to: "/" as const, label: "Home" },
    { to: "/diensten" as const, label: "Diensten" },
    { to: "/projecten" as const, label: "Projecten" },
    { to: "/contact" as const, label: "Contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-primary/98 backdrop-blur-md shadow-lg" : "bg-primary/90 backdrop-blur-sm"} border-b border-primary-foreground/10`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between sm:h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="font-display text-base font-bold tracking-tight text-primary-foreground sm:text-lg lg:text-xl">
                Ron Smeijsters
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] text-primary-foreground/60">
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
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90 shadow-md shadow-accent/20"
            >
              <Phone className="h-4 w-4" />
              Bel ons
            </a>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-primary-foreground p-2 -mr-2"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10 animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block py-3 px-3 rounded-lg text-primary-foreground/80 font-medium hover:bg-primary-foreground/5 transition-colors"
                activeProps={{ className: "block py-3 px-3 rounded-lg text-primary-foreground font-medium bg-primary-foreground/5" }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:0655510614"
              className="flex items-center gap-2 py-3 px-3 mt-2 rounded-lg bg-accent text-accent-foreground font-semibold"
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
