import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "management@hadronelectronics.in",
      href: "mailto:management@hadronelectronics.in",
      description: "Send us an email for detailed inquiries",
      gradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91-9725342297",
      href: "tel:+919725342297",
      description: "Call us during business hours",
      gradient: "from-violet-500/10 to-purple-500/10",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+91-9725342297",
      href: "https://wa.me/919725342297",
      description: "Quick response via WhatsApp",
      gradient: "from-green-500/10 to-emerald-500/10",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Header */}
      <div className="relative py-20 overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
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
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Contact Us
            </span>
            <h1 className="text-5xl font-heading font-bold text-foreground mb-6" data-testid="text-contact-title">
              Let's Start a Conversation
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions about our products? Our team is ready to help you find the perfect BMS solution.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="h-full border-2 hover:border-primary/50 transition-all relative overflow-hidden" data-testid={`card-contact-${method.title.toLowerCase()}`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  
                  <CardContent className="p-8 space-y-4 text-center relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center mx-auto shadow-lg shadow-primary/20 group-hover:shadow-xl group-hover:shadow-primary/30 transition-shadow">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {method.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {method.description}
                      </p>
                      <a
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" className="w-full" data-testid={`button-contact-${method.title.toLowerCase()}`}>
                          {method.value}
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                    Business Hours
                  </h2>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex justify-between gap-4">
                      <span className="font-medium text-foreground">Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM IST</span>
                    </p>
                    <p className="flex justify-between gap-4">
                      <span className="font-medium text-foreground">Saturday:</span>
                      <span>9:00 AM - 1:00 PM IST</span>
                    </p>
                    <p className="flex justify-between gap-4">
                      <span className="font-medium text-foreground">Sunday:</span>
                      <span>Closed</span>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                    Location
                  </h2>
                  <p className="text-muted-foreground">
                    Based in Rewari, Haryana, India, serving customers nation-wide with reliable BMS solutions for industrial and commercial applications.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
