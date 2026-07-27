import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Procurement Management",
  "Inventory & Warehouse",
  "Finance & Accounting",
  "Human Resources",
  "CRM & Sales",
  "Business Intelligence",
];

export default function N3T2SShowcase() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Side */}

          <div>

            <p className="font-semibold tracking-wide text-green-600">
              FLAGSHIP PRODUCT
            </p>

            <h2 className="mt-4 text-5xl font-bold text-slate-900">
              N3T2S ERP Platform
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              N3T2S is Clover Technologies' enterprise resource planning
              platform that helps organizations manage operations from a
              single secure cloud platform.
            </p>

            <div className="mt-10 space-y-4">

              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-6 w-6 text-green-600" />

                  <span className="text-lg text-slate-700">
                    {feature}
                  </span>
                </div>
              ))}

            </div>

            <div className="mt-10 flex gap-4">

              <Button className="rounded-xl bg-green-600 hover:bg-green-700">
                Request Demo
              </Button>

              <Button variant="outline" className="rounded-xl">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

            </div>

          </div>

          {/* Right Side */}

          <div className="rounded-3xl border bg-slate-50 p-8 shadow-xl">

            <div className="rounded-2xl bg-slate-900 p-6 text-white">

              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">
                  N3T2S Dashboard
                </h3>

                <span className="rounded-full bg-green-600 px-3 py-1 text-sm">
                  Online
                </span>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">

                <div className="rounded-xl bg-slate-800 p-4">
                  <p className="text-sm text-slate-400">
                    Active Users
                  </p>

                  <h4 className="mt-2 text-3xl font-bold">
                    2,540
                  </h4>
                </div>

                <div className="rounded-xl bg-slate-800 p-4">
                  <p className="text-sm text-slate-400">
                    Transactions
                  </p>

                  <h4 className="mt-2 text-3xl font-bold">
                    18K
                  </h4>
                </div>

                <div className="rounded-xl bg-slate-800 p-4">
                  <p className="text-sm text-slate-400">
                    Security
                  </p>

                  <h4 className="mt-2 text-xl font-bold text-green-400">
                    Protected
                  </h4>
                </div>

                <div className="rounded-xl bg-slate-800 p-4">
                  <p className="text-sm text-slate-400">
                    AI Status
                  </p>

                  <h4 className="mt-2 text-xl font-bold text-green-400">
                    Active
                  </h4>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}