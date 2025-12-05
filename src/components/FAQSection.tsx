import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Do I have to be home for pickup or delivery?",
      answer: "Nope! Just leave your items on the porch.",
    },
    {
      question: "How do you track my items?",
      answer:
        "We photograph, label, and catalog everything. You'll see your items in your customer portal.",
    },
    {
      question: "Is there a minimum storage time?",
      answer: "Just 1 month.",
    },
    {
      question: "How big can items be?",
      answer:
        "If it fits on a porch or through a front doorway, we can store it.",
    },
    {
      question: "Do I need insurance?",
      answer:
        "No—basic coverage is included. (Optional additional coverage available.)",
    },
    {
      question: "Where are items stored?",
      answer:
        "In our secure, climate-controlled facility in the north metro area.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 scroll-mt-20">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-porch-blue text-center mb-16">
          Frequently Asked Questions
        </h2>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border rounded-xl px-6 shadow-soft data-[state=open]:shadow-card transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-porch-blue py-5 [&[data-state=open]>svg]:text-porch-orange">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
