import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";

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
  { img: project1, title: "Modern terras", desc: "Keramisch terras met houten wandafwerking", cat: "Terras" },
  { img: project2, title: "Oprit renovatie", desc: "Strakke oprit met grootformaat tegels", cat: "Oprit" },
  { img: project3, title: "Trappen & plateau", desc: "Trap met natuursteen en keerwanden", cat: "Trappen" },
  { img: project4, title: "Voortuin design", desc: "Moderne voortuin met split en kunstgras", cat: "Tuinaanleg" },
  { img: project5, title: "Achtertuin aanleg", desc: "Complete achtertuin met gazon en bestrating", cat: "Tuinaanleg" },
];

function ProjectenPage() {
  return (
    <div className="pt-20 lg:pt-24">
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-2">Portfolio</p>
          <h1 className="font-display text-4xl font-bold text-primary-foreground sm:text-5xl">Onze Projecten</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/70">
            Een selectie van recent gerealiseerde projecten in Landgraaf en omstreken.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <div key={i} className="group overflow-hidden rounded-lg border border-border bg-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={600}
                    height={450}
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">{p.cat}</span>
                  <h3 className="mt-1 font-display text-lg font-semibold text-card-foreground">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground">Uw project hier?</h2>
          <p className="mt-3 text-muted-foreground">Neem contact op en bespreek de mogelijkheden voor uw tuin of oprit.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors">
            Offerte aanvragen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
