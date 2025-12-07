import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Users, Truck, MapPin, Award, Clock } from "lucide-react";

const teamMembers = [
  {
    name: "Bhavya Singhal",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&q=80",
  },
  {
    name: "Krishiv Sharma",
    role: "COO",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face&q=80",
  },
  {
    name: "Navay Gupta",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face&q=80",
  },
  {
    name: "Vikhyat Wadhwa",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face&q=80",
  },
  {
    name: "Rudra Manhas",
    role: "Head of Technology",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&q=80",
  },
];

const milestones = [
  { year: "2019", title: "Founded", desc: "UrbanSwift started with a mission to revolutionize urban logistics" },
  { year: "2020", title: "10K Deliveries", desc: "Reached our first major milestone during challenging times" },
  { year: "2021", title: "Expanded to 20 Cities", desc: "Rapid growth across major metropolitan areas" },
  { year: "2023", title: "2M+ Deliveries", desc: "Trusted by thousands of businesses nationwide" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
              Transforming Urban <span className="text-primary">Logistics</span>
            </h1>
            <p className="text-xl text-secondary-foreground/70">
              We're on a mission to make deliveries faster, more reliable, and accessible for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Our Mission", desc: "To provide seamless, fast, and reliable logistics solutions that connect businesses and customers across urban landscapes." },
              { icon: Eye, title: "Our Vision", desc: "To become the most trusted logistics platform, setting the standard for speed, transparency, and customer satisfaction." },
              { icon: Heart, title: "Our Values", desc: "Integrity, innovation, and customer-centricity drive everything we do. We believe in building lasting partnerships." },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-card shadow-card border border-border hover:shadow-elevated transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-primary to-orange-400 flex items-center justify-center mb-6">
                  <item.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-accent text-primary text-sm font-medium rounded-full mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                From Startup to <span className="text-gradient">Industry Leader</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                UrbanSwift was born from a simple observation: urban logistics was broken. Businesses struggled with delayed deliveries, lack of transparency, and unreliable partners.
              </p>
              <p className="text-muted-foreground mb-8">
                We set out to fix this by building a platform that connects producers, wholesalers, retailers, and consumers with a network of verified delivery partners. Today, we're proud to serve thousands of businesses and deliver millions of packages every year.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Users, value: "15K+", label: "Active Partners" },
                  { icon: Truck, value: "2M+", label: "Deliveries" },
                  { icon: MapPin, value: "50+", label: "Cities" },
                  { icon: Award, value: "98.5%", label: "Satisfaction" },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-xl font-bold">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="relative">
              {milestones.map((milestone, i) => (
                <div key={i} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      {milestone.year}
                    </div>
                    {i < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="pt-2">
                    <h4 className="font-semibold text-lg mb-1">{milestone.title}</h4>
                    <p className="text-muted-foreground">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1 bg-accent text-primary text-sm font-medium rounded-full mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet the <span className="text-gradient">Leaders</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A passionate team dedicated to transforming urban logistics.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {teamMembers.map((member, i) => (
              <div key={i} className="group text-center">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h4 className="font-semibold text-lg">{member.name}</h4>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-secondary-foreground/70 mb-10 max-w-2xl mx-auto">
            Join thousands of businesses that trust UrbanSwift for their logistics needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button variant="hero" size="lg">Contact Us</Button>
            </Link>
            <Link to="/order">
              <Button variant="heroOutline" size="lg">Start Ordering</Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
