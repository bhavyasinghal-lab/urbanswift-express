import { Zap, Shield, Navigation, DollarSign } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Same-day and express delivery options to meet your urgent needs. Average delivery time under 2 hours for local orders.",
  },
  {
    icon: Shield,
    title: "Verified Partners",
    description: "All our delivery partners are thoroughly vetted, trained, and insured. Your packages are in safe hands.",
  },
  {
    icon: Navigation,
    title: "Real-time Tracking",
    description: "Know exactly where your delivery is with live GPS tracking. Get instant notifications at every step.",
  },
  {
    icon: DollarSign,
    title: "Affordable Rates",
    description: "Competitive pricing with no hidden fees. Volume discounts available for businesses.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1 bg-accent text-primary text-sm font-medium rounded-full mb-4">
              Why UrbanSwift
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Smart Choice for <span className="text-gradient">Urban Logistics</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We've built our platform around what matters most: speed, reliability, and transparency. Join thousands of businesses and individuals who trust UrbanSwift.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-hero rounded-3xl opacity-10 blur-2xl" />
            <div className="relative bg-card rounded-3xl shadow-elevated p-8 border border-border">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { value: "2M+", label: "Packages Delivered", color: "text-primary" },
                  { value: "15K+", label: "Active Partners", color: "text-secondary" },
                  { value: "98.5%", label: "Customer Satisfaction", color: "text-primary" },
                  { value: "50+", label: "Cities Covered", color: "text-secondary" },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-6 rounded-2xl bg-muted">
                    <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
