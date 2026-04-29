import { Heart } from "lucide-react";

export default function ProductCard({ product }) {
    return (
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group">
            {/* Image Container */}
            <div className="relative">
                <img src={product.image} alt={product.name} className="w-full h-[250px] object-cover group-hover:scale-110 transition duration-500" />

                {/* Badge */}
                {product.badge && (
                    <span className="absolute top-3 left-3 bg-pink-400 text-white text-xs px-3 py-1 rounded-full">{product.badge}</span>
                )}

                {/* Favorite */}
                <button className="absolute top-3 right-3 bg-white/80 backdrop-blur-md p-2 rounded-full hover:scale-110 transition">
                    <Heart size={18} className="text-pink-400" />
                </button>
            </div>

            {/* Content */}
            <div className="p-4">
                <h3 className="text-lg font-semibold text-[#6D4C41]">{product.name}</h3>

                <p className="text-gray-500 text-sm mt-1">{product.description}</p>

                <div className="flex items-center justify-between mt-4">
                    <span className="text-pink-500 font-bold text-lg">Bs. {product.price}</span>

                    <button className="bg-pink-400 hover:bg-pink-500 text-white px-4 py-2 rounded-full text-sm transition">Agregar</button>
                </div>
            </div>
        </div>
    );
}
