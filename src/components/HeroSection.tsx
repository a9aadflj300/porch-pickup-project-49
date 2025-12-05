import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ReserveModal from "./ReserveModal";

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

            {/* Hero Illustration */}
            <div className="relative hidden lg:block animate-fade-up stagger-2">
              <div className="relative">
                {/* House illustration */}
                <svg
                  viewBox="0 0 400 350"
                  className="w-full h-auto max-w-md mx-auto"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Ground */}
                  <ellipse cx="200" cy="330" rx="180" ry="15" fill="hsl(150 63% 90%)" />
                  
                  {/* House body */}
                  <rect x="80" y="150" width="240" height="160" rx="4" fill="hsl(0 0% 98%)" stroke="hsl(207 48% 47%)" strokeWidth="3" />
                  
                  {/* Roof */}
                  <path d="M60 155 L200 60 L340 155" stroke="hsl(207 48% 47%)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <path d="M70 155 L200 70 L330 155 L70 155" fill="hsl(207 48% 47%)" opacity="0.1" />
                  
                  {/* Door */}
                  <rect x="170" y="220" width="60" height="90" rx="4" fill="hsl(207 48% 47%)" />
                  <circle cx="215" cy="265" r="4" fill="hsl(31 87% 65%)" />
                  
                  {/* Windows */}
                  <rect x="100" y="180" width="50" height="50" rx="3" fill="hsl(207 48% 47%)" opacity="0.2" stroke="hsl(207 48% 47%)" strokeWidth="2" />
                  <line x1="125" y1="180" x2="125" y2="230" stroke="hsl(207 48% 47%)" strokeWidth="2" />
                  <line x1="100" y1="205" x2="150" y2="205" stroke="hsl(207 48% 47%)" strokeWidth="2" />
                  
                  <rect x="250" y="180" width="50" height="50" rx="3" fill="hsl(207 48% 47%)" opacity="0.2" stroke="hsl(207 48% 47%)" strokeWidth="2" />
                  <line x1="275" y1="180" x2="275" y2="230" stroke="hsl(207 48% 47%)" strokeWidth="2" />
                  <line x1="250" y1="205" x2="300" y2="205" stroke="hsl(207 48% 47%)" strokeWidth="2" />
                  
                  {/* Porch */}
                  <rect x="130" y="295" width="140" height="15" rx="2" fill="hsl(37 52% 85%)" stroke="hsl(207 48% 47%)" strokeWidth="2" />
                  
                  {/* Storage boxes on porch */}
                  <g className="animate-bounce" style={{ animationDuration: '3s' }}>
                    <rect x="140" y="260" width="35" height="35" rx="3" fill="hsl(31 87% 65%)" />
                    <rect x="145" y="265" width="25" height="3" rx="1" fill="hsl(31 87% 75%)" />
                    <rect x="145" y="272" width="18" height="3" rx="1" fill="hsl(31 87% 75%)" />
                  </g>
                  
                  <rect x="180" y="275" width="25" height="20" rx="2" fill="hsl(207 48% 60%)" />
                  <rect x="183" y="278" width="19" height="2" rx="1" fill="hsl(207 48% 75%)" />
                  
                  {/* Decorative plants */}
                  <circle cx="95" cy="295" r="12" fill="hsl(150 63% 70%)" />
                  <circle cx="88" cy="288" r="8" fill="hsl(150 63% 65%)" />
                  <rect x="92" y="295" width="6" height="15" rx="2" fill="hsl(37 52% 60%)" />
                  
                  <circle cx="305" cy="295" r="12" fill="hsl(150 63% 70%)" />
                  <circle cx="312" cy="288" r="8" fill="hsl(150 63% 65%)" />
                  <rect x="302" y="295" width="6" height="15" rx="2" fill="hsl(37 52% 60%)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReserveModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default HeroSection;
