import {
  ShieldCheck,
  BrainCircuit,
  Cloud,
  Headset,
} from "lucide-react";

const features = [
  {
    title: "Enterprise Security",
    description:
      "Security-first architecture designed for modern businesses.",
    icon: ShieldCheck,
  },
  {
    title: "AI Powered",
    description:
      "Artificial intelligence integrated into business workflows.",
    icon: BrainCircuit,
  },
  {
    title: "Cloud Native",
    description:
      "Built for scalability using modern cloud technologies.",
    icon: Cloud,
  },
  {
    title: "Dedicated Support",
    description:
      "Reliable technical support and long-term partnership.",
    icon: Headset,
  },
];

export default function WhyClover() {
  return (
    <section className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="font-semibold text-green-400">
            WHY CLOVER TECHNOLOGIES
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Technology Built Around Your Business
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            We combine enterprise software, artificial intelligence,
            cybersecurity and cloud technologies to help organizations
            modernize operations with confidence.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl bg-slate-800 p-8 transition hover:bg-slate-700"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-600">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="mb-4 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="text-slate-300">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}