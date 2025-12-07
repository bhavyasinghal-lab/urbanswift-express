import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Truck, Clock, CheckCircle, Calendar, ArrowRight, Mail, Lock, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Producer = () => {
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    company: "",
  });

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: isRegistering ? "Registration successful!" : "Welcome back!",
      description: "You've been logged in to your producer account.",
    });
    setIsLoggedIn(true);
  };

  const handleSchedulePickup = () => {
    toast({
      title: "Pickup Scheduled!",
      description: "Our team will arrive at your location within 2 hours.",
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
                  Producer Portal
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Ship Directly to <span className="text-primary">Retailers</span>
                </h1>
                <p className="text-xl text-secondary-foreground/70 mb-8">
                  Schedule pickups, manage deliveries, and grow your distribution network with UrbanSwift.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { icon: Truck, text: "Same-day pickup" },
                    { icon: Package, text: "Bulk handling" },
                    { icon: Clock, text: "Real-time tracking" },
                    { icon: CheckCircle, text: "Verified partners" },
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
                    ? "Register to start shipping with UrbanSwift"
                    : "Log in to your producer account"}
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
                        <label className="block text-sm font-medium mb-2">Company Name</label>
                        <Input
                          required
                          placeholder="Your Company Inc."
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
                        placeholder="you@company.com"
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
              <h1 className="text-3xl font-bold">Producer Dashboard</h1>
              <p className="text-muted-foreground">Manage your pickups and deliveries</p>
            </div>
            <Button variant="hero" onClick={handleSchedulePickup}>
              <Calendar className="h-5 w-5 mr-2" />
              Schedule Pickup
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { title: "Pending Orders", value: "12", icon: Package, color: "text-orange-500" },
              { title: "Pickup Scheduled", value: "5", icon: Calendar, color: "text-blue-500" },
              { title: "In Transit", value: "8", icon: Truck, color: "text-purple-500" },
              { title: "Delivered", value: "156", icon: CheckCircle, color: "text-green-500" },
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
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>Your latest delivery requests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { id: "ORD-001", retailer: "Fresh Mart", items: 24, status: "In Transit", statusColor: "bg-blue-100 text-blue-700" },
                  { id: "ORD-002", retailer: "City Grocers", items: 48, status: "Pending Pickup", statusColor: "bg-orange-100 text-orange-700" },
                  { id: "ORD-003", retailer: "Metro Foods", items: 36, status: "Delivered", statusColor: "bg-green-100 text-green-700" },
                  { id: "ORD-004", retailer: "Quick Stop", items: 12, status: "Scheduled", statusColor: "bg-purple-100 text-purple-700" },
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
                          {order.retailer} • {order.items} items
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
      </section>
    </Layout>
  );
};

export default Producer;
