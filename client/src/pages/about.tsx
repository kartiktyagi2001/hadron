import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Target, TrendingUp, CheckCircle2, Award } from "lucide-react";
import manufacturingImg from "@assets/generated_images/Manufacturing_facility_photo_b940c29e.png";
import teamImg from "@assets/generated_images/Team_collaboration_photo_8f74708a.png";
import qualityImg from "@assets/generated_images/Quality_testing_photo_5374a6d6.png";

export default function About() {
  const stats = [
    { value: "30+", label: "Years of Excellence", icon: Award },
    { value: "100K+", label: "BMS Units Deployed", icon: TrendingUp },
    { value: "50+", label: "Expert Engineers", icon: Users },
    { value: "#1", label: "In Indian Market", icon: Target },
  ];

  const timeline = [
    {
      year: "1994",
      title: "Foundation",
      description: "Hadron Electronics established with a vision to revolutionize battery management technology in India.",
    },
    {
      year: "2008",
      title: "Expansion",
      description: "Launched LiFePO4 BMS series and expanded manufacturing capabilities to meet growing demand.",
    },
    {
      year: "2015",
      title: "Innovation",
      description: "Introduced intelligent monitoring systems and became market leader in advanced BMS solutions.",
    },
    {
      year: "2024",
      title: "Global Reach",
      description: "Serving customers across 15+ countries with cutting-edge battery management technology.",
    },
  ];

  const values = [
    {
      icon: Building2,
      title: "Engineering Excellence",
      description: "Precision-engineered solutions built on decades of expertise in power management.",
      image: manufacturingImg,
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description: "Dedicated support and customized solutions to meet unique industrial requirements.",
      image: teamImg,
    },
    {
      icon: CheckCircle2,
      title: "Quality Assurance",
      description: "Rigorous testing protocols ensuring reliability in mission-critical applications.",
      image: qualityImg,
    },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <div className="relative py-24 md:py-32 overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-primary/20 dark:bg-primary/10 rounded-full blur-3xl"
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">About Hadron Electronics</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6" data-testid="text-about-title">
              Powering Innovation in
              <span className="text-primary"> Battery Management</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              For over three decades, we've been at the forefront of battery management technology, 
              delivering reliable, efficient, and innovative solutions to industries across the globe.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="border-2 hover:border-primary/50 transition-all">
                    <CardContent className="p-6 text-center space-y-2">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-3xl md:text-4xl font-heading font-bold text-primary">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To empower industries with world-class battery management solutions that ensure safety, 
              efficiency, and reliability. We're committed to driving the transition to sustainable 
              energy through cutting-edge technology and uncompromising quality.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
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
                  <Card className="h-full border-2 hover:border-primary/50 transition-all overflow-hidden">
                    <div className="aspect-video overflow-hidden bg-muted">
                      <img
                        src={value.image}
                        alt={value.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6 space-y-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 md:py-24 bg-muted/30 dark:bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three decades of innovation, growth, and excellence in battery management technology.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20" />

            <div className="space-y-12 md:space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`${index % 2 === 0 ? "md:text-right" : "md:col-start-2"}`}>
                    <Card className="border-2 hover:border-primary/50 transition-all">
                      <CardContent className="p-6 md:p-8">
                        <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                          {item.year}
                        </div>
                        <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot - centered on desktop */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
              <CardContent className="p-8 md:p-12">
                <div className="text-primary text-6xl font-serif mb-6">"</div>
                <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-8">
                  At Hadron Electronics, we don't just manufacture battery management systems — 
                  we engineer solutions that power the future. Our commitment to innovation, quality, 
                  and sustainability drives everything we do.
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-heading font-bold text-primary">H</span>
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-foreground">Founder & CEO</div>
                    <div className="text-sm text-muted-foreground">Hadron Electronics</div>
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
