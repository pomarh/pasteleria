import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import CategoryProducts from "../components/CategoryProducts";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhastApp.Button";

export default function Home() {
    const [categoryId, setCategoryId] = useState(null);

    return (
        <>
            <Navbar />
            <Hero />

            {/* Seleccion de categoria */}
            <Categories setCategory={setCategoryId} />

            {/* solo se muestra si hay productos */}
            {categoryId && <CategoryProducts categoryId={categoryId} />}

            <Testimonials />
            <Footer />

            {/* este componente siempre va al final */}
            <WhatsAppButton />
        </>
    );
}
