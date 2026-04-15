import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle, MessageCircle } from "lucide-react";

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
  { icon: Phone, label: "Telefoon", value: "06 17432464", href: "tel:0617432464" },
  { icon: MessageCircle, label: "WhatsApp", value: "Stuur een bericht via WhatsApp", href: "https://wa.me/31617432464?text=Hallo%2C%20ik%20heb%20interesse%20in%20uw%20diensten.%20Kunt%20u%20mij%20meer%20informatie%20geven%3F" },
  { icon: Mail, label: "E-mail", value: "ronbestratingen@hotmail.com", href: "mailto:ronbestratingen@hotmail.com" },
  { icon: MapPin, label: "Adres", value: "Veeweg 91, 6374 AN Landgraaf", href: "https://maps.google.com/?q=Veeweg+91+Landgraaf" },
  { icon: Clock, label: "Bereikbaar", value: "Ma t/m Za: 07:00 – 18:00", href: undefined },
];

function ContactPage() {
  return (
    <div className="pt-14 lg:pt-20">
      {/* Hero */}
      <section className="bg-primary py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-2">Neem contact op</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground lg:text-5xl">Contact</h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-primary-foreground/70">
            Wij staan klaar om uw vragen te beantwoorden. Neem vrijblijvend contact op voor advies of een offerte.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Contact info + promises */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground">Contactgegevens</h2>
                <p className="mt-2 text-sm text-muted-foreground">Bel of mail ons gerust. Wij reageren doorgaans binnen 24 uur.</p>
              </div>
              
              <div className="space-y-4">
                {contactInfo.map((c) => {
                  const Wrapper = c.href ? "a" : "div";
                  return (
                    <Wrapper
                      key={c.label}
                      {...(c.href ? { href: c.href, target: c.href.startsWith("http") ? "_blank" : undefined, rel: c.href.startsWith("http") ? "noopener noreferrer" : undefined } : {})}
                      className="flex items-center gap-3 group rounded-lg border border-border bg-card p-4 transition-all hover:shadow-md hover:border-accent/30"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent shrink-0">
                        <c.icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</p>
                        <p className="text-sm text-foreground font-medium group-hover:text-accent transition-colors truncate">{c.value}</p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>

              {/* Trust badges */}
              <div className="rounded-xl bg-secondary p-5 border border-border">
                <p className="text-sm font-semibold text-foreground mb-3">Wat u kunt verwachten:</p>
                <div className="space-y-2">
                  {["Reactie binnen 24 uur", "Gratis adviesgesprek", "Vrijblijvende offerte", "Geen verplichtingen"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-3.5 w-3.5 text-accent shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="lg:col-span-3 rounded-xl overflow-hidden border border-border shadow-sm">
              <iframe
                title="Locatie Ron Smeijsters Bestratingen"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2509.5!2d5.99!3d50.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVmVld2VnIDkxLCBMYW5kZ3JhYWY!5e0!3m2!1snl!2snl!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "450px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-accent py-12 sm:py-14">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-accent-foreground sm:text-3xl">Direct contact?</h2>
          <p className="mt-2 text-sm text-accent-foreground/80">Bel ons of stuur een WhatsApp bericht voor snel advies.</p>
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:0617432464"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg"
            >
              <Phone className="h-4 w-4" />
              06 17432464
            </a>
            <a
              href="https://wa.me/31617432464?text=Hallo%2C%20ik%20heb%20interesse%20in%20uw%20diensten.%20Kunt%20u%20mij%20meer%20informatie%20geven%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#20bd5a] transition-colors shadow-lg"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
