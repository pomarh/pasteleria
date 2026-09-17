import { Heart } from "lucide-react";

export default function ProductCard({ product }) {
    return (
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 overflow-hidden group">
            {/* Image Container */}
            <div className="relative h-56">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />

                {product.badge && <span className="absolute top-3 left-3 bg-primary text-white text-xs px-3 py-1 rounded-full">{product.badge}</span>}

                <button className="absolute top-3 right-3 bg-white/80 backdrop-blur-md p-2 rounded-full hover:scale-110 transition">
                    <Heart size={18} className="text-primary" />
                </button>
            </div>

            {/* Content */}
            <div className="p-4">
                <h3 className="text-lg font-semibold text-[#6D4C41]">{product.name}</h3>
                <p className="text-gray-500 text-sm mt-1 line-clamp-2">{product.description}</p>

                <div className="flex items-center justify-between mt-4">
                    <span className="text-primary font-bold text-lg">Bs. {product.price}</span>
                    <button className="bg-primary hover:opacity-90 text-white px-4 py-2 rounded-full text-sm transition">Agregar</button>
                </div>
            </div>
        </div>
    );
}
