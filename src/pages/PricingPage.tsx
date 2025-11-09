import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Pricing } from "../components/Pricing";
import { Check, X } from "lucide-react";
import { Card } from "../components/ui/card";

const faqs = [
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes! You can cancel your subscription at any time from your account settings. There are no cancellation fees or penalties."
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 30-day money-back guarantee. If you're not satisfied within the first 30 days, contact support for a full refund."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for Enterprise plans."
  },
  {
    question: "Can I change plans later?",
    answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll pro-rate the difference."
  },
  {
    question: "Is there a free trial?",
    answer: "Our Free plan gives you full access to basic features with no time limit. Upgrade to Pro or Enterprise anytime to unlock advanced features."
  },
  {
    question: "What's included in Enterprise?",
    answer: "Enterprise includes API access, dedicated support, custom integrations, white-label options, and priority processing. Contact sales for a custom quote."
  }
];

const comparisonFeatures = [
  { name: "AI Content Generation", free: "10/month", pro: "Unlimited", enterprise: "Unlimited" },
  { name: "Keyword Research", free: true, pro: true, enterprise: true },
  { name: "SEO Optimization", free: "Basic", pro: "Advanced", enterprise: "Advanced" },
  { name: "Content Templates", free: "5", pro: "50+", enterprise: "Custom" },
  { name: "Team Members", free: "1", pro: "5", enterprise: "Unlimited" },
  { name: "Export Formats", free: "TXT", pro: "TXT, MD, PDF", enterprise: "All formats" },
  { name: "Analytics Dashboard", free: false, pro: true, enterprise: true },
  { name: "API Access", free: false, pro: false, enterprise: true },
  { name: "Priority Support", free: false, pro: true, enterprise: true },
  { name: "Custom Integrations", free: false, pro: false, enterprise: true },
];

export function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <div className="mx-auto max-w-[1200px] px-[120px]">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="mb-6 text-[#222222]">
              Simple, transparent pricing
            </h1>
            <p className="text-[#555555] text-xl">
              Choose the perfect plan for your content creation needs. All plans include a 30-day money-back guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <Pricing />

      {/* Comparison Table */}
      <section className="bg-slate-50" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
        <div className="mx-auto max-w-[1200px] px-[120px]">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-[#222222]">Compare all features</h2>
            <p className="text-[#555555]">See what's included in each plan</p>
          </div>

          <Card className="rounded-xl overflow-hidden border border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="text-left p-4 text-[#222222]">Feature</th>
                    <th className="text-center p-4 text-[#222222]">Free</th>
                    <th className="text-center p-4 text-[#222222]">Pro</th>
                    <th className="text-center p-4 text-[#222222]">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={index} className="border-t border-slate-200">
                      <td className="p-4 text-[#222222]">{feature.name}</td>
                      <td className="p-4 text-center text-[#555555]">
                        {typeof feature.free === 'boolean' ? (
                          feature.free ? <Check className="h-5 w-5 text-green-600 mx-auto" /> : <X className="h-5 w-5 text-slate-300 mx-auto" />
                        ) : feature.free}
                      </td>
                      <td className="p-4 text-center text-[#555555]">
                        {typeof feature.pro === 'boolean' ? (
                          feature.pro ? <Check className="h-5 w-5 text-green-600 mx-auto" /> : <X className="h-5 w-5 text-slate-300 mx-auto" />
                        ) : feature.pro}
                      </td>
                      <td className="p-4 text-center text-[#555555]">
                        {typeof feature.enterprise === 'boolean' ? (
                          feature.enterprise ? <Check className="h-5 w-5 text-green-600 mx-auto" /> : <X className="h-5 w-5 text-slate-300 mx-auto" />
                        ) : feature.enterprise}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ paddingTop: '120px', paddingBottom: '100px' }}>
        <div className="mx-auto max-w-[800px] px-[120px]">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-[#222222]">Frequently asked questions</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 rounded-xl border border-slate-200">
                <h3 className="mb-3 text-[#222222]">{faq.question}</h3>
                <p className="text-[#555555]">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
