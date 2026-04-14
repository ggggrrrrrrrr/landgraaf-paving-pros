import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ron Smeijsters Bestratingen" },
      { name: "description", content: "Neem contact op met Ron Smeijsters Bestratingen in Landgraaf voor een gratis offerte of adviesgesprek." },
      { property: "og:title", content: "Contact — Ron Smeijsters Bestratingen" },
      { property: "og:description", content: "Bel, mail of bezoek ons voor een vrijblijvend adviesgesprek." },
    ],
  }),
  component: ContactPage,
});

const contactInfo = [
  { icon: Phone, label: "Telefoon", value: "06 55510614", href: "tel:0655510614" },
  { icon: Mail, label: "E-mail", value: "ronbestratingen@hotmail.com", href: "mailto:ronbestratingen@hotmail.com" },
  { icon: MapPin, label: "Adres", value: "Veeweg 91, 6374 AN Landgraaf", href: "https://maps.google.com/?q=Veeweg+91+Landgraaf" },
  { icon: Clock, label: "Bereikbaar", value: "Ma t/m Za: 07:00 – 18:00", href: undefined },
];

function ContactPage() {
  return (
    <div className="pt-20 lg:pt-24">
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-2">Neem contact op</p>
          <h1 className="font-display text-4xl font-bold text-primary-foreground sm:text-5xl">Contact</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/70">
            Wij staan klaar om uw vragen te beantwoorden. Neem vrijblijvend contact op voor advies of een offerte.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact info */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">Contactgegevens</h2>
              <p className="mt-3 text-muted-foreground">
                Bel of mail ons gerust. Wij reageren doorgaans binnen 24 uur.
              </p>
              <div className="mt-8 space-y-6">
                {contactInfo.map((c) => {
                  const Wrapper = c.href ? "a" : "div";
                  return (
                    <Wrapper
                      key={c.label}
                      {...(c.href ? { href: c.href, target: c.href.startsWith("http") ? "_blank" : undefined, rel: c.href.startsWith("http") ? "noopener noreferrer" : undefined } : {})}
                      className="flex items-start gap-4 group"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/10 text-accent shrink-0">
                        <c.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</p>
                        <p className="mt-0.5 text-foreground font-medium group-hover:text-accent transition-colors">{c.value}</p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden border border-border h-[400px] lg:h-auto">
              <iframe
                title="Locatie Ron Smeijsters Bestratingen"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2509.5!2d5.99!3d50.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVmVld2VnIDkxLCBMYW5kZ3JhYWY!5e0!3m2!1snl!2snl!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-accent py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-accent-foreground sm:text-3xl">Direct bellen?</h2>
          <p className="mt-2 text-accent-foreground/80">Bel ons voor een snel en persoonlijk adviesgesprek.</p>
          <a
            href="tel:0655510614"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Phone className="h-4 w-4" />
            06 55510614
          </a>
        </div>
      </section>
    </div>
  );
}
