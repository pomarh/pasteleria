import { Star } from "lucide-react";
import { useState, useEffect } from "react";
import { getTestimonials } from "../services/testimonials";

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        getTestimonials()
            .then(setTestimonials)
            .catch((error) => console.error("Error al cargar testimonios:", error));
    }, []);
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#6D4C41]">Lo que dicen nuestros clientes</h2>
                    <p className="text-gray-600 mt-3">Experiencias reales que endulzan momentos</p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((item) => (
                        <div
                            key={item.id}
                            className="bg-[#FFF8E1] rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
                            {/* Stars */}
                            <div className="flex mb-3">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>

                            {/* Comment */}
                            <p className="text-gray-700 italic">“{item.message}”</p>

                            {/* User */}
                            <div className="flex items-center gap-3 mt-6">
                                {item.image ? (
                                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                                ) : (
                                    <div className="w-12 h-12 rounded-full bg-pink-200 flex items-center justify-center text-[#6D4C41] font-semibold">
                                        {item.name?.charAt(0)}
                                    </div>
                                )}
                                <div>
                                    <h4 className="font-semibold text-[#6D4C41]">{item.name}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
