import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Star, Calculator, Minus, Plus } from "lucide-react";
import ReserveModal from "./ReserveModal";

const PricingSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [calculator, setCalculator] = useState({
    standard: 0,
    large: 0,
    oversized: 0,
    pickups: 0,
    deliveries: 0,
  });

  const itemPrices = {
    standard: 7,
    large: 15,
    oversized: 30,
    pickup: 5,
    delivery: 15,
    oversizedPickup: 10,
  };

  const bundles = [
    { name: "Seasonal Mini Storage", items: "up to 4 items", price: 25 },
    { name: "Small Bundle", items: "up to 10 items", price: 69 },
    { name: "Medium Bundle", items: "up to 20 items", price: 119 },
    { name: "Large Bundle", items: "up to 40 items", price: 199 },
  ];

  const calculateMonthly = () => {
    return (
      calculator.standard * itemPrices.standard +
      calculator.large * itemPrices.large +
      calculator.oversized * itemPrices.oversized
    );
  };

  const calculateServiceFees = () => {
    return (
      calculator.pickups * itemPrices.pickup +
      calculator.deliveries * itemPrices.delivery +
      calculator.oversized * calculator.pickups * itemPrices.oversizedPickup
    );
  };

  const updateCalculator = (field: keyof typeof calculator, delta: number) => {
    setCalculator((prev) => ({
      ...prev,
      [field]: Math.max(0, prev[field] + delta),
    }));
  };

  const CounterInput = ({
    label,
    value,
    field,
    price,
  }: {
    label: string;
    value: number;
    field: keyof typeof calculator;
    price: string;
  }) => (
    <div className="flex items-center justify-between py-3 border-b border-border last:border-0">
      <div>
        <p className="font-medium text-foreground">{label}</p>
        <p className="text-sm text-muted-foreground">{price}</p>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => updateCalculator(field, -1)}
          className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
          aria-label={`Decrease ${label}`}
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="w-8 text-center font-semibold">{value}</span>
        <button
          onClick={() => updateCalculator(field, 1)}
          className="w-8 h-8 rounded-full bg-porch-orange flex items-center justify-center text-accent-foreground hover:bg-porch-orange-hover transition-colors"
          aria-label={`Increase ${label}`}
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  return (
    <>
      <section id="pricing" className="py-20 md:py-28 scroll-mt-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-porch-blue mb-4">
              Pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple, transparent pricing. No surprises.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Per-Item Pricing */}
            <div className="bg-background rounded-2xl border border-border p-6 shadow-card">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Per-Item Storage
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Standard Item (bin/box/tote)</span>
                  <span className="font-semibold text-foreground">$7/month</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Large Item (bike, stroller, cushions)</span>
                  <span className="font-semibold text-foreground">$15/month</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Oversized Item (sofa, dresser)</span>
                  <span className="font-semibold text-foreground">$30/month</span>
                </div>
              </div>

              <h4 className="text-lg font-semibold text-foreground mt-8 mb-4">
                Bundle Pricing
              </h4>
              <div className="space-y-3">
                {bundles.map((bundle, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 px-3 bg-secondary/50 rounded-lg"
                  >
                    <div>
                      <span className="font-medium text-foreground">{bundle.name}</span>
                      <span className="text-sm text-muted-foreground ml-2">
                        ({bundle.items})
                      </span>
                    </div>
                    <span className="font-semibold text-porch-blue">${bundle.price}/mo</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Fees */}
            <div className="space-y-6">
              <div className="bg-background rounded-2xl border border-border p-6 shadow-card">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Service Fees
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Pickup Fee</span>
                    <span className="font-semibold text-foreground">$5 flat</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Delivery Fee</span>
                    <span className="font-semibold text-foreground">$15 flat</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Oversized Item Pickup Surcharge</span>
                    <span className="font-semibold text-foreground">+$10/item</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Moving Help / Heavy Lifting</span>
                    <span className="font-semibold text-foreground">$60/hr</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Packing / Boxing Items</span>
                    <span className="font-semibold text-foreground">$5/box</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Same-Day Delivery</span>
                    <span className="font-semibold text-foreground">+$25 surcharge</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4 italic">
                  (Most customers never need moving help.)
                </p>
              </div>

              {/* Premium Membership */}
              <div className="bg-gradient-to-br from-porch-blue to-porch-blue-dark rounded-2xl p-6 text-primary-foreground shadow-card">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-6 h-6 fill-porch-orange text-porch-orange" />
                  <h3 className="text-xl font-semibold">PorchPickup Premium</h3>
                </div>
                <p className="text-3xl font-bold mb-4">
                  $29<span className="text-lg font-normal">/month</span>
                </p>
                <ul className="space-y-2">
                  {[
                    "1 free delivery per month",
                    "Priority scheduling",
                    "20% off oversized-item rates",
                    "Free porch supplies kit (labels/bins)",
                    "Same-Day Delivery for $10 (instead of $25)",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-porch-orange flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Pricing Calculator */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="bg-secondary rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <Calculator className="w-6 h-6 text-porch-blue" />
                <h3 className="text-xl font-semibold text-foreground">
                  Estimate Your Cost
                </h3>
              </div>

              <div className="bg-background rounded-xl p-4 mb-6">
                <p className="text-sm font-medium text-muted-foreground mb-2">
                  Monthly Storage
                </p>
                <CounterInput
                  label="Standard Items"
                  value={calculator.standard}
                  field="standard"
                  price="$7/item/month"
                />
                <CounterInput
                  label="Large Items"
                  value={calculator.large}
                  field="large"
                  price="$15/item/month"
                />
                <CounterInput
                  label="Oversized Items"
                  value={calculator.oversized}
                  field="oversized"
                  price="$30/item/month"
                />
              </div>

              <div className="bg-background rounded-xl p-4 mb-6">
                <p className="text-sm font-medium text-muted-foreground mb-2">
                  Service Fees (one-time)
                </p>
                <CounterInput
                  label="Pickups"
                  value={calculator.pickups}
                  field="pickups"
                  price="$5/pickup"
                />
                <CounterInput
                  label="Deliveries"
                  value={calculator.deliveries}
                  field="deliveries"
                  price="$15/delivery"
                />
              </div>

              <div className="bg-porch-mint rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-foreground">Monthly Storage Cost</span>
                  <span className="text-xl font-bold text-porch-blue">
                    ${calculateMonthly()}/month
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-porch-blue/20">
                  <span className="text-foreground">Service Fees (one-time)</span>
                  <span className="text-lg font-semibold text-foreground">
                    ${calculateServiceFees()}
                  </span>
                </div>
              </div>

              <Button
                variant="cta"
                size="lg"
                className="w-full mt-6"
                onClick={() => setIsModalOpen(true)}
              >
                Reserve Your Spot
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ReserveModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default PricingSection;
