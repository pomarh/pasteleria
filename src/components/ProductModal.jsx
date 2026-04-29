export default function ProductModal({ product, onClose }) {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            {/* Overlay click */}
            <div className="absolute inset-0" onClick={onClose} />

            {/* Modal */}
            <div className="relative bg-white rounded-2xl max-w-lg w-full p-6 z-10 animate-fadeIn">
                {/* Close */}
                <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-black">
                    ✕
                </button>

                {/* Image */}
                <img src={product.image} alt={product.name} className="w-full h-62.5 object-cover rounded-xl" />

                {/* Content */}
                <h2 className="text-2xl font-bold text-[#6D4C41] mt-4">{product.name}</h2>

                <p className="text-gray-600 mt-2">{product.description}</p>

                <div className="flex justify-between items-center mt-4">
                    <span className="text-pink-500 font-bold text-xl">Bs. {product.price}</span>

                    <button className="bg-pink-400 hover:bg-pink-500 text-white px-5 py-2 rounded-full">Agregar</button>
                </div>
            </div>
        </div>
    );
}
