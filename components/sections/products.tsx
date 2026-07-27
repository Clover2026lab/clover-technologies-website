import SectionHeader from "@/components/common/SectionHeader";
import ProductCard from "@/components/cards/ProductCard";
import { products } from "@/data/products";

export default function Products() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeader
          badge="OUR PRODUCTS"
          title="Software Built For Modern Businesses"
          description="Clover Technologies develops innovative software platforms that improve efficiency, strengthen security and accelerate digital transformation."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
}