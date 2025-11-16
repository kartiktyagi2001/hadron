import HeroBanner from "@/components/HeroBanner";
import AnimatedCircuit from "@/components/AnimatedCircuit";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Award, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  const features = [
    {
      icon: Shield,
      title: "Advanced Protection",
      description: "Comprehensive safety features including over-charge, over-discharge, and short-circuit protection.",
      gradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Engineered for demanding applications with industry-leading current handling capabilities.",
      gradient: "from-violet-500/10 to-purple-500/10",
    },
    {
      icon: Award,
      title: "Proven Reliability",
      description: "Trusted by leading manufacturers for critical power management applications.",
      gradient: "from-amber-500/10 to-orange-500/10",
    },
  ];

  const benefits = [
    "Real-time battery monitoring",
    "Intelligent cell balancing",
    "Temperature management",
    "Remote diagnostics support",
  ];

  return (
    <div>
      <HeroBanner />
      
      {/* Features Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4" data-testid="text-features-title">
              Engineered for Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-leading battery management solutions designed for reliability and performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Card className="h-full border-2 hover:border-primary/50 transition-all relative overflow-hidden" data-testid={`card-feature-${index}`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                    
                    <CardContent className="p-8 space-y-4 relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-xl group-hover:shadow-primary/30 transition-shadow">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background overflow-hidden">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-heading font-bold text-foreground mb-4">
                      Ready to Power Your Project?
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Explore our complete range of battery management systems designed for industrial excellence.
                    </p>
                    <ul className="space-y-3 mb-6">
                      {benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/products">
                      <Button size="lg" className="group">
                        View All Products
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                  <div className="relative h-64 md:h-full min-h-[300px]">
                    <AnimatedCircuit />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
