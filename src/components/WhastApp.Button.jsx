import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "59177771361"; // ⚠️ confirmar cuál es el número correcto

export default function WhatsAppButton() {
    const message = encodeURIComponent(
        "¡Hola! 👋 Vi su página y me gustaría hacer un pedido. ¿Podrían ayudarme con la disponibilidad y los precios?",
    );

    return (
        <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition z-9999">
            <FaWhatsapp size={24} />
        </a>
    );
}
