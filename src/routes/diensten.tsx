import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/diensten")({
  head: () => ({
    meta: [
      { title: "Diensten — Ron Smeijsters Bestratingen" },
      { name: "description", content: "Ontdek onze diensten: bestrating, opritten, terrassen, tuinaanleg en meer in Landgraaf." },
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
  },
  {
    title: "Opritten & Parkeerplaatsen",
    desc: "Een oprit die de uitstraling van uw woning versterkt. Van klassieke klinkerbestrating tot moderne grootformaat tegels — duurzaam en onderhoudsarm.",
    features: ["Klinkerbestrating", "Grootformaat tegels", "Waterdoorlatend", "Duurzaam"],
  },
  {
    title: "Tuinaanleg & Groenvoorziening",
    desc: "Complete tuinaanleg inclusief bestrating, grindpaden, sierborders, kunstgras en gazon. Wij creëren een tuin die past bij uw wensen en levensstijl.",
    features: ["Grindpaden", "Kunstgras", "Sierborders", "Gazon"],
  },
  {
    title: "Trappen & Hoogteverschillen",
    desc: "Stijlvolle trappen en plateaus in beton of natuursteen. Ideaal voor tuinen met hoogteverschillen of bij de overgang van woning naar tuin.",
    features: ["Betontrappen", "Natuursteen", "Keerwanden", "Plateaus"],
  },
  {
    title: "Schuttingen & Afrastering",
    desc: "Plaatsing van houten schuttingen, betonpalen en -platen voor een nette afscheiding van uw tuin. Duurzaam en op maat gemaakt.",
    features: ["Houten schuttingen", "Betonpalen", "Betonplaten", "Op maat"],
  },
  {
    title: "Drainage & Afwatering",
    desc: "Professionele drainage en afwatering om wateroverlast te voorkomen. Inclusief goten, putten en correcte afschot van bestrating.",
    features: ["Lijnafwatering", "Drainage", "Afschot", "Putten"],
  },
];

function DienstenPage() {
  return (
    <div className="pt-20 lg:pt-24">
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-2">Wat wij doen</p>
          <h1 className="font-display text-4xl font-bold text-primary-foreground sm:text-5xl">Onze Diensten</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/70">
            Van bestrating tot complete tuinaanleg. wij verzorgen elk project met vakmanschap en oog voor detail.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {diensten.map((d) => (
              <div key={d.title} className="rounded-lg border border-border bg-card p-8 transition-shadow hover:shadow-lg">
                <h2 className="font-display text-xl font-bold text-card-foreground">{d.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {d.features.map((f) => (
                    <span key={f} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground">Interesse?</h2>
          <p className="mt-3 text-muted-foreground">Neem contact op voor een vrijblijvend adviesgesprek en offerte op maat.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors">
            Contact opnemen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
