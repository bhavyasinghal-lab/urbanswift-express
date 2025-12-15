import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Trash2, Edit2, Save, X, ArrowLeft, Package } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate, useSearchParams } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  unit: string;
  stock: number;
}

const initialProducts: Product[] = [
  { id: 1, name: "Fresh Vegetables Bundle", price: 49, unit: "1 kg", stock: 100 },
  { id: 2, name: "Organic Rice", price: 38, unit: "1 kg", stock: 250 },
  { id: 3, name: "Premium Coffee Beans", price: 39, unit: "250 gm", stock: 80 },
  { id: 4, name: "Fresh Milk", price: 28, unit: "1 litre", stock: 150 },
  { id: 5, name: "Whole Wheat Bread", price: 22, unit: "1 loaf", stock: 60 },
];

const ProductList = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const source = searchParams.get("source") || "retailer";
  
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<Product | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", unit: "", stock: "" });

  const handleEdit = (product: Product) => {
    setEditingId(product.id);
    setEditForm({ ...product });
  };

  const handleSaveEdit = () => {
    if (editForm) {
      setProducts(products.map(p => p.id === editForm.id ? editForm : p));
      setEditingId(null);
      setEditForm(null);
      toast({ title: "Product updated!", description: "Changes saved successfully." });
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditForm(null);
  };

  const handleDelete = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
    toast({ title: "Product removed", description: "Product has been deleted from your list." });
  };

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.unit || !newProduct.stock) {
      toast({ title: "Missing fields", description: "Please fill all fields.", variant: "destructive" });
      return;
    }
    const product: Product = {
      id: Date.now(),
      name: newProduct.name,
      price: parseFloat(newProduct.price),
      unit: newProduct.unit,
      stock: parseInt(newProduct.stock),
    };
    setProducts([...products, product]);
    setNewProduct({ name: "", price: "", unit: "", stock: "" });
    setIsAdding(false);
    toast({ title: "Product added!", description: `${product.name} has been added to your list.` });
  };

  const handleBack = () => {
    navigate(`/${source}`);
  };

  return (
    <Layout>
      <section className="py-12 bg-muted min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" onClick={handleBack}>
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-3xl font-bold">Product List</h1>
                <p className="text-muted-foreground">Manage your products for consumers to order</p>
              </div>
            </div>
            <Button variant="hero" onClick={() => setIsAdding(true)}>
              <Plus className="h-5 w-5 mr-2" />
              Add Product
            </Button>
          </div>

          {/* Add Product Form */}
          {isAdding && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Add New Product</CardTitle>
                <CardDescription>Fill in the product details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  <Input
                    placeholder="Product name"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  />
                  <Input
                    type="number"
                    placeholder="Price (₹)"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                  />
                  <Input
                    placeholder="Unit (e.g., 1 kg)"
                    value={newProduct.unit}
                    onChange={(e) => setNewProduct({ ...newProduct, unit: e.target.value })}
                  />
                  <Input
                    type="number"
                    placeholder="Stock quantity"
                    value={newProduct.stock}
                    onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                  />
                  <div className="flex gap-2">
                    <Button onClick={handleAddProduct} className="flex-1">
                      <Save className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                    <Button variant="outline" onClick={() => setIsAdding(false)}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Products List */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                Your Products ({products.length})
              </CardTitle>
              <CardDescription>Products available for consumers to order</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between p-4 rounded-xl bg-muted hover:bg-muted/80 transition-colors"
                  >
                    {editingId === product.id && editForm ? (
                      <div className="flex-1 grid sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
                        <Input
                          value={editForm.name}
                          onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                        />
                        <Input
                          type="number"
                          value={editForm.price}
                          onChange={(e) => setEditForm({ ...editForm, price: parseFloat(e.target.value) })}
                        />
                        <Input
                          value={editForm.unit}
                          onChange={(e) => setEditForm({ ...editForm, unit: e.target.value })}
                        />
                        <Input
                          type="number"
                          value={editForm.stock}
                          onChange={(e) => setEditForm({ ...editForm, stock: parseInt(e.target.value) })}
                        />
                        <div className="flex gap-2">
                          <Button size="sm" onClick={handleSaveEdit}>
                            <Save className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" onClick={handleCancelEdit}>
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Package className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <div className="font-semibold">{product.name}</div>
                            <div className="text-sm text-muted-foreground">
                              ₹{product.price} per {product.unit} • Stock: {product.stock}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" onClick={() => handleEdit(product)}>
                            <Edit2 className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="destructive" onClick={() => handleDelete(product.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                ))}

                {products.length === 0 && (
                  <div className="text-center py-12 text-muted-foreground">
                    <Package className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No products yet. Add your first product above!</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default ProductList;
