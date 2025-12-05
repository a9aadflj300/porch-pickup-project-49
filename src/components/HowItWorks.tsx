import { Calendar, Camera, Truck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: Calendar,
      title: "Schedule a pickup",
      description:
        "Book a pickup time online. You don't even need to be home—just leave your items on the porch.",
    },
    {
      number: "2",
      icon: Camera,
      title: "We catalog & store your items",
      description:
        "Your items are photographed, labeled, and stored in our secure, climate-controlled facility. You can see everything you've stored in your customer portal.",
    },
    {
      number: "3",
      icon: Truck,
      title: "Get anything delivered back",
      description:
        'Need your holiday bins? Your bike? Your patio cushions? Just tap "deliver" and we bring it right to your porch.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 scroll-mt-20">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-porch-blue text-center mb-16">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-gradient-to-r from-porch-blue to-porch-orange" />
              )}

              <div className="text-center">
                {/* Number badge */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-24 h-24 bg-porch-mint rounded-full flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-porch-blue" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-porch-orange rounded-full flex items-center justify-center text-accent-foreground font-bold text-lg shadow-button">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
