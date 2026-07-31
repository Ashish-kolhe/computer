import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  ExternalLink,
} from "lucide-react";

export default function Page() {
  const contacts = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9021814980",
      href: "tel:+919021814980",
    },
    {
      icon: Mail,
      title: "Email",
      value: "098hodcomputer@gmail.com",
      href: "mailto:098hodcomputer@gmail.com",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "Adsul's Technical Campus, Chas, Ahilyanagar, Maharashtra",
      href: "https://maps.google.com",
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "Monday – Saturday • 10:00 AM – 5:00 PM",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">
          <span className="rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
            Contact Us
          </span>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            Get in Touch
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600 leading-7">
            We'd be happy to answer your queries. Reach out to the Department
            of Computer Engineering using the details below.
          </p>
        </div>

        {/* Contact Cards */}

        <div className="mt-14 grid gap-6 md:grid-cols-2">

          {contacts.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-100 p-8 transition hover:border-primary/30"
              >
                <div className="flex items-start gap-5">

                  <div className="rounded-xl bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>

                    {item.href ? (
                      <Link
                        href={item.href}
                        target={
                          item.href.startsWith("http")
                            ? "_blank"
                            : undefined
                        }
                        className="mt-2 flex items-center gap-2 text-gray-600 hover:text-primary"
                      >
                        {item.value}

                        {item.href.startsWith("http") && (
                          <ExternalLink className="h-4 w-4" />
                        )}
                      </Link>
                    ) : (
                      <p className="mt-2 text-gray-600">
                        {item.value}
                      </p>
                    )}
                  </div>

                </div>
              </div>
            );
          })}

        </div>

        {/* Google Maps Button */}

        <div className="mt-12 text-center">
          <Link
            href="https://maps.google.com/?cid=1889639684212707531&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en-US&source=embed"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-medium text-white transition hover:opacity-90"
          >
            <MapPin className="h-5 w-5" />
            View on Google Maps
          </Link>
        </div>

      </div>
    </section>
  );
}