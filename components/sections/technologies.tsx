import {
  Database,
  Cloud,
  Shield,
  BrainCircuit,
  Server,
  Workflow,
} from "lucide-react";

const tech = [
  "Artificial Intelligence",
  "Cloud Computing",
  "Cybersecurity",
  "Business Automation",
  "Data Analytics",
  "Enterprise ERP",
];

const icons = [
  BrainCircuit,
  Cloud,
  Shield,
  Workflow,
  Database,
  Server,
];

export default function Technologies() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="font-semibold text-green-600">
            TECHNOLOGIES
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Modern Technologies We Use
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            We build secure enterprise software using the latest cloud,
            AI and cybersecurity technologies.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tech.map((item, index) => {
            const Icon = icons[index];

            return (
              <div
                key={item}
                className="flex items-center gap-5 rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-xl"
              >
                <div className="rounded-xl bg-green-100 p-3">
                  <Icon className="h-7 w-7 text-green-600" />
                </div>

                <h3 className="font-semibold text-lg">
                  {item}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}