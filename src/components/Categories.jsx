const categories = [
    {
        name: "Tortas",
        image: "/img/pastel4.png",
    },
    {
        name: "Cupcakes",
        image: "/img/mofin4.jpg",
    },
    {
        name: "Postres",
        image: "/img/tartaleta1.jpg",
    },
    {
        name: "Personalizados",
        image: "/img/pie2.jpg",
    },
];

export default function Categories() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8 ">
                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#6D4C41]">Nuestras Categorías</h2>
                    <p className="text-gray-600 mt-3">Descubre nuestras delicias artesanales</p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, index) => (
                        <div key={index} className="relative rounded-2xl overflow-hidden group cursor-pointer">
                            {/* Image */}
                            <img
                                src={cat.image}
                                alt={cat.name}
                                className="w-full h-[250px] object-cover group-hover:scale-110 transition duration-500"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                            {/* Text */}
                            <div className="absolute bottom-4 left-4">
                                <h3 className="text-white text-xl font-semibold">{cat.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
