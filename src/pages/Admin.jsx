import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllProducts, createProduct, updateProduct, deleteProduct } from "../services/products";
import { getCategories } from "../services/categories";
import { useAuth } from "../hook/useAuth";

const emptyForm = { name: "", description: "", price: "", category_id: "" };

export default function Admin() {
    const { signOut } = useAuth();
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [form, setForm] = useState(emptyForm);
    const [imageFile, setImageFile] = useState(null);
    const [editingId, setEditingId] = useState(null);
    const [saving, setSaving] = useState(false);

    async function loadProducts() {
        const data = await getAllProducts();
        setProducts(data);
    }

    useEffect(() => {
        loadProducts();
        getCategories().then(setCategories);
    }, []);

    function handleEdit(product) {
        setEditingId(product.id);
        setForm({
            name: product.name,
            description: product.description,
            price: product.price,
            category_id: product.category_id,
        });
        setImageFile(null);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function handleCancelEdit() {
        setEditingId(null);
        setForm(emptyForm);
        setImageFile(null);
    }

    async function handleDelete(id) {
        if (!confirm("¿Eliminar este producto? Esta acción no se puede deshacer.")) return;
        try {
            await deleteProduct(id);
            loadProducts();
        } catch (error) {
            alert("Error al eliminar: " + error.message);
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setSaving(true);
        try {
            if (editingId) {
                const current = products.find((p) => p.id === editingId);
                await updateProduct(editingId, { ...form, image: current.image }, imageFile);
            } else {
                if (!imageFile) {
                    alert("Selecciona una imagen para el producto.");
                    setSaving(false);
                    return;
                }
                await createProduct(form, imageFile);
            }
            handleCancelEdit();
            loadProducts();
        } catch (error) {
            alert("Error al guardar: " + error.message);
        } finally {
            setSaving(false);
        }
    }

    return (
        <div className="min-h-screen bg-neutral py-12 px-4 md:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-[#6D4C41]">Administrar productos</h1>
                    <button
                        onClick={() => {
                            signOut();
                            navigate("/login");
                        }}
                        className="text-sm text-gray-500 hover:underline">
                        Cerrar sesión
                    </button>
                </div>

                {/* Formulario */}
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-6 mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <h2 className="md:col-span-2 text-xl font-semibold text-[#6D4C41]">{editingId ? "Editar producto" : "Nuevo producto"}</h2>

                    <input
                        type="text"
                        placeholder="Nombre"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="border rounded-lg px-4 py-2"
                        required
                    />

                    <select
                        value={form.category_id}
                        onChange={(e) => setForm({ ...form, category_id: e.target.value })}
                        className="border rounded-lg px-4 py-2"
                        required>
                        <option value="">Selecciona categoría</option>
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>

                    <input
                        type="number"
                        placeholder="Precio (Bs.)"
                        value={form.price}
                        onChange={(e) => setForm({ ...form, price: e.target.value })}
                        className="border rounded-lg px-4 py-2"
                        required
                    />

                    <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} className="border rounded-lg px-4 py-2" />

                    <textarea
                        placeholder="Descripción"
                        value={form.description}
                        onChange={(e) => setForm({ ...form, description: e.target.value })}
                        className="border rounded-lg px-4 py-2 md:col-span-2"
                        rows={2}
                    />

                    <div className="md:col-span-2 flex gap-3">
                        <button
                            type="submit"
                            disabled={saving}
                            className="bg-button hover:opacity-90 text-white px-6 py-2 rounded-full disabled:opacity-50">
                            {saving ? "Guardando..." : editingId ? "Guardar cambios" : "Crear producto"}
                        </button>
                        {editingId && (
                            <button type="button" onClick={handleCancelEdit} className="px-6 py-2 rounded-full border text-gray-600">
                                Cancelar
                            </button>
                        )}
                    </div>
                </form>

                {/* Lista de productos */}

                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                    {/* Vista tabla — solo desktop */}
                    <table className="w-full text-left hidden md:table">
                        <thead className="bg-[#FFF8E1] text-[#6D4C41]">
                            <tr>
                                <th className="p-4">Imagen</th>
                                <th className="p-4">Nombre</th>
                                <th className="p-4">Categoría</th>
                                <th className="p-4">Precio</th>
                                <th className="p-4">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id} className="border-t">
                                    <td className="p-4">
                                        <img src={product.image} alt={product.name} className="w-14 h-14 object-cover rounded-lg" />
                                    </td>
                                    <td className="p-4">{product.name}</td>
                                    <td className="p-4">{product.categories?.name}</td>
                                    <td className="p-4">Bs. {product.price}</td>
                                    <td className="p-4 flex gap-2">
                                        <button onClick={() => handleEdit(product)} className="text-primary hover:underline">
                                            Editar
                                        </button>
                                        <button onClick={() => handleDelete(product.id)} className="text-red-500 hover:underline">
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Vista tarjetas — solo celular */}
                    <div className="md:hidden divide-y">
                        {products.map((product) => (
                            <div key={product.id} className="p-4 flex gap-4">
                                <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-lg shrink-0" />
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-[#6D4C41] truncate">{product.name}</h3>
                                    <p className="text-sm text-gray-500">{product.categories?.name}</p>
                                    <p className="text-primary font-bold mt-1">Bs. {product.price}</p>
                                    <div className="flex gap-4 mt-2">
                                        <button onClick={() => handleEdit(product)} className="text-primary text-sm hover:underline">
                                            Editar
                                        </button>
                                        <button onClick={() => handleDelete(product.id)} className="text-red-500 text-sm hover:underline">
                                            Eliminar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
