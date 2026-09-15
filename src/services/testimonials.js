import { supabase } from "../lib/supabase";

export async function getTestimonials() {
    const { data, error } = await supabase.from("testimonials").select("*");

    if (error) {
        console.error("Error al cargar testimonios:", error);
        return [];
    }
    return data;
}
