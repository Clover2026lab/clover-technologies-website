import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="bg-green-600 py-24">
      <div className="mx-auto max-w-5xl px-6 text-center text-white">
        <h2 className="text-5xl font-bold">
          Ready to Transform Your Business?
        </h2>

        <p className="mt-6 text-xl text-green-100">
          Discover how Clover Technologies can help you streamline operations,
          strengthen security, and accelerate growth with enterprise software.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            className="rounded-xl bg-white px-8 py-6 text-green-700 hover:bg-slate-100"
          >
            Book a Demo
          </Button>

          <Button
            variant="outline"
            className="rounded-xl border-white px-8 py-6 text-white hover:bg-white hover:text-green-700"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}