import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle, Phone, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg-new.png";
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
  { title: "Terras & Patio", desc: "Stijlvolle terrassen met keramische tegels, natuursteen of betonstenen.", icon: "🏡" },
  { title: "Opritten", desc: "Duurzame en fraaie opritten die de uitstraling van uw woning versterken.", icon: "🚗" },
  { title: "Tuinaanleg", desc: "Complete tuinaanleg met bestrating, grind, borders en gazon.", icon: "🌿" },
  { title: "Trappen & Niveaus", desc: "Stijlvolle trappen en hoogteverschillen in steen en beton.", icon: "🪜" },
];

const strengths = [
  "Meer dan 15 jaar ervaring",
  "Persoonlijke aanpak",
  "Gratis advies en offerte",
  "Vakkundig en betrouwbaar",
  "Regio Landgraaf & Zuid-Limburg",
  "Garantie op werkzaamheden",
];

const reviews = [
  { name: "Familie Janssen", text: "Fantastisch werk! Ons terras ziet er prachtig uit. Ron denkt echt mee en levert topkwaliteit.", rating: 5 },
  { name: "Peter de Vries", text: "Zeer tevreden met onze nieuwe oprit. Netjes en snel gewerkt. Absolute aanrader!", rating: 5 },
  { name: "Sandra Willems", text: "Van ontwerp tot oplevering perfect verzorgd. De tuin is precies geworden zoals we wilden.", rating: 5 },
];

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Bestrating voorbeeld" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 mb-6 border border-accent/30">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">Bestrating specialist · Landgraaf</span>
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Vakmanschap in
              <span className="block text-accent"> elke steen</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-primary-foreground/80 leading-relaxed max-w-lg">
              Van terras tot oprit — wij realiseren uw droomproject met oog voor detail en jarenlange ervaring.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent/90 hover:gap-3 shadow-lg shadow-accent/25"
              >
                Gratis offerte aanvragen
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:0655510614"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/30 px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <Phone className="h-4 w-4" />
                06 55510614
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="bg-secondary py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {strengths.map((s) => (
              <div key={s} className="flex items-start gap-2 text-xs sm:text-sm text-secondary-foreground">
                <CheckCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-2">Wat wij doen</p>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">Onze diensten</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">Wij bieden een breed scala aan bestratings- en tuindiensten voor particulieren in de regio.</p>
          </div>
          <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="group rounded-xl border border-border bg-card p-5 sm:p-6 transition-all hover:shadow-xl hover:border-accent/30 hover:-translate-y-1">
                <span className="text-2xl sm:text-3xl">{s.icon}</span>
                <h3 className="mt-3 font-display text-base sm:text-lg font-semibold text-card-foreground">{s.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-10">
            <Link to="/diensten" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all">
              Bekijk alle diensten <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="bg-primary py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-2">Ons werk</p>
            <h2 className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl">Recente projecten</h2>
          </div>
          <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-3">
            {[project1, project2, project4].map((img, i) => (
              <div key={i} className="group overflow-hidden rounded-xl aspect-[4/3]">
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
          <div className="text-center mt-8 sm:mt-10">
            <Link to="/projecten" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all">
              Bekijk alle projecten <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 sm:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-2">Ervaringen</p>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">Wat klanten zeggen</h2>
          </div>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-xl bg-card p-6 sm:p-8 border border-border">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic">"{r.text}"</p>
                <p className="mt-4 text-sm font-semibold text-card-foreground">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Klaar voor uw nieuwe bestrating?
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base">
            Neem vrijblijvend contact met ons op voor een gratis adviesgesprek en offerte op maat.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors shadow-lg shadow-accent/25"
            >
              Contact opnemen
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:0655510614"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              <Phone className="h-4 w-4" />
              06 55510614
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
