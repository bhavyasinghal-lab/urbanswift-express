import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Filter, ShoppingCart, Plus, Minus, Trash2, MapPin, Clock, CreditCard, ArrowRight, Package } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const products = [
  { id: 1, name: "Organic Vegetables Bundle", category: "Groceries", price: 49, store: "Fresh Farms", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=200&h=200&fit=crop", unit: "1 kg" },
  { id: 2, name: "Artisan Bread Selection", category: "Bakery", price: 25, store: "City Bakery", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&h=200&fit=crop", unit: "1 loaf" },
  { id: 3, name: "Premium Coffee Beans", category: "Beverages", price: 39, store: "Bean Bros",  image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=200&h=200&fit=crop", unit: "250 gm" },
  { id: 4, name: "Fresh Fruit Basket", category: "Groceries", price: 65, store: "Orchard Fresh",  image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=200&h=200&fit=crop", unit: "1 kg" },
  { id: 5, name: "Dairy Essentials Pack", category: "Dairy", price: 35, store: "Farm Direct",  image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=200&h=200&fit=crop", unit: "1 litre" },
  { id: 6, name: "Gourmet Cheese Selection", category: "Dairy", price: 55, store: "Cheese House",  image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=200&h=200&fit=crop", unit: "200 gm" },
  { id: 7, name: "Basmati Rice Premium", category: "Groceries", price: 38, store: "Grain Market",  image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&h=200&fit=crop", unit: "1 kg" },
  { id: 8, name: "Fresh Orange Juice", category: "Beverages", price: 18, store: "Juice Bar",  image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=200&h=200&fit=crop", unit: "500 ml" },
  { id: 9, name: "Whole Wheat Flour", category: "Groceries", price: 15, store: "Mill Fresh",  image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=200&h=200&fit=crop", unit: "1 kg" },
  { id: 10, name: "Chocolate Croissants", category: "Bakery", price: 20, store: "French Bakery", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=200&h=200&fit=crop", unit: "2 pcs" },
  { id: 11, name: "Greek Yogurt Pack", category: "Dairy", price: 28, store: "Dairy Delight", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=200&h=200&fit=crop", unit: "400 gm" },
  { id: 12, name: "Masala Tea Blend", category: "Beverages", price: 30, store: "Tea House",  image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=200&h=200&fit=crop", unit: "100 gm" },
  { id: 13, name: "Fresh Paneer Block", category: "Dairy", price: 45, store: "Dairy Fresh", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=200&h=200&fit=crop", unit: "250 gm" },
  { id: 14, name: "Sourdough Loaf", category: "Bakery", price: 32, store: "Artisan Bakes",  image: "https://images.unsplash.com/photo-1585478259715-876acc5be8fc?w=200&h=200&fit=crop", unit: "1 loaf" },
  { id: 15, name: "Mixed Nuts Pack", category: "Groceries", price: 70, store: "Nutty Corner",  image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=200&h=200&fit=crop", unit: "250 gm" },
  { id: 16, name: "Mango Lassi Bottle", category: "Beverages", price: 15, store: "Lassi King", image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=200&h=200&fit=crop", unit: "300 ml" },
  { id: 17, name: "Butter Croissants", category: "Bakery", price: 18, store: "City Bakery",  image: "https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?w=200&h=200&fit=crop", unit: "2 pcs" },
  { id: 18, name: "Organic Honey Jar", category: "Groceries", price: 55, store: "Bee Farms",  image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=200&h=200&fit=crop", unit: "500 gm" },
  { id: 19, name: "Cottage Cheese Pack", category: "Dairy", price: 28, store: "Farm Direct",  image: "https://images.unsplash.com/photo-1559561853-08451507cbe7?w=200&h=200&fit=crop", unit: "200 gm" },
  { id: 20, name: "Cold Brew Coffee", category: "Beverages", price: 25, store: "Bean Bros",  image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=200&h=200&fit=crop", unit: "350 ml" },
  { id: 21, name: "Fresh Spinach Bundle", category: "Groceries", price: 12, store: "Green Mart", image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=200&h=200&fit=crop", unit: "500 gm" },
  { id: 22, name: "Multigrain Bread", category: "Bakery", price: 22, store: "Health Bakes",  image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=200&h=200&fit=crop", unit: "1 loaf" },
  { id: 23, name: "Almond Milk Carton", category: "Dairy", price: 38, store: "Plant Dairy", image: "https://images.unsplash.com/photo-1600788907416-456578634209?w=200&h=200&fit=crop", unit: "1 litre" },
  { id: 24, name: "Green Smoothie Mix", category: "Beverages", price: 22, store: "Juice Bar",  image: "https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?w=200&h=200&fit=crop", unit: "500 ml" },
];

const categories = ["All", "Groceries", "Bakery", "Beverages", "Dairy"];

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  unit: string;
}

const Order = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [step, setStep] = useState<"browse" | "checkout" | "tracking">("browse");
  const [deliveryTime, setDeliveryTime] = useState("asap");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (product: typeof products[0]) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { id: product.id, name: product.name, price: product.price, quantity: 1, image: product.image, unit: product.unit }]);
    }
    toast({ title: "Added to cart!", description: product.name });
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(cart.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
    ).filter((item) => item.quantity > 0));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = cartTotal > 500 ? 0 : 49;

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast({ title: "Cart is empty", description: "Add items before checkout.", variant: "destructive" });
      return;
    }
    setStep("checkout");
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Order placed!", description: "Your order is being prepared." });
    setStep("tracking");
  };

  if (step === "tracking") {
    return (
      <Layout>
        <section className="py-24 bg-muted min-h-screen">
          <div className="container mx-auto px-4 max-w-2xl">
            <Card>
              <CardHeader className="text-center">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <Package className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Order Confirmed!</CardTitle>
                <CardDescription>Your order #ORD-7829 is being prepared</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Progress */}
                <div className="flex justify-between items-center">
                  {["Order Placed", "Preparing", "On the Way", "Delivered"].map((stage, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                        i === 0 ? "bg-primary text-primary-foreground" :
                        i === 1 ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                      }`}>
                        {i + 1}
                      </div>
                      <span className={`text-xs text-center ${i <= 1 ? "text-foreground" : "text-muted-foreground"}`}>
                        {stage}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-muted">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Estimated Delivery</div>
                      <div className="text-sm text-muted-foreground">Today, 2:30 PM - 3:00 PM</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Delivery Address</div>
                      <div className="text-sm text-muted-foreground">123 Main St, Apt 4B, New York</div>
                    </div>
                  </div>
                </div>

                <Button variant="hero" className="w-full" onClick={() => setStep("browse")}>
                  Continue Shopping
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </Layout>
    );
  }

  if (step === "checkout") {
    return (
      <Layout>
        <section className="py-12 bg-muted min-h-screen">
          <div className="container mx-auto px-4">
            <button
              onClick={() => setStep("browse")}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              ← Back to shopping
            </button>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Checkout</CardTitle>
                    <CardDescription>Complete your order</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handlePlaceOrder} className="space-y-6">
                      {/* Delivery Address */}
                      <div>
                        <h3 className="font-semibold mb-4 flex items-center gap-2">
                          <MapPin className="h-5 w-5 text-primary" />
                          Delivery Address
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <Input required placeholder="Street Address" />
                          <Input placeholder="Apt, Suite, etc." />
                          <Input required placeholder="City" />
                          <Input required placeholder="ZIP Code" />
                        </div>
                      </div>

                      {/* Delivery Time */}
                      <div>
                        <h3 className="font-semibold mb-4 flex items-center gap-2">
                          <Clock className="h-5 w-5 text-primary" />
                          Delivery Time
                        </h3>
                        <div className="grid sm:grid-cols-3 gap-4">
                          {[
                            { value: "asap", label: "ASAP", sub: "30-45 min" },
                            { value: "scheduled", label: "Today", sub: "2-4 PM" },
                            { value: "tomorrow", label: "Tomorrow", sub: "10-12 AM" },
                          ].map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => setDeliveryTime(option.value)}
                              className={`p-4 rounded-xl border-2 text-left transition-all ${
                                deliveryTime === option.value
                                  ? "border-primary bg-accent"
                                  : "border-border hover:border-primary/50"
                              }`}
                            >
                              <div className="font-medium">{option.label}</div>
                              <div className="text-sm text-muted-foreground">{option.sub}</div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Payment */}
                      <div>
                        <h3 className="font-semibold mb-4 flex items-center gap-2">
                          <CreditCard className="h-5 w-5 text-primary" />
                          Payment Method
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <Input required placeholder="Card Number" />
                          <div className="grid grid-cols-2 gap-4">
                            <Input required placeholder="MM/YY" />
                            <Input required placeholder="CVV" />
                          </div>
                        </div>
                      </div>

                      <Button type="submit" variant="hero" size="lg" className="w-full">
                        Place Order - ₹{(cartTotal + deliveryFee).toFixed(0)}
                        <ArrowRight className="h-5 w-5" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{item.image}</span>
                          <div>
                            <div className="font-medium text-sm">{item.name}</div>
                            <div className="text-sm text-muted-foreground">x{item.quantity}</div>
                          </div>
                        </div>
                        <span className="font-medium">₹{(item.price * item.quantity).toFixed(0)}</span>
                      </div>
                    ))}
                    <div className="border-t border-border pt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>₹{cartTotal.toFixed(0)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Delivery</span>
                        <span>{deliveryFee === 0 ? "FREE" : `₹${deliveryFee.toFixed(0)}`}</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg pt-2 border-t border-border">
                        <span>Total</span>
                        <span className="text-primary">₹{(cartTotal + deliveryFee).toFixed(0)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center text-secondary-foreground">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Order <span className="text-primary">Anything</span> Delivered
            </h1>
            <p className="text-secondary-foreground/70 mb-8">
              Browse products from local retailers and wholesalers. Fast delivery to your door.
            </p>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                className="pl-12 h-14 text-lg bg-card border-none"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                        selectedCategory === category
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="hover:shadow-elevated transition-shadow overflow-hidden">
                    <CardContent className="p-0">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-4">
                        <div className="text-sm text-muted-foreground mb-1">{product.store}</div>
                        <h3 className="font-semibold mb-1">{product.name}</h3>
                        <div className="text-xs text-muted-foreground mb-2">{product.unit}</div>
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-bold text-primary">₹{product.price}</span>
                          <Button size="sm" onClick={() => addToCart(product)}>
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Cart */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="sticky top-24">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ShoppingCart className="h-5 w-5" />
                      Cart ({cart.length})
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {cart.length === 0 ? (
                      <p className="text-muted-foreground text-center py-8">Your cart is empty</p>
                    ) : (
                      <>
                        {cart.map((item) => (
                          <div key={item.id} className="flex items-center gap-3">
                            <span className="text-2xl">{item.image}</span>
                            <div className="flex-1">
                              <div className="font-medium text-sm">{item.name}</div>
                              <div className="text-sm text-muted-foreground">₹{item.price}</div>
                            </div>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="w-6 h-6 rounded bg-muted flex items-center justify-center hover:bg-muted-foreground/20"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="w-6 text-center text-sm">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="w-6 h-6 rounded bg-muted flex items-center justify-center hover:bg-muted-foreground/20"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>
                          </div>
                        ))}
                        <div className="border-t border-border pt-4">
                          <div className="flex justify-between mb-2">
                            <span className="text-muted-foreground">Subtotal</span>
                            <span className="font-medium">₹{cartTotal.toFixed(0)}</span>
                          </div>
                          <div className="flex justify-between mb-4">
                            <span className="text-muted-foreground">Delivery</span>
                            <span className="font-medium">{deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}</span>
                          </div>
                          <Button variant="hero" className="w-full" onClick={handleCheckout}>
                            Checkout - ₹{(cartTotal + deliveryFee).toFixed(0)}
                          </Button>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Order;
