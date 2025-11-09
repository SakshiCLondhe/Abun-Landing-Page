import { Button } from "./ui/button";
import { Check } from "lucide-react";
import { Card } from "./ui/card";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "",
    features: [
      "Basic templates",
      "Limited AI runs",
      "Standard support",
      "Export to text",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$15",
    period: "/mo",
    features: [
      "Unlimited AI runs",
      "Advanced SEO tools",
      "Priority support",
      "Export to multiple formats",
      "Team collaboration",
      "Analytics dashboard",
    ],
    cta: "Get Pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: [
      "API access",
      "Team collaboration",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
      "White-label options",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section className="bg-white" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
      <div className="mx-auto max-w-[1200px] px-[120px]">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-[#222222]">
            Choose a plan that fits you.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 rounded-xl border-2 transition-all duration-300 ${
                plan.highlighted
                  ? 'border-primary shadow-xl scale-105 bg-gradient-to-b from-primary/5 to-white'
                  : 'border-slate-200 hover:shadow-lg'
              }`}
            >
              {plan.highlighted && (
                <div className="mb-4 -mt-12 mx-auto w-fit">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm">
                    Recommended
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="mb-2 text-[#222222]">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl text-[#222222]" style={{ fontWeight: 700 }}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-[#555555]">{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-[#555555]">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full h-12 rounded-[10px] ${
                  plan.highlighted
                    ? 'bg-primary text-white hover:bg-primary/90'
                    : 'bg-white text-primary border-2 border-primary hover:bg-primary/5'
                }`}
                variant={plan.highlighted ? 'default' : 'outline'}
                style={{ fontWeight: 600 }}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
