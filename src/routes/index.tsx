import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle, Phone, Star, Hammer, Car, TreePine, Layers } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import projectNew1 from "@/assets/project-new-1.jpg";
import projectNew2 from "@/assets/project-new-2.jpg";
import projectNew3 from "@/assets/project-new-3.jpg";

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
  { title: "Terras & Patio", desc: "Stijlvolle terrassen met keramische tegels, natuursteen of betonstenen.", Icon: Hammer },
  { title: "Opritten", desc: "Duurzame en fraaie opritten die de uitstraling van uw woning versterken.", Icon: Car },
  { title: "Tuinaanleg", desc: "Complete tuinaanleg met bestrating, grind, borders en gazon.", Icon: TreePine },
  { title: "Trappen & Niveaus", desc: "Stijlvolle trappen en hoogteverschillen in steen en beton.", Icon: Layers },
];

const strengths = [
  "Meer dan 25 jaar ervaring",
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
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Ron Smeijsters Bestratingen bus" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 mb-5 border border-white/30">
              <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-white">Bestrating specialist · Landgraaf</span>
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Vakmanschap in
              <span className="block text-white"> elke steen</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/90 leading-relaxed max-w-lg">
              Van terras tot oprit — wij realiseren uw droomproject met oog voor detail en jarenlange ervaring.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-primary transition-all hover:bg-white/95 hover:gap-3 shadow-lg"
              >
                Gratis offerte aanvragen
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:0617432464"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                06 17432464
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths - compact bar */}
      <section className="bg-secondary py-5 sm:py-6 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3 lg:grid-cols-6">
            {strengths.map((s) => (
              <div key={s} className="flex items-center gap-2 text-xs sm:text-sm text-secondary-foreground">
                <CheckCircle className="h-3.5 w-3.5 text-accent shrink-0" />
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-2">Wat wij doen</p>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">Onze diensten</h2>
          </div>
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="group rounded-xl border border-border bg-card p-5 sm:p-6 transition-all hover:shadow-lg hover:border-accent/30 hover:-translate-y-0.5">
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                  <s.Icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-display text-base sm:text-lg font-semibold text-card-foreground">{s.title}</h3>
                <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/diensten" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all">
              Bekijk alle diensten <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="bg-primary py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70 mb-2">Ons werk</p>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Recente projecten</h2>
          </div>
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-3">
            {[projectNew1, projectNew2, projectNew3].map((img, i) => (
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
          <div className="text-center mt-8">
            <Link to="/projecten" className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:gap-3 transition-all">
              Bekijk alle projecten <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-14 sm:py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-2">Ervaringen</p>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">Wat klanten zeggen</h2>
          </div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-xl bg-card p-6 border border-border shadow-sm">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic">"{r.text}"</p>
                <p className="mt-3 text-sm font-semibold text-card-foreground">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 bg-accent/5">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Klaar voor uw nieuwe bestrating?
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base">
            Neem vrijblijvend contact met ons op voor een gratis adviesgesprek en offerte op maat.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors shadow-lg shadow-accent/25"
            >
              Contact opnemen
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:0617432464"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              <Phone className="h-4 w-4" />
              06 17432464
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
