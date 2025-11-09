import { Button } from "./ui/button";
import { Sparkles, FileText, Search } from "lucide-react";
import { useRouter } from "./Router";

export function Hero() {
  const { navigate } = useRouter();

  return (
    <section className="relative overflow-hidden bg-white" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="mx-auto max-w-[1200px] px-6 lg:px-[120px]">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left column - Text content (60%) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="mb-6 text-[#222222]">
              Create high-value content in seconds with AI.
            </h1>
            <p className="mb-8 text-[#555555] max-w-xl">
              Abun helps you write SEO-optimized, engaging content—instantly. Generate content samples, discover keywords, and publish faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button 
                size="lg" 
                className="h-12 px-6 rounded-[10px]"
                style={{ fontWeight: 600 }}
                onClick={() => navigate('signup')}
              >
                Start Writing — It's Free
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-12 px-6 rounded-[10px] border-2"
                style={{ fontWeight: 600 }}
                onClick={() => navigate('demo')}
              >
                See Content Samples
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#555555]">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Trusted by marketers
              </span>
              <span className="text-slate-300">·</span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Fast setup
              </span>
              <span className="text-slate-300">·</span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Secure & affordable
              </span>
            </div>
          </div>

          {/* Right column - Visual (40%) */}
          <div className="lg:col-span-5 relative">
            {/* Product mockup */}
            <div className="relative bg-[#F6F7FB] rounded-2xl p-6" style={{ boxShadow: '0 6px 24px rgba(0,0,0,0.1)' }}>
              {/* Mock editor interface */}
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-300">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <span className="text-xs text-[#555555]">Abun Editor</span>
                </div>

                {/* Editor panel */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#555555]">
                    <FileText className="w-4 h-4 text-primary" />
                    <span>Content Editor</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 space-y-2">
                    <div className="h-2 bg-slate-200 rounded w-3/4"></div>
                    <div className="h-2 bg-slate-200 rounded w-full"></div>
                    <div className="h-2 bg-slate-200 rounded w-5/6"></div>
                    <div className="h-2 bg-gradient-to-r from-primary to-accent rounded w-2/3 animate-pulse"></div>
                  </div>
                </div>

                {/* Keyword suggestions */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-xs text-[#555555]">
                    <Search className="w-4 h-4 text-accent" />
                    <span>Keyword Suggestions</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">SEO content</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs">AI writing</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">marketing</span>
                  </div>
                </div>

                {/* Sample output box */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-xs text-[#555555]">
                    <Sparkles className="w-4 h-4 text-yellow-500" />
                    <span>AI-Generated Output</span>
                  </div>
                  <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-4 border border-primary/20">
                    <div className="space-y-2">
                      <div className="h-2 bg-slate-300 rounded w-full"></div>
                      <div className="h-2 bg-slate-300 rounded w-4/5"></div>
                      <div className="h-2 bg-slate-300 rounded w-11/12"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-xl shadow-lg flex items-center justify-center animate-bounce">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent rounded-xl shadow-lg flex items-center justify-center" style={{ animation: 'bounce 2s infinite 0.5s' }}>
              <FileText className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
