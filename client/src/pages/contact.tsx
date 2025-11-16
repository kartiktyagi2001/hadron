import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "info@hadronelectronics.com",
      href: "mailto:info@hadronelectronics.com",
      description: "Send us an email for detailed inquiries",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91-XXXX-XXXXXX",
      href: "tel:+91XXXXXXXXXX",
      description: "Call us during business hours",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+91-XXXXXXXXXX",
      href: "https://wa.me/91XXXXXXXXXX",
      description: "Quick response via WhatsApp",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4" data-testid="text-contact-title">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground">
            Have questions about our products? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card key={index} data-testid={`card-contact-${method.title.toLowerCase()}`}>
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mx-auto">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
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
            );
          })}
        </div>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
              Business Hours
            </h2>
            <div className="space-y-2 text-muted-foreground">
              <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
              <p>Saturday: 9:00 AM - 1:00 PM IST</p>
              <p>Sunday: Closed</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
