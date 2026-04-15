import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import projectNew1 from "@/assets/project-new-1.jpg";
import projectNew2 from "@/assets/project-new-2.jpg";
import projectNew3 from "@/assets/project-new-3.jpg";
import projectNew4 from "@/assets/project-new-4.jpg";
import projectNew5 from "@/assets/project-new-5.jpg";
import projectNew6 from "@/assets/project-new-6.jpg";
import projectNew7 from "@/assets/project-new-7.jpg";
import projectNew8 from "@/assets/project-new-8.jpg";

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
  { img: projectNew1, title: "Terras met overkapping", desc: "Keramisch terras met kunstgras en grindpad", cat: "Terras" },
  { img: projectNew2, title: "Zwembad terras", desc: "Luxe terras rondom zwembad met grootformaat tegels", cat: "Zwembad" },
  { img: projectNew3, title: "Achtertuin met pergola", desc: "Complete achtertuin met bestrating en plantenbakken", cat: "Tuinaanleg" },
  { img: projectNew4, title: "Terras met lamellen dak", desc: "Modern terras met lamellendak en gazon", cat: "Terras" },
  { img: projectNew5, title: "Trappen & keerwanden", desc: "Trap met natuursteen keerwanden en plateau", cat: "Trappen" },
  { img: projectNew6, title: "Terras met houtafwerking", desc: "Keramisch terras met houten wandbekleding", cat: "Terras" },
  { img: projectNew7, title: "Voortuin design", desc: "Moderne voortuin met klinkers en siergrassen", cat: "Oprit" },
  { img: projectNew8, title: "Grindpad met stapstenen", desc: "Japans geïnspireerd pad met split en stapstenen", cat: "Tuinaanleg" },
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

      {/* Grid */}
      <section className="py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((p, i) => (
              <div key={i} className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg hover:-translate-y-0.5">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading={i < 4 ? undefined : "lazy"}
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
