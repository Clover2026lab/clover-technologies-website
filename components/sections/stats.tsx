import {
  Users,
  Globe2,
  ShieldCheck,
  Cpu,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "250+",
    label: "Projects Delivered",
  },
  {
    icon: Globe2,
    value: "15+",
    label: "Countries Served",
  },
  {
    icon: ShieldCheck,
    value: "99.9%",
    label: "System Availability",
  },
  {
    icon: Cpu,
    value: "24/7",
    label: "AI Powered Support",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-3xl border bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">
                  <Icon className="h-8 w-8 text-green-600" />
                </div>

                <h3 className="text-4xl font-bold text-slate-900">
                  {stat.value}
                </h3>

                <p className="mt-3 text-slate-600">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}