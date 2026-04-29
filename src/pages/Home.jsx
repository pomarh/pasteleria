import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import CategoryProducts from "../components/CategoryProducts";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhastApp.Button";

export default function Home() {
    const [category, setCategory] = useState(null);

    const products = [
        {
            name: "Torta de Fresa",
            category: "Tortas",
            price: 120,
            image: "/img/pastel1.jpg",
            description: "Deliciosa torta",
        },
        {
            name: "Cupcake Vainilla",
            category: "Cupcakes",
            price: 50,
            image: "/img/mofin3.jpg",
            description: "Muy suave",
        },
    ];

    return (
        <>
            <Navbar />
            <Hero />

            {/* dispara cambio */}
            <Categories setCategory={setCategory} />

            {/* render dinámico */}
            <CategoryProducts category={category} products={products} />

            <Testimonials />
            <Footer />

            {/* este componente siempre va al final */}
            <WhatsAppButton />
        </>
    );
}
