import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-100">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl items-center px-6">

        <div className="max-w-3xl">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            Trusted Software & AI Solutions
          </span>

          <h1 className="mt-8 text-6xl font-extrabold leading-tight text-slate-900">
            Building Enterprise Software
            <br />
            Powered by AI
          </h1>

          <p className="mt-8 text-xl leading-8 text-slate-600">
            Clover Technologies develops secure, scalable and intelligent
            software solutions that help businesses automate operations,
            improve productivity and accelerate digital transformation.
          </p>

          <div className="mt-10 flex gap-4">
            <Button size="lg">
              Get Started
            </Button>

            <Button variant="outline" size="lg">
              Book a Demo
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
}