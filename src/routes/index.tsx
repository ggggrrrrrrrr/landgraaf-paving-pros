import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project4 from "@/assets/project-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ron Smeijsters Bestratingen — Vakkundige Bestrating in Landgraaf" },
      { name: "description", content: "Ron Smeijsters Bestratingen: uw specialist voor bestrating, tuinaanleg en opritten in Landgraaf en omstreken. Vraag vrijblijvend een offerte aan." },
      { property: "og:title", content: "Ron Smeijsters Bestratingen — Landgraaf" },
      { property: "og:description", content: "Specialist in bestrating, tuinaanleg en opritten in Landgraaf en omstreken." },
    ],
  }),
  component: HomePage,
});

const services = [
  { title: "Terras & Patio", desc: "Stijlvolle terrassen met keramische tegels, natuursteen of betonstenen." },
  { title: "Opritten", desc: "Duurzame en fraaie opritten die de uitstraling van uw woning versterken." },
  { title: "Tuinaanleg", desc: "Complete tuinaanleg met bestrating, grind, borders en gazon." },
  { title: "Trappen & Niveaus", desc: "Stijlvolle trappen en hoogteverschillen in steen en beton." },
];

const strengths = [
  "Meer dan 15 jaar ervaring",
  "Persoonlijke aanpak",
  "Gratis advies en offerte",
  "Vakkundig en betrouwbaar",
  "Regio Landgraaf & Zuid-Limburg",
  "Garantie op werkzaamheden",
];

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Bestrating voorbeeld" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-4">
              Bestrating specialist · Landgraaf
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Vakmanschap in
              <span className="block text-accent"> elke steen</span>
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed max-w-lg">
              Van terras tot oprit — wij realiseren uw droomproject met oog voor detail en jarenlange ervaring.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent/90 hover:gap-3"
              >
                Gratis offerte aanvragen
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:0655510614"
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <Phone className="h-4 w-4" />
                06 55510614
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {strengths.map((s) => (
              <div key={s} className="flex items-start gap-2 text-sm text-secondary-foreground">
                <CheckCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-2">Wat wij doen</p>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">Onze diensten</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="group rounded-lg border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-accent/30">
                <h3 className="font-display text-lg font-semibold text-card-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/diensten" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all">
              Bekijk alle diensten <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="bg-primary py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-2">Ons werk</p>
            <h2 className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl">Recente projecten</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[project1, project2, project4].map((img, i) => (
              <div key={i} className="group overflow-hidden rounded-lg aspect-[4/3]">
                <img
                  src={img}
                  alt={`Project ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={600}
                  height={450}
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/projecten" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all">
              Bekijk alle projecten <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Klaar voor uw nieuwe bestrating?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Neem vrijblijvend contact met ons op voor een gratis adviesgesprek en offerte op maat.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              Contact opnemen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
