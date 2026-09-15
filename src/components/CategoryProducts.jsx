import { useState, useEffect } from "react";
import { getProductsByCategory } from "../services/products";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

export default function CategoryProducts({ categoryId }) {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    // llama datos de supabase
    useEffect(() => {
        if (!categoryId) return;
        getProductsByCategory(categoryId)
            .then((data) => setProducts(data || []))
            .catch((error) => console.error("Error al cargar productos:", error));
    }, [categoryId]);

    if (!categoryId) return null;

    return (
        <section className="py-16 bg-[#FFF8E1]">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <h2 className="text-3xl font-bold text-[#6D4C41] mb-8">Productos</h2>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product.id} onClick={() => setSelectedProduct(product)} className="cursor-pointer">
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
