import { supabase } from "../lib/supabase";

export async function getProductsByCategory(categoryId) {
    const { data, error } = await supabase.from("products").select("*").eq("category_id", categoryId);

    if (error) {
        console.error(error);
        return [];
    }
    return data;
}

export async function getAllProducts() {
    const { data, error } = await supabase.from("products").select("*, categories(name)").order("created_at", { ascending: false });

    if (error) {
        console.error(error);
        return [];
    }
    return data;
}

// Sube una imagen al bucket "products" y devuelve su URL pública
async function uploadProductImage(file) {
    const fileName = `${Date.now()}-${file.name}`;

    const { error: uploadError } = await supabase.storage.from("products").upload(fileName, file);

    if (uploadError) throw uploadError;

    const { data } = supabase.storage.from("products").getPublicUrl(fileName);
    return data.publicUrl;
}

export async function createProduct(product, imageFile) {
    let imageUrl = null;
    if (imageFile) {
        imageUrl = await uploadProductImage(imageFile);
    }

    const { error } = await supabase.from("products").insert({
        name: product.name,
        description: product.description,
        price: product.price,
        category_id: product.category_id,
        image: imageUrl,
    });

    if (error) throw error;
}

export async function updateProduct(id, product, imageFile) {
    let imageUrl = product.image; // conserva la imagen existente si no se sube una nueva
    if (imageFile) {
        imageUrl = await uploadProductImage(imageFile);
    }

    const { error } = await supabase
        .from("products")
        .update({
            name: product.name,
            description: product.description,
            price: product.price,
            category_id: product.category_id,
            image: imageUrl,
        })
        .eq("id", id);

    if (error) throw error;
}

export async function deleteProduct(id) {
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) throw error;
}
