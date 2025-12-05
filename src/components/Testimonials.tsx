import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I never want to visit a storage unit again.",
    },
    {
      quote: "My garage finally feels usable.",
    },
    {
      quote: "Seasonal storage without any hauling? Worth every penny.",
    },
    {
      quote: "Dropped off and picked up while I was at work—so convenient.",
    },
  ];

  return (
    <section className="py-20 md:py-28 section-beige">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-porch-blue text-center mb-16">
          Why People Love Us
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 shadow-card hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-porch-orange text-porch-orange"
                  />
                ))}
              </div>
              <p className="text-foreground italic leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
