import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Package, Users, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>
      
      {/* Speed Lines Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: 0,
              right: 0,
              animation: `speed-lines 3s linear infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-secondary-foreground">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-primary text-sm font-medium mb-6 animate-slide-up">
              <Zap className="h-4 w-4" />
              Lightning Fast Deliveries
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-slide-up stagger-1">
              Fast. Direct.{" "}
              <span className="text-primary">Reliable</span> Deliveries For Every Need.
            </h1>
            
            <p className="text-lg md:text-xl text-secondary-foreground/70 mb-8 max-w-xl animate-slide-up stagger-2">
              Connecting producers, wholesalers, retailers, and customers with seamless logistics solutions. Your trusted partner in urban delivery.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12 animate-slide-up stagger-3">
              <Link to="/order">
                <Button variant="hero" size="lg" className="gap-2">
                  Order as Customer
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/producer">
                <Button variant="heroOutline" size="lg">
                  Business Portal
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 animate-slide-up stagger-4">
              {[
                { value: "50K+", label: "Deliveries" },
                { value: "500+", label: "Partners" },
                { value: "99%", label: "On-Time" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-secondary-foreground/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Portal Cards */}
          <div className="grid grid-cols-2 gap-4 animate-slide-in-right">
            {[
              { icon: Package, title: "Producer Portal", desc: "Ship directly to retailers", path: "/producer" },
              { icon: Truck, title: "Wholesaler Portal", desc: "Bulk delivery solutions", path: "/wholesaler" },
              { icon: Users, title: "Retailer Portal", desc: "Order from suppliers", path: "/retailer" },
              { icon: Zap, title: "Quick Order", desc: "Customer deliveries", path: "/order" },
            ].map((card, i) => (
              <Link
                key={i}
                to={card.path}
                className={`group p-6 rounded-2xl bg-card/10 backdrop-blur-sm border border-secondary-foreground/10 hover:bg-card hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-elevated ${
                  i % 2 === 0 ? "" : "mt-8"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <card.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-secondary-foreground group-hover:text-foreground mb-1">
                  {card.title}
                </h3>
                <p className="text-sm text-secondary-foreground/60 group-hover:text-muted-foreground">
                  {card.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
