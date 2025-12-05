import { Car, Package, ShieldX, Heart } from "lucide-react";

const WhyPorchPickup = () => {
  const benefits = [
    {
      icon: Car,
      text: "No driving across town.",
    },
    {
      icon: Package,
      text: "No loading a car.",
    },
    {
      icon: ShieldX,
      text: "No sketchy storage units.",
    },
  ];

  return (
    <section className="py-20 md:py-28 section-beige">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-porch-blue mb-12">
            Storage that fits your life. Not the other way around.
          </h2>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 shadow-card hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-porch-mint rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-porch-blue" />
                </div>
                <p className="text-lg font-medium text-foreground">{benefit.text}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 text-xl text-foreground/80">
            <Heart className="w-6 h-6 text-porch-orange" />
            <p className="font-medium">You stay home. We handle everything.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPorchPickup;
