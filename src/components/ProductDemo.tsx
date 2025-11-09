import { Sparkles, Sliders, Search } from "lucide-react";

export function ProductDemo() {
  return (
    <section 
      className="relative overflow-hidden" 
      style={{ 
        paddingTop: '120px', 
        paddingBottom: '100px',
        background: 'linear-gradient(180deg, #FAFBFF 0%, #FFFFFF 100%)'
      }}
    >
      <div className="mx-auto max-w-[1200px] px-[120px]">
        <div className="text-center mb-16">
          <h2 className="text-[#222222]">See Abun in action.</h2>
        </div>

        <div className="relative">
          {/* Product Screenshot Mock */}
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-8">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-200">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <div className="ml-4 flex-1 bg-slate-100 rounded px-3 py-1 text-xs text-slate-500">
                abun.com/editor
              </div>
            </div>

            {/* Main UI Grid */}
            <div className="grid grid-cols-12 gap-6">
              {/* Left sidebar - Keyword insights */}
              <div className="col-span-3 space-y-4">
                <div className="bg-[#F6F7FB] rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Search className="w-4 h-4 text-accent" />
                    <span className="text-sm text-[#222222]">Keywords</span>
                  </div>
                  <div className="space-y-2">
                    {['AI writing', 'SEO tools', 'content marketing', 'blog posts'].map((kw, i) => (
                      <div key={i} className="flex items-center justify-between text-xs">
                        <span className="text-[#555555]">{kw}</span>
                        <span className="text-accent">✓</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Center - Main editor */}
              <div className="col-span-6 space-y-4">
                <div className="bg-slate-50 rounded-lg p-6 min-h-[300px]">
                  <div className="space-y-3">
                    <div className="h-3 bg-slate-200 rounded w-3/4"></div>
                    <div className="h-3 bg-slate-200 rounded w-full"></div>
                    <div className="h-3 bg-slate-200 rounded w-5/6"></div>
                    <div className="h-3 bg-gradient-to-r from-primary to-accent rounded w-2/3 animate-pulse"></div>
                    <div className="h-3 bg-slate-200 rounded w-4/5"></div>
                    <div className="h-3 bg-slate-200 rounded w-full"></div>
                    <div className="h-3 bg-slate-200 rounded w-3/4"></div>
                  </div>
                </div>
              </div>

              {/* Right sidebar - Tone selector */}
              <div className="col-span-3 space-y-4">
                <div className="bg-[#F6F7FB] rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Sliders className="w-4 h-4 text-primary" />
                    <span className="text-sm text-[#222222]">Tone</span>
                  </div>
                  <div className="space-y-2">
                    {['Professional', 'Casual', 'Persuasive', 'Friendly'].map((tone, i) => (
                      <button
                        key={i}
                        className={`w-full text-left px-3 py-2 rounded text-xs transition-colors ${
                          i === 0 
                            ? 'bg-primary text-white' 
                            : 'bg-white text-[#555555] hover:bg-slate-100'
                        }`}
                      >
                        {tone}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Callout 1 - AI suggestions */}
          <div className="absolute top-1/4 -left-20 hidden xl:block">
            <div className="bg-white rounded-lg shadow-lg px-4 py-2 border border-primary/20 relative">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-[#222222]">AI suggestions</span>
              </div>
              <div className="absolute top-1/2 -right-12 w-12 h-0.5 bg-primary/30"></div>
            </div>
          </div>

          {/* Callout 2 - Tone selector */}
          <div className="absolute top-1/3 -right-20 hidden xl:block">
            <div className="bg-white rounded-lg shadow-lg px-4 py-2 border border-accent/20 relative">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-accent" />
                <span className="text-sm text-[#222222]">Tone selector</span>
              </div>
              <div className="absolute top-1/2 -left-12 w-12 h-0.5 bg-accent/30"></div>
            </div>
          </div>

          {/* Callout 3 - Keyword insights */}
          <div className="absolute bottom-1/4 -left-24 hidden xl:block">
            <div className="bg-white rounded-lg shadow-lg px-4 py-2 border border-accent/20 relative">
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-accent" />
                <span className="text-sm text-[#222222]">Keyword insights</span>
              </div>
              <div className="absolute top-1/2 -right-16 w-16 h-0.5 bg-accent/30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
