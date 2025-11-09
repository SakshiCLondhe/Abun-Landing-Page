import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Search, FileText, TrendingUp, Edit3, Zap, Globe, Shield, BarChart, Lightbulb, Users, Smartphone, Cloud } from "lucide-react";
import { Card } from "../components/ui/card";

const features = [
  {
    icon: Search,
    title: "Keyword Research",
    description: "Find the best keywords for any topic in seconds.",
    details: "Discover high-value keywords with search volume, difficulty scores, and competitive analysis. Our AI analyzes millions of data points to surface opportunities your competitors are missing."
  },
  {
    icon: FileText,
    title: "Content Samples",
    description: "Instantly generate intros, outlines & posts.",
    details: "Get complete blog posts, social media content, email campaigns, and more. Our AI understands your brand voice and creates content that resonates with your audience."
  },
  {
    icon: TrendingUp,
    title: "SEO Optimization",
    description: "Get on-page SEO tips automatically.",
    details: "Real-time SEO recommendations as you write. Optimize meta descriptions, headers, keyword density, and readability scores to rank higher in search results."
  },
  {
    icon: Edit3,
    title: "Easy Editing",
    description: "Adjust tone, length & style with one click.",
    details: "Transform your content instantly. Switch between professional, casual, persuasive, or friendly tones. Expand or condense content while maintaining quality and coherence."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Generate content in seconds, not hours.",
    details: "Our optimized AI infrastructure delivers results in under 5 seconds. Spend less time waiting and more time creating amazing content."
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Create content in 50+ languages.",
    details: "Reach global audiences with native-quality content in Spanish, French, German, Chinese, Japanese, and 45+ more languages."
  },
  {
    icon: Shield,
    title: "Plagiarism-Free",
    description: "100% original content guaranteed.",
    details: "Every piece is unique and passes plagiarism checkers. We use advanced AI to ensure your content is completely original and safe to publish."
  },
  {
    icon: BarChart,
    title: "Analytics Dashboard",
    description: "Track performance and ROI.",
    details: "Monitor content performance, track keyword rankings, and measure engagement. Make data-driven decisions with comprehensive analytics."
  },
  {
    icon: Lightbulb,
    title: "Content Ideas",
    description: "Never run out of topics to write about.",
    details: "Get unlimited content ideas based on trending topics, your niche, and audience interests. Our AI suggests topics that are proven to perform well."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together seamlessly.",
    details: "Invite team members, assign roles, share workspaces, and collaborate in real-time. Perfect for agencies and content teams."
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly",
    description: "Create content anywhere, anytime.",
    details: "Fully responsive interface works perfectly on desktop, tablet, and mobile. Write and edit on the go with our mobile-optimized editor."
  },
  {
    icon: Cloud,
    title: "Cloud Storage",
    description: "Your content, always accessible.",
    details: "All your content is securely stored in the cloud. Access your work from any device, anywhere in the world. Never lose your progress."
  },
];

export function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <div className="mx-auto max-w-[1200px] px-[120px]">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="mb-6 text-[#222222]">
              Powerful features for modern content creators
            </h1>
            <p className="text-[#555555] text-xl">
              Everything you need to create, optimize, and publish high-quality content faster than ever before.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ paddingTop: '120px', paddingBottom: '100px' }}>
        <div className="mx-auto max-w-[1200px] px-[120px]">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-3 text-[#222222]">{feature.title}</h3>
                  <p className="text-[#555555] mb-4">{feature.description}</p>
                  <p className="text-sm text-[#555555] leading-relaxed">{feature.details}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
