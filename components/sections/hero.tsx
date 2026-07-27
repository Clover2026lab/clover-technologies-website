import { Button } from "@/components/ui/button";
import HeroIllustration from "./hero-illustration";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-green-50 py-32">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-green-300/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-200/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT SIDE */}

          <div>

            <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              Trusted Enterprise Software & AI Solutions
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-slate-900 lg:text-7xl">
              Enterprise Software
              <br />
              Built for Growth
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-9 text-slate-600">
              Clover Technologies helps organizations streamline operations
              through secure ERP, artificial intelligence, cybersecurity and
              cloud solutions designed for modern businesses.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Button
                size="lg"
                className="rounded-xl bg-green-600 px-8 hover:bg-green-700"
              >
                Request Demo
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-xl px-8"
              >
                Explore Solutions
              </Button>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <HeroIllustration />

        </div>

      </div>

    </section>
  );
}