import { Search, Sparkles, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "1",
    title: "Input your topic & keywords",
    description: "Tell Abun what you want to write about",
  },
  {
    icon: Sparkles,
    number: "2",
    title: "Let AI generate high-value drafts",
    description: "Watch as AI creates optimized content",
  },
  {
    icon: CheckCircle,
    number: "3",
    title: "Edit, polish & export instantly",
    description: "Refine and publish your content",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
      <div className="mx-auto max-w-[1200px] px-[120px]">
        <div className="text-center mb-16">
          <h2 className="text-[#222222]">How it works</h2>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center relative">
                  {/* Connecting line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-[60%] w-[80%] border-t-2 border-dashed border-primary/30">
                      <ArrowRight className="absolute -right-2 -top-3 w-6 h-6 text-primary/50" />
                    </div>
                  )}
                  
                  {/* Icon circle */}
                  <div className="mx-auto mb-6 w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center relative">
                    <Icon className="w-12 h-12 text-primary" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm">
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="mb-3 text-[#222222]">{step.title}</h3>
                  <p className="text-[#555555]">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
