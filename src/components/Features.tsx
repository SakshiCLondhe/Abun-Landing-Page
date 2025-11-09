import { Search, FileText, TrendingUp, Edit3 } from "lucide-react";
import { Card } from "./ui/card";

const features = [
  {
    icon: Search,
    title: "Keyword Research",
    description: "Find the best keywords for any topic in seconds.",
  },
  {
    icon: FileText,
    title: "Content Samples",
    description: "Instantly generate intros, outlines & posts.",
  },
  {
    icon: TrendingUp,
    title: "SEO Optimization",
    description: "Get on-page SEO tips automatically.",
  },
  {
    icon: Edit3,
    title: "Easy Editing",
    description: "Adjust tone, length & style with one click.",
  },
];

export function Features() {
  return (
    <section className="bg-white" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
      <div className="mx-auto max-w-[1200px] px-[120px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 text-[#222222]">
            Everything you need to write faster & smarter.
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-8 hover:shadow-lg transition-all duration-300 bg-white border border-slate-200 rounded-xl"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-[#222222]">{feature.title}</h3>
                <p className="text-[#555555]">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
