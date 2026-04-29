import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Categories />
            <Testimonials />
            <Footer />
        </>
    );
}

export default App;
