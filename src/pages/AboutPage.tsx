import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Card } from "../components/ui/card";
import { Target, Users, Zap, Heart } from "lucide-react";

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Co-Founder",
    bio: "Former Head of Content at TechCorp, passionate about democratizing content creation.",
    initials: "SJ"
  },
  {
    name: "Michael Chen",
    role: "CTO & Co-Founder",
    bio: "AI researcher with 10+ years of experience in natural language processing.",
    initials: "MC"
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Product",
    bio: "Product leader focused on building tools that empower creators worldwide.",
    initials: "ER"
  },
  {
    name: "David Park",
    role: "Head of Marketing",
    bio: "Growth expert helping businesses scale their content strategies.",
    initials: "DP"
  }
];

const values = [
  {
    icon: Target,
    title: "Quality First",
    description: "We never compromise on the quality of our AI-generated content. Every word matters."
  },
  {
    icon: Users,
    title: "User-Centric",
    description: "Our users guide every decision we make. We build for real creators with real needs."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We push the boundaries of what's possible with AI and content creation."
  },
  {
    icon: Heart,
    title: "Accessibility",
    description: "Great content tools should be accessible to everyone, not just enterprises."
  }
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <div className="mx-auto max-w-[1200px] px-[120px]">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="mb-6 text-[#222222]">
              We're on a mission to democratize content creation
            </h1>
            <p className="text-[#555555] text-xl">
              Abun was founded in 2023 with a simple belief: everyone should have access to powerful content creation tools, regardless of budget or technical expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section style={{ paddingTop: '120px', paddingBottom: '100px' }}>
        <div className="mx-auto max-w-[900px] px-[120px]">
          <h2 className="mb-8 text-[#222222] text-center">Our Story</h2>
          <div className="space-y-6 text-[#555555] leading-relaxed">
            <p>
              It started with a frustration we all shared. As marketers and content creators, we spent countless hours writing, rewriting, and optimizing content. We knew there had to be a better way.
            </p>
            <p>
              In early 2023, we brought together a team of AI researchers, content experts, and product builders to create Abun. Our goal was simple: build an AI writing tool that actually understands what good content looks like.
            </p>
            <p>
              Today, Abun serves over 50,000 content creators worldwide. From solo bloggers to enterprise marketing teams, we're helping people create better content faster than ever before.
            </p>
            <p>
              But we're just getting started. We're constantly improving our AI, adding new features, and listening to our community to build the content creation platform of the future.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-slate-50" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
        <div className="mx-auto max-w-[1200px] px-[120px]">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-[#222222]">Our Values</h2>
            <p className="text-[#555555]">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="p-8 rounded-xl border border-slate-200 bg-white text-center">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 mx-auto">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-3 text-[#222222]">{value.title}</h3>
                  <p className="text-[#555555]">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ paddingTop: '120px', paddingBottom: '100px' }}>
        <div className="mx-auto max-w-[1200px] px-[120px]">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-[#222222]">Meet the Team</h2>
            <p className="text-[#555555]">The people building the future of content creation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6 rounded-xl border border-slate-200 text-center">
                <div className="mb-4 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-primary text-xl" style={{ fontWeight: 600 }}>
                  {member.initials}
                </div>
                <h3 className="mb-1 text-[#222222]">{member.name}</h3>
                <p className="text-sm text-primary mb-3">{member.role}</p>
                <p className="text-sm text-[#555555]">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-white" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="mx-auto max-w-[1200px] px-[120px]">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-4xl mb-2" style={{ fontWeight: 700 }}>50K+</div>
              <div className="text-white/80">Active Users</div>
            </div>
            <div>
              <div className="text-4xl mb-2" style={{ fontWeight: 700 }}>500K+</div>
              <div className="text-white/80">Articles Generated</div>
            </div>
            <div>
              <div className="text-4xl mb-2" style={{ fontWeight: 700 }}>98%</div>
              <div className="text-white/80">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl mb-2" style={{ fontWeight: 700 }}>50+</div>
              <div className="text-white/80">Countries</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
