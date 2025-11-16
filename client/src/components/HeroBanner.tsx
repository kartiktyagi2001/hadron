import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroBg from "@assets/generated_images/Hero_section_background_pattern_56a17368.png";

export default function HeroBanner() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.03]"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6"
          variants={itemVariants}
          data-testid="text-hero-title"
        >
          Advanced Battery Management Systems
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
          data-testid="text-hero-subtitle"
        >
          Engineered for reliability and performance. Trusted by industry leaders for mission-critical power management solutions.
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link href="/products">
            <Button size="lg" data-testid="button-explore-products">
              Explore Products
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
