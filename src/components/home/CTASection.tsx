import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
            Ready to Transform Your <span className="text-primary">Logistics?</span>
          </h2>
          <p className="text-xl text-secondary-foreground/70 mb-10">
            Join thousands of businesses and individuals who trust UrbanSwift for their delivery needs.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/order">
              <Button variant="hero" size="lg" className="gap-2">
                Start Ordering Now
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="heroOutline" size="lg">
                Contact Sales
              </Button>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-secondary-foreground/50 text-sm">
            <span>✓ No setup fees</span>
            <span>✓ 24/7 support</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
