import ProductCard from "./ProductCard";

const products = [
    {
        name: "Torta de Fresa",
        description: "Suave bizcocho con crema y fresas frescas",
        price: 120,
        image: "/img/pastel1.jpg",
        badge: "Popular",
    },
    {
        name: "Cupcakes Vainilla",
        description: "Pack de 6 cupcakes artesanales",
        price: 60,
        image: "/img/mofin3.jpg",
        badge: "Nuevo",
    },
    {
        name: "Bonbita",
        description: "Rellenos de crema",
        price: 90,
        image: "/img/bonbita1.jpg",
    },
    {
        name: "Croissant",
        description: "Intenso sabor con ganache",
        price: 110,
        image: "/img/croissant2.jpg",
    },
];

export default function Products() {
    return (
        <section className="py-16 bg-[#FFF8E1]">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Title */}
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#6D4C41]">Productos Destacados</h2>
                    <button className="text-pink-400 font-medium hover:underline">Ver todos</button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
