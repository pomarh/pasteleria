import { supabase } from "../lib/supabase";

export async function getProductsByCategory(categoryId) {
    const { data, error } = await supabase.from("products").select("*").eq("category_id", categoryId);

    if (error) throw error;
    return data;
}
