import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Boxes,
  Shield,
  Workflow,
} from "lucide-react";

import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const icons = {
  Boxes,
  Shield,
  Bot,
  Workflow,
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  const Icon = icons[product.icon as keyof typeof icons];

  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
        <Icon className="h-7 w-7 text-green-600" />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {product.name}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {product.description}
      </p>

      <Link
        href={product.href}
        className="mt-8 inline-flex items-center gap-2 font-semibold text-green-600 transition group-hover:gap-3"
      >
        Learn More
        <ArrowRight className="h-4 w-4" />
      </Link>

    </div>
  );
}