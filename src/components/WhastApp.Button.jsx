import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/59175879437?text=Hola%20quiero%20hacer%20un%20pedido"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition z-9999">
            <FaWhatsapp size={24} />
        </a>
    );
}
