import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

export const Route = createFileRoute("/projecten")({
  head: () => ({
    meta: [
      { title: "Projecten — Ron Smeijsters Bestratingen" },
      { name: "description", content: "Bekijk onze gerealiseerde projecten: terrassen, opritten en tuinaanleg in Landgraaf en omstreken." },
      { property: "og:title", content: "Projecten — Ron Smeijsters Bestratingen" },
      { property: "og:description", content: "Portfolio van bestratingsprojecten in Landgraaf en Zuid-Limburg." },
    ],
  }),
  component: ProjectenPage,
});

const projects = [
  { img: project6, title: "Zwembad terras", desc: "Luxe terras rondom zwembad met grootformaat keramische tegels en kunstgras", cat: "Zwembad" },
  { img: project1, title: "Modern terras", desc: "Keramisch terras met houten wandafwerking", cat: "Terras" },
  { img: project2, title: "Oprit renovatie", desc: "Strakke oprit met grootformaat tegels", cat: "Oprit" },
  { img: project3, title: "Trappen & plateau", desc: "Trap met natuursteen en keerwanden", cat: "Trappen" },
  { img: project4, title: "Voortuin design", desc: "Moderne voortuin met split en kunstgras", cat: "Tuinaanleg" },
  { img: project5, title: "Achtertuin aanleg", desc: "Complete achtertuin met gazon en bestrating", cat: "Tuinaanleg" },
];

function ProjectenPage() {
  return (
    <div className="pt-14 lg:pt-20">
      {/* Hero */}
      <section className="bg-primary py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-2">Portfolio</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground lg:text-5xl">Onze Projecten</h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-primary-foreground/70">
            Een selectie van recent gerealiseerde projecten in Landgraaf en omstreken.
          </p>
        </div>
      </section>

      {/* Featured project */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-xl">
            <div className="grid lg:grid-cols-2">
              <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
                <img src={project6} alt="Zwembad terras" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" width={800} height={500} />
              </div>
              <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <span className="inline-block w-fit rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">Uitgelicht project</span>
                <h2 className="mt-3 font-display text-xl sm:text-2xl font-bold text-card-foreground">Zwembad terras</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Luxe terras rondom zwembad met grootformaat keramische tegels en kunstgras. Een project waar vakmanschap en esthetiek samenkomen.</p>
                <Link to="/contact" className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all">
                  Soortgelijk project bespreken <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-14 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-6">Meer projecten</h3>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(1).map((p, i) => (
              <div key={i} className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg hover:-translate-y-0.5">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={600}
                    height={450}
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-primary/80 backdrop-blur-sm px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">{p.cat}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-display text-base font-semibold text-card-foreground">{p.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary-foreground">Uw project hier?</h2>
          <p className="mt-2 text-sm sm:text-base text-primary-foreground/60">Neem contact op en bespreek de mogelijkheden voor uw tuin of oprit.</p>
          <Link to="/contact" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors shadow-lg shadow-accent/25">
            Offerte aanvragen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
