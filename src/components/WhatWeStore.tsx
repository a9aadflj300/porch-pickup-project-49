import { TreePine, Bike, Home, Sun, Package } from "lucide-react";

const WhatWeStore = () => {
  const categories = [
    {
      icon: TreePine,
      title: "Seasonal items",
      items: "Holiday decorations, fake trees, lights, bins",
    },
    {
      icon: Bike,
      title: "Sporting gear",
      items: "Bikes, golf clubs, skis, snowboards, camping equipment",
    },
    {
      icon: Home,
      title: "Home overflow",
      items: "Baby gear, hobby items, tools, bins, totes, small furniture",
    },
    {
      icon: Sun,
      title: "Outdoor items",
      items: "Patio cushions, planters, umbrellas, seasonal decor",
    },
  ];

  return (
    <section id="what-we-store" className="py-20 md:py-28 section-beige scroll-mt-20">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-porch-blue text-center mb-16">
          What We Store
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 shadow-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-porch-blue/10 rounded-lg flex items-center justify-center mb-4">
                <category.icon className="w-6 h-6 text-porch-blue" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {category.title}
              </h3>
              <p className="text-muted-foreground text-sm">{category.items}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-background rounded-full px-6 py-3 shadow-soft">
            <Package className="w-5 h-5 text-porch-orange" />
            <p className="text-foreground font-medium">
              If it fits on a porch, we can store it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeStore;
