import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Truck, CreditCard, RefreshCcw, ShoppingCart, ArrowRight, Mail, Lock, User, Factory, Store } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Retailer = () => {
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    store: "",
  });
  const [orderSource, setOrderSource] = useState<"producer" | "wholesaler" | null>(null);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: isRegistering ? "Registration successful!" : "Welcome back!",
      description: "You've been logged in to your retailer account.",
    });
    setIsLoggedIn(true);
  };

  const handleQuickReorder = () => {
    toast({
      title: "Reorder placed!",
      description: "Your last order has been duplicated and submitted.",
    });
  };

  if (!isLoggedIn) {
    return (
      <Layout>
        <section className="py-24 bg-gradient-dark min-h-[80vh] flex items-center">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="text-secondary-foreground">
                <span className="inline-block px-4 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full mb-4">
                  Retailer Portal
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Order from <span className="text-primary">Suppliers</span>
                </h1>
                <p className="text-xl text-secondary-foreground/70 mb-8">
                  Source products from producers and wholesalers with streamlined ordering and delivery tracking.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { icon: Factory, text: "Direct from producers" },
                    { icon: Store, text: "Wholesale options" },
                    { icon: RefreshCcw, text: "Quick reorder" },
                    { icon: CreditCard, text: "Flexible payments" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-secondary-foreground/80">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Auth Form */}
              <div className="bg-card rounded-2xl shadow-elevated p-8">
                <h2 className="text-2xl font-bold mb-2">
                  {isRegistering ? "Create Account" : "Welcome Back"}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {isRegistering
                    ? "Register your retail store"
                    : "Log in to your retailer account"}
                </p>

                <form onSubmit={handleAuth} className="space-y-4">
                  {isRegistering && (
                    <>
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <Input
                            required
                            className="pl-10"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Store Name</label>
                        <Input
                          required
                          placeholder="Your Store Name"
                          value={formData.store}
                          onChange={(e) => setFormData({ ...formData, store: e.target.value })}
                        />
                      </div>
                    </>
                  )}
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        type="email"
                        required
                        className="pl-10"
                        placeholder="you@store.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        type="password"
                        required
                        className="pl-10"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      />
                    </div>
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    {isRegistering ? "Create Account" : "Log In"}
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </form>

                <p className="text-center mt-6 text-muted-foreground">
                  {isRegistering ? "Already have an account?" : "Don't have an account?"}{" "}
                  <button
                    onClick={() => setIsRegistering(!isRegistering)}
                    className="text-primary font-medium hover:underline"
                  >
                    {isRegistering ? "Log In" : "Register"}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-12 bg-muted min-h-screen">
        <div className="container mx-auto px-4">
          {/* Dashboard Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold">Retailer Dashboard</h1>
              <p className="text-muted-foreground">Order products and track deliveries</p>
            </div>
            <Button variant="hero" onClick={handleQuickReorder}>
              <RefreshCcw className="h-5 w-5 mr-2" />
              Quick Reorder
            </Button>
          </div>

          {/* Order Source Selection */}
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <button
              onClick={() => setOrderSource("producer")}
              className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                orderSource === "producer"
                  ? "border-primary bg-accent"
                  : "border-border bg-card hover:border-primary/50"
              }`}
            >
              <Factory className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Order from Producers</h3>
              <p className="text-muted-foreground">Direct sourcing from manufacturers with fresh inventory</p>
            </button>
            <button
              onClick={() => setOrderSource("wholesaler")}
              className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                orderSource === "wholesaler"
                  ? "border-primary bg-accent"
                  : "border-border bg-card hover:border-primary/50"
              }`}
            >
              <Store className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Order from Wholesalers</h3>
              <p className="text-muted-foreground">Bulk pricing with wide product selection</p>
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Stats & Orders */}
            <div className="lg:col-span-2 space-y-6">
              {/* Stats */}
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { title: "Active Orders", value: "6", icon: ShoppingCart, color: "text-orange-500" },
                  { title: "Incoming Deliveries", value: "4", icon: Truck, color: "text-blue-500" },
                  { title: "This Month Spent", value: "₹8,240", icon: CreditCard, color: "text-green-500" },
                ].map((stat, i) => (
                  <Card key={i}>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        {stat.title}
                      </CardTitle>
                      <stat.icon className={`h-5 w-5 ${stat.color}`} />
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">{stat.value}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Active Orders */}
              <Card>
                <CardHeader>
                  <CardTitle>Active Orders</CardTitle>
                  <CardDescription>Your current orders in progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { id: "RET-001", supplier: "Fresh Farms Co.", items: 48, status: "In Transit", eta: "Today 3PM", statusColor: "bg-blue-100 text-blue-700" },
                      { id: "RET-002", supplier: "Metro Wholesale", items: 120, status: "Processing", eta: "Tomorrow", statusColor: "bg-orange-100 text-orange-700" },
                      { id: "RET-003", supplier: "City Producers", items: 36, status: "Out for Delivery", eta: "Today 1PM", statusColor: "bg-green-100 text-green-700" },
                    ].map((order, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-4 rounded-xl bg-muted hover:bg-muted/80 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Package className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <div className="font-semibold">{order.id}</div>
                            <div className="text-sm text-muted-foreground">
                              {order.supplier} • {order.items} items • ETA: {order.eta}
                            </div>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${order.statusColor}`}>
                          {order.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Payment History */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-primary" />
                    Payment History
                  </CardTitle>
                  <CardDescription>Recent transactions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { date: "Dec 5", amount: "₹1,240", status: "Paid" },
                    { date: "Dec 3", amount: "₹890", status: "Paid" },
                    { date: "Nov 28", amount: "₹2,150", status: "Paid" },
                    { date: "Nov 25", amount: "₹1,560", status: "Paid" },
                  ].map((payment, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted">
                      <div>
                        <div className="font-medium">{payment.amount}</div>
                        <div className="text-sm text-muted-foreground">{payment.date}</div>
                      </div>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                        {payment.status}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Retailer;
