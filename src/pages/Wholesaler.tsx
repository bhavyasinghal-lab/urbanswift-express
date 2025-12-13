import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Truck, Upload, FileText, IndianRupee, ArrowRight, Mail, Lock, User, Calculator } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Wholesaler = () => {
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    company: "",
  });
  const [estimatorData, setEstimatorData] = useState({
    weight: "",
    distance: "",
    quantity: "",
  });

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: isRegistering ? "Registration successful!" : "Welcome back!",
      description: "You've been logged in to your wholesaler account.",
    });
    setIsLoggedIn(true);
  };

  const handleUpload = () => {
    toast({
      title: "Product list uploaded!",
      description: "Your catalog has been updated successfully.",
    });
  };

  const handleRequestDelivery = () => {
    toast({
      title: "Delivery requested!",
      description: "We'll contact you shortly to confirm the details.",
    });
  };

  const calculateEstimate = () => {
    const weight = parseFloat(estimatorData.weight) || 0;
    const distance = parseFloat(estimatorData.distance) || 0;
    const quantity = parseFloat(estimatorData.quantity) || 1;
    const baseRate = 5;
    const perKgRate = 0.5;
    const perKmRate = 0.3;
    const estimate = (baseRate + (weight * perKgRate) + (distance * perKmRate)) * quantity;
    
    toast({
      title: `Estimated Cost: ₹${estimate.toFixed(2)}`,
      description: "This is an approximate quote. Final price may vary.",
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
                  Wholesaler Portal
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Bulk Delivery <span className="text-primary">Solutions</span>
                </h1>
                <p className="text-xl text-secondary-foreground/70 mb-8">
                  Upload product lists, manage orders, and get competitive rates for bulk shipments.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { icon: Upload, text: "Easy product upload" },
                    { icon: Truck, text: "Scheduled routes" },
                    { icon: IndianRupee, text: "Volume discounts" },
                    { icon: FileText, text: "Invoice management" },
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
                    ? "Register your wholesale business"
                    : "Log in to your wholesaler account"}
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
                        <label className="block text-sm font-medium mb-2">Business Name</label>
                        <Input
                          required
                          placeholder="Your Wholesale Co."
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
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
                        placeholder="you@business.com"
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
              <h1 className="text-3xl font-bold">Wholesaler Dashboard</h1>
              <p className="text-muted-foreground">Manage your bulk deliveries</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={handleUpload}>
                <Upload className="h-5 w-5 mr-2" />
                Upload Products
              </Button>
              <Button variant="hero" onClick={handleRequestDelivery}>
                <Truck className="h-5 w-5 mr-2" />
                Request Delivery
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Stats & Orders */}
            <div className="lg:col-span-2 space-y-6">
              {/* Stats */}
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { title: "Pending Orders", value: "8", icon: Package, color: "text-orange-500" },
                  { title: "Active Deliveries", value: "15", icon: Truck, color: "text-blue-500" },
                  { title: "This Month", value: "₹12,450", icon: IndianRupee, color: "text-green-500" },
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

              {/* Recent Orders */}
              <Card>
                <CardHeader>
                  <CardTitle>Order Management</CardTitle>
                  <CardDescription>Your recent bulk orders</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { id: "WHL-001", retailer: "SuperStore Chain", pallets: 12, status: "In Transit", statusColor: "bg-blue-100 text-blue-700" },
                      { id: "WHL-002", retailer: "Corner Markets", pallets: 6, status: "Processing", statusColor: "bg-orange-100 text-orange-700" },
                      { id: "WHL-003", retailer: "Metro Retail", pallets: 24, status: "Delivered", statusColor: "bg-green-100 text-green-700" },
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
                              {order.retailer} • {order.pallets} pallets
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

            {/* Pricing Estimator */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5 text-primary" />
                    Pricing Estimator
                  </CardTitle>
                  <CardDescription>Get a quick quote for bulk shipments</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Total Weight (kg)</label>
                    <Input
                      type="number"
                      placeholder="e.g., 500"
                      value={estimatorData.weight}
                      onChange={(e) => setEstimatorData({ ...estimatorData, weight: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Distance (km)</label>
                    <Input
                      type="number"
                      placeholder="e.g., 50"
                      value={estimatorData.distance}
                      onChange={(e) => setEstimatorData({ ...estimatorData, distance: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Number of Shipments</label>
                    <Input
                      type="number"
                      placeholder="e.g., 1"
                      value={estimatorData.quantity}
                      onChange={(e) => setEstimatorData({ ...estimatorData, quantity: e.target.value })}
                    />
                  </div>
                  <Button variant="default" className="w-full" onClick={calculateEstimate}>
                    Calculate Estimate
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Wholesaler;
