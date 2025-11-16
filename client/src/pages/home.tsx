import HeroBanner from "@/components/HeroBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Award } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Shield,
      title: "Advanced Protection",
      description: "Comprehensive safety features including over-charge, over-discharge, and short-circuit protection.",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Engineered for demanding applications with industry-leading current handling capabilities.",
    },
    {
      icon: Award,
      title: "Proven Reliability",
      description: "Trusted by leading manufacturers for critical power management applications.",
    },
  ];

  return (
    <div>
      <HeroBanner />
      
      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4" data-testid="text-features-title">
              Why Choose Hadron BMS?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-leading battery management solutions designed for reliability and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} data-testid={`card-feature-${index}`}>
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
