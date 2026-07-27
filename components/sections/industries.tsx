import {
  Building2,
  Landmark,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Factory,
} from "lucide-react";

const industries = [
  {
    title: "Government",
    description: "Secure digital platforms for public sector organizations.",
    icon: Landmark,
  },
  {
    title: "Healthcare",
    description: "Protect patient data and streamline healthcare operations.",
    icon: HeartPulse,
  },
  {
    title: "Education",
    description: "Modern learning platforms and institutional management.",
    icon: GraduationCap,
  },
  {
    title: "Retail",
    description: "Inventory, sales, CRM and customer engagement solutions.",
    icon: ShoppingBag,
  },
  {
    title: "Manufacturing",
    description: "ERP, procurement and production management solutions.",
    icon: Factory,
  },
  {
    title: "Enterprise",
    description: "Digital transformation for growing businesses.",
    icon: Building2,
  },
];

export default function Industries() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold tracking-wide text-green-600">
            INDUSTRIES
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Industries We Serve
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Clover Technologies develops enterprise software and digital
            transformation solutions for organizations across multiple sectors.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.title}
                className="rounded-3xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">
                  <Icon className="h-8 w-8 text-green-600" />
                </div>

                <h3 className="text-2xl font-semibold text-slate-900">
                  {industry.title}
                </h3>

                <p className="mt-4 text-slate-600">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
