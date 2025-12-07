import { Factory, Store, ShoppingBag, MapPin } from "lucide-react";

const services = [
  {
    icon: Factory,
    title: "Producer to Retailer",
    description: "Direct delivery from manufacturing facilities to retail stores. Skip the middleman and reduce costs.",
    features: ["Same-day pickup", "Temperature controlled", "Bulk handling"],
  },
  {
    icon: Store,
    title: "Wholesaler to Retailer",
    description: "Efficient distribution from wholesale centers to retail locations across the city.",
    features: ["Scheduled routes", "Inventory sync", "Priority handling"],
  },
  {
    icon: ShoppingBag,
    title: "Retailer to Consumer",
    description: "Last-mile delivery from stores to customers' doorsteps with real-time tracking.",
    features: ["Express delivery", "Live tracking", "Contactless drop"],
  },
  {
    icon: MapPin,
    title: "Hyperlocal Delivery",
    description: "Neighborhood-level delivery for urgent needs. Get anything delivered within hours.",
    features: ["1-hour delivery", "Local experts", "24/7 service"],
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-accent text-primary text-sm font-medium rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Delivery Solutions for <span className="text-gradient">Every Need</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From producers to consumers, we handle every link in the supply chain with speed and precision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card shadow-card hover:shadow-elevated border border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
