import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Card } from "../components/ui/card";
import { Sparkles, Download, Copy, RefreshCw } from "lucide-react";
import { toast } from "sonner";

export function DemoPage() {
  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState("professional");
  const [length, setLength] = useState("medium");
  const [generatedContent, setGeneratedContent] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!topic.trim()) {
      toast.error("Please enter a topic first");
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      const sampleContent = `# ${topic}\n\nIn today's digital landscape, ${topic.toLowerCase()} has become increasingly important for businesses and individuals alike. This comprehensive guide will explore the key aspects and best practices.\n\n## Why ${topic} Matters\n\nUnderstanding ${topic.toLowerCase()} is crucial for success in the modern market. Here are the main reasons:\n\n1. **Innovation**: Staying ahead of trends and competitors\n2. **Efficiency**: Streamlining processes and workflows  \n3. **Growth**: Scaling operations effectively\n\n## Key Strategies\n\nImplementing effective ${topic.toLowerCase()} strategies requires careful planning and execution. Consider these proven approaches:\n\n- Focus on user experience and engagement\n- Leverage data-driven insights\n- Maintain consistency across all channels\n- Continuously test and optimize\n\n## Best Practices\n\nTo maximize results with ${topic.toLowerCase()}, follow these industry-proven best practices:\n\n**Quality Over Quantity**: Always prioritize high-quality content and interactions over volume. Your audience will appreciate the attention to detail.\n\n**Stay Authentic**: Build trust by being genuine and transparent in your approach.\n\n**Measure and Adapt**: Use analytics to track performance and adjust your strategy accordingly.\n\n## Conclusion\n\nMastering ${topic.toLowerCase()} is a journey, not a destination. By implementing these strategies and staying committed to continuous improvement, you'll be well-positioned for long-term success.`;
      
      setGeneratedContent(sampleContent);
      setIsGenerating(false);
      toast.success("Content generated successfully!");
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent);
    toast.success("Copied to clipboard!");
  };

  const handleDownload = () => {
    const blob = new Blob([generatedContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${topic.replace(/\s+/g, '-').toLowerCase()}.txt`;
    a.click();
    toast.success("Downloaded successfully!");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section style={{ paddingTop: '120px', paddingBottom: '100px' }}>
        <div className="mx-auto max-w-[1200px] px-[120px]">
          <div className="text-center mb-12">
            <h1 className="mb-4 text-[#222222]">Try Abun AI Writer</h1>
            <p className="text-[#555555] text-xl">
              Experience the power of AI content generation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Panel */}
            <Card className="p-8 rounded-xl border border-slate-200">
              <h3 className="mb-6 text-[#222222]">Content Settings</h3>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="topic" className="text-[#222222] mb-2 block">
                    What do you want to write about?
                  </Label>
                  <Textarea
                    id="topic"
                    placeholder="e.g., Best practices for email marketing in 2025"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="min-h-[100px] rounded-[10px] border-slate-300"
                  />
                </div>

                <div>
                  <Label htmlFor="tone" className="text-[#222222] mb-2 block">
                    Tone of Voice
                  </Label>
                  <Select value={tone} onValueChange={setTone}>
                    <SelectTrigger className="h-12 rounded-[10px] border-slate-300">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="casual">Casual</SelectItem>
                      <SelectItem value="persuasive">Persuasive</SelectItem>
                      <SelectItem value="friendly">Friendly</SelectItem>
                      <SelectItem value="formal">Formal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="length" className="text-[#222222] mb-2 block">
                    Content Length
                  </Label>
                  <Select value={length} onValueChange={setLength}>
                    <SelectTrigger className="h-12 rounded-[10px] border-slate-300">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="short">Short (300 words)</SelectItem>
                      <SelectItem value="medium">Medium (600 words)</SelectItem>
                      <SelectItem value="long">Long (1000+ words)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="w-full h-12 rounded-[10px]"
                  style={{ fontWeight: 600 }}
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Generate Content
                    </>
                  )}
                </Button>
              </div>
            </Card>

            {/* Output Panel */}
            <Card className="p-8 rounded-xl border border-slate-200 bg-slate-50">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[#222222]">Generated Content</h3>
                {generatedContent && (
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleCopy}
                      className="rounded-[10px]"
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleDownload}
                      className="rounded-[10px]"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                )}
              </div>

              {generatedContent ? (
                <div className="bg-white rounded-lg p-6 min-h-[400px] max-h-[600px] overflow-y-auto">
                  <pre className="whitespace-pre-wrap text-sm text-[#222222] leading-relaxed">
                    {generatedContent}
                  </pre>
                </div>
              ) : (
                <div className="bg-white rounded-lg p-6 min-h-[400px] flex items-center justify-center">
                  <div className="text-center text-[#555555]">
                    <Sparkles className="h-12 w-12 mx-auto mb-4 text-primary/30" />
                    <p>Your AI-generated content will appear here</p>
                  </div>
                </div>
              )}
            </Card>
          </div>

          {/* Features callout */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-slate-50 rounded-xl">
              <div className="text-2xl mb-2">⚡</div>
              <h4 className="mb-2 text-[#222222]">Lightning Fast</h4>
              <p className="text-sm text-[#555555]">Generate content in under 5 seconds</p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-xl">
              <div className="text-2xl mb-2">🎯</div>
              <h4 className="mb-2 text-[#222222]">SEO Optimized</h4>
              <p className="text-sm text-[#555555]">Built-in keyword optimization</p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-xl">
              <div className="text-2xl mb-2">✨</div>
              <h4 className="mb-2 text-[#222222]">100% Original</h4>
              <p className="text-sm text-[#555555]">Plagiarism-free guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
