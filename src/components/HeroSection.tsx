import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ReserveModal from "./ReserveModal";
import porchPickupImage from "@/assets/porch-pickup-image.png";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 gradient-hero" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-porch-mint rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-porch-beige rounded-full blur-3xl opacity-60" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="max-w-xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-porch-blue leading-tight mb-6 animate-fade-up">
                Storage picked up from your porch. Delivered back when you need it.
              </h1>
              
              <p className="text-lg sm:text-xl text-foreground/80 mb-8 animate-fade-up stagger-1">
                PorchPickup Storage is the easiest way to store seasonal items without ever visiting a storage unit. Just leave your things on the porch—we'll take it from here.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up stagger-2">
                <Button
                  variant="cta"
                  size="xl"
                  onClick={() => setIsModalOpen(true)}
                  className="group"
                >
                  Reserve Your January Spot
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-4 animate-fade-up stagger-3">
                Limited openings for seasonal storage.
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative hidden lg:block animate-fade-up stagger-2">
              <img
                src={porchPickupImage}
                alt="PorchPickup Storage - Boxes being picked up from your porch"
                className="w-full h-auto max-w-lg mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <ReserveModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default HeroSection;
