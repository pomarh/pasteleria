import { useEffect, useState } from "react";
import { getCategories } from "../services/categories";

const accents = ["primary", "secondary", "tertiary", "light-rose"];

export default function Categories({ setCategory }) {
    //estados para llamar a la bd en la tabla de categories
    const [categories, setCategories] = useState([]);

    // useEffetc para getCategories
    useEffect(() => {
        getCategories()
            .then(setCategories)
            .catch((error) => console.error("Error al cargar Categorias:", error));
    }, []);

    return (
        <section id="productos" className="py-20 bg-neutral scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="mb-14 max-w-md">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#6D4C41]">Nuestras categorías</h2>
                    <p className="text-gray-600 mt-3">Descubre nuestras delicias artesanales</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((cat, i) => {
                        const accent = accents[i % accents.length];
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setCategory(cat.id)}
                                className="group text-left rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
                                <div className="relative h-56">
                                    <img
                                        src={cat.image}
                                        alt={cat.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                    />
                                    <span
                                        className="absolute top-4 left-4 w-3 h-3 rounded-full ring-4 ring-white/70"
                                        style={{ backgroundColor: `var(--color-${accent})` }}
                                    />
                                </div>
                                <div className="px-5 py-4">
                                    <h3 className="text-[#6D4C41] font-semibold text-lg">{cat.name}</h3>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
