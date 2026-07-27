import Link from "next/link";
import {
  Clover,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Company */}

          <div>
            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-green-600 p-2">
                <Clover className="h-6 w-6 text-white" />
              </div>

              <span className="text-2xl font-bold text-white">
                Clover Technologies
              </span>

            </div>

            <p className="mt-6 leading-8">
              We build enterprise software, AI-powered solutions and
              cybersecurity platforms that help organizations innovate
              with confidence.
            </p>

          </div>

          {/* Company */}

          <div>

            <h3 className="mb-6 text-lg font-semibold text-white">
              Company
            </h3>

            <ul className="space-y-4">

              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>

              <li>
                <Link href="/products" className="hover:text-white">
                  Products
                </Link>
              </li>

              <li>
                <Link href="/solutions" className="hover:text-white">
                  Solutions
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Products */}

          <div>

            <h3 className="mb-6 text-lg font-semibold text-white">
              Products
            </h3>

            <ul className="space-y-4">

              <li>N3T2S ERP</li>
              <li>Cybersecurity</li>
              <li>Artificial Intelligence</li>
              <li>Business Automation</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-lg font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">
                <Mail className="mt-1 h-5 w-5 text-green-500" />
                <span>contact@clovertechnologies.tech</span>
              </div>

              <div className="flex gap-3">
                <Phone className="mt-1 h-5 w-5 text-green-500" />
                <span>+353 XX XXX XXXX</span>
              </div>

              <div className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 text-green-500" />
                <span>Galway, Ireland</span>
              </div>

            </div>

            <div className="mt-8 flex gap-4">

              <Link
                href="#"
                className="rounded-xl bg-slate-800 p-3 hover:bg-green-600"
              >
                <LinkedIn className="h-5 w-5" />
              </Link>

              <Link
                href="#"
                className="rounded-xl bg-slate-800 p-3 hover:bg-green-600"
              >
                <GitHub className="h-5 w-5" />
              </Link>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Clover Technologies. All rights reserved.
        </div>

      </div>
    </footer>
  );
}