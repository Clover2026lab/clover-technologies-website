import {
  ShieldCheck,
  Cpu,
  Cloud,
  BarChart3,
} from "lucide-react";

const services = [
  {
    title: "Cybersecurity",
    description:
      "Protect your business with modern security assessments, monitoring and compliance solutions.",
    icon: ShieldCheck,
  },
  {
    title: "AI Solutions",
    description:
      "Leverage artificial intelligence to automate workflows and increase productivity.",
    icon: Cpu,
  },
  {
    title: "Cloud Services",
    description:
      "Scalable cloud infrastructure, migration and DevOps solutions.",
    icon: Cloud,
  },
  {
    title: "Business Intelligence",
    description:
      "Transform your data into actionable insights using dashboards and analytics.",
    icon: BarChart3,
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-green-600 font-semibold">
            OUR SERVICES
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Technology That Drives Business Growth
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Clover Technologies delivers enterprise-grade solutions that help
            businesses become more secure, efficient and intelligent.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-2xl border p-8 hover:shadow-xl transition"
              >
                <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-6">
                  <Icon className="text-green-600 h-7 w-7" />
                </div>

                <h3 className="text-xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-slate-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}