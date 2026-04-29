import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

export default function CategoryProducts({ products, category }) {
    const [selectedProduct, setSelectedProduct] = useState(null);

    // filtrar productos
    const filtered = products.filter((p) => p.category === category);

    if (!category) return null;

    return (
        <section className="py-16 bg-[#FFF8E1]">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <h2 className="text-3xl font-bold text-[#6D4C41] mb-8">{category}</h2>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filtered.map((product, i) => (
                        <div key={i} onClick={() => setSelectedProduct(product)} className="cursor-pointer">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
            </div>
        </section>
    );
}
