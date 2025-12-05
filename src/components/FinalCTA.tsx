import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import ReserveModal from "./ReserveModal";

const FinalCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 md:py-28 section-blue relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-porch-orange/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-porch-mint/10 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-porch-orange/20 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-5 h-5 text-porch-orange" />
              <span className="text-sm font-medium">Limited January Openings</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready for Clutter-Free Living?
            </h2>

            <p className="text-xl text-primary-foreground/80 mb-10">
              Reserve your January spot now. Limited openings available as we launch our new north metro facility.
            </p>

            <Button
              variant="cta"
              size="xl"
              onClick={() => setIsModalOpen(true)}
              className="group"
            >
              Reserve Your Space
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <ReserveModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default FinalCTA;
