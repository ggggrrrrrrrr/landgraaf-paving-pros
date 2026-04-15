import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Hammer, Car, TreePine, Layers } from "lucide-react";

export const Route = createFileRoute("/diensten")({
  head: () => ({
    meta: [
      { title: "Diensten — Ron Smeijsters Bestratingen" },
      { name: "description", content: "Ontdek onze diensten: bestrating, opritten, terrassen en tuinaanleg in Landgraaf." },
      { property: "og:title", content: "Diensten — Ron Smeijsters Bestratingen" },
      { property: "og:description", content: "Bestrating, opritten, terrassen en tuinaanleg in Landgraaf en omstreken." },
    ],
  }),
  component: DienstenPage,
});

const diensten = [
  {
    title: "Bestrating & Terrassen",
    desc: "Wij leggen terrassen en patio's met keramische tegels, natuursteen, gebakken klinkers of betonstenen. Elk terras wordt strak en waterpas afgewerkt voor jarenlang gebruiksgemak.",
    features: ["Keramische tegels", "Natuursteen", "Gebakken klinkers", "Betonstenen"],
    Icon: Hammer,
  },
  {
    title: "Opritten & Parkeerplaatsen",
    desc: "Een oprit die de uitstraling van uw woning versterkt. Van klassieke klinkerbestrating tot moderne grootformaat tegels, duurzaam en onderhoudsarm.",
    features: ["Klinkerbestrating", "Grootformaat tegels", "Waterdoorlatend", "Duurzaam"],
    Icon: Car,
  },
  {
    title: "Tuinaanleg & Groenvoorziening",
    desc: "Complete tuinaanleg inclusief bestrating, grindpaden, sierborders, kunstgras en gazon. Wij creëren een tuin die past bij uw wensen en levensstijl.",
    features: ["Grindpaden", "Kunstgras", "Sierborders", "Gazon"],
    Icon: TreePine,
  },
  {
    title: "Trappen & Hoogteverschillen",
    desc: "Stijlvolle trappen en plateaus in beton of natuursteen. Ideaal voor tuinen met hoogteverschillen of bij de overgang van woning naar tuin.",
    features: ["Betontrappen", "Natuursteen", "Keerwanden", "Plateaus"],
    Icon: Layers,
  },
];

function DienstenPage() {
  return (
    <div className="pt-14 lg:pt-20">
      {/* Hero */}
      <section className="bg-primary py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-2">Wat wij doen</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground lg:text-5xl">Onze Diensten</h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-primary-foreground/70">
            Van bestrating tot complete tuinaanleg. Wij verzorgen elk project met vakmanschap en oog voor detail.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
            {diensten.map((d) => (
              <div key={d.title} className="group rounded-xl border border-border bg-card p-6 sm:p-7 transition-all hover:shadow-lg hover:border-accent/30 hover:-translate-y-0.5">
                <div className="h-11 w-11 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <d.Icon className="h-5 w-5 text-accent" />
                </div>
                <h2 className="font-display text-lg font-bold text-card-foreground">{d.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {d.features.map((f) => (
                    <span key={f} className="rounded-full bg-accent/8 border border-accent/15 px-2.5 py-0.5 text-xs font-medium text-accent">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-primary py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-2">Waarom ons kiezen</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary-foreground">Kwaliteit die u ziet en voelt</h2>
              <p className="mt-3 text-sm sm:text-base text-primary-foreground/70 leading-relaxed">
                Met meer dan 15 jaar ervaring weten wij wat kwaliteit is. Elk project wordt met zorg en aandacht uitgevoerd, van het eerste adviesgesprek tot de oplevering.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "25+", label: "Jaar ervaring" },
                { number: "50+", label: "Projecten afgerond" },
                { number: "95%", label: "Klanttevredenheid" },
                { number: "4.7★", label: "Gemiddelde beoordeling" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 p-5 text-center">
                  <p className="font-display text-2xl sm:text-3xl font-bold text-accent">{stat.number}</p>
                  <p className="mt-1 text-xs sm:text-sm text-primary-foreground/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-16 bg-accent/5">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Interesse in een van onze diensten?</h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">Neem contact op voor een vrijblijvend adviesgesprek en offerte op maat.</p>
          <Link to="/contact" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors shadow-lg shadow-accent/25">
            Contact opnemen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
