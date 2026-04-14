import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Pagina niet gevonden</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          De pagina die u zoekt bestaat niet of is verplaatst.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Naar home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ron Smeijsters Bestratingen — Landgraaf" },
      { name: "description", content: "Ron Smeijsters Bestratingen: vakkundige bestrating en tuinaanleg in Landgraaf, Limburg." },
      { name: "author", content: "Ron Smeijsters Bestratingen" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Ron Smeijsters Bestratingen — Landgraaf" },
      { name: "twitter:title", content: "Ron Smeijsters Bestratingen — Landgraaf" },
      { property: "og:description", content: "Ron Smeijsters Bestratingen: vakkundige bestrating en tuinaanleg in Landgraaf, Limburg." },
      { name: "twitter:description", content: "Ron Smeijsters Bestratingen: vakkundige bestrating en tuinaanleg in Landgraaf, Limburg." },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
