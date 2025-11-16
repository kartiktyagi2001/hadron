export default function About() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-heading font-bold text-foreground mb-8" data-testid="text-about-title">
          About Hadron Electronics
        </h1>
        
        <div className="space-y-6 text-muted-foreground">
          <p className="text-lg" data-testid="text-about-intro">
            Hadron Electronics is a leading Indian manufacturer specializing in advanced Battery Management Systems (BMS) for industrial and commercial applications. With a commitment to engineering excellence and innovation, we deliver reliable power management solutions trusted by industry leaders.
          </p>

          <h2 className="text-2xl font-heading font-semibold text-foreground mt-12 mb-4">
            Our Expertise
          </h2>
          <p>
            Our team of experienced engineers develops cutting-edge BMS technology designed to meet the demanding requirements of modern battery systems. From LiFePO4 to lithium-ion configurations, our products are engineered for optimal performance, safety, and longevity.
          </p>

          <h2 className="text-2xl font-heading font-semibold text-foreground mt-12 mb-4">
            Quality & Reliability
          </h2>
          <p>
            Every Hadron BMS undergoes rigorous testing and quality control to ensure it meets the highest industry standards. Our commitment to quality has made us a preferred partner for electric vehicles, energy storage systems, and industrial power applications across India.
          </p>

          <h2 className="text-2xl font-heading font-semibold text-foreground mt-12 mb-4">
            Our Mission
          </h2>
          <p>
            To empower the transition to sustainable energy by providing world-class battery management solutions that ensure safety, efficiency, and reliability in every application.
          </p>
        </div>
      </div>
    </div>
  );
}
