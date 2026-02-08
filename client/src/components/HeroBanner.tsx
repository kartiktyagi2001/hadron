import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

import { ArrowRight, Zap } from "lucide-react";

export default function HeroBanner() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
      
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.05]"
        style={{ backgroundImage: `url(/generated_images/Hero_section_background_pattern_56a17368.png)` }}
      />
      
      {/* Animated orbs */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-primary/15 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
        >
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Industry-Leading BMS Technology</span>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6 bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70"
          variants={itemVariants}
          data-testid="text-hero-title"
        >
          Advanced Battery
          <br />
          <span className="text-primary">Management Systems</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
          data-testid="text-hero-subtitle"
        >
          Engineered for reliability and performance. Trusted by industry leaders for mission-critical power management solutions.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/products">
            <Button size="lg" className="group" data-testid="button-explore-products">
              Explore Products
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" data-testid="button-contact-us">
              Contact Us
            </Button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: "6+", label: "Products Delivered" },
            { value: "99.9%", label: "Reliability Rate" },
            { value: "24/7", label: "Support Available" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-heading font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
