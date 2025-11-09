import { Card } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";

const testimonials = [
  {
    quote: "Abun reduced our content time by 70%. The AI understands exactly what we need for SEO.",
    author: "Priya S.",
    role: "Marketing Lead",
    initials: "PS",
  },
  {
    quote: "The keyword discovery feature is a game-changer. We've doubled our organic traffic in 3 months.",
    author: "Marcus T.",
    role: "Content Director",
    initials: "MT",
  },
  {
    quote: "Best content tool for marketers. Simple, powerful, and gets results. Our team loves it.",
    author: "Sarah K.",
    role: "Growth Manager",
    initials: "SK",
  },
];

export function Testimonials() {
  return (
    <section className="bg-[#F6F7FB]" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
      <div className="mx-auto max-w-[1200px] px-[120px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 text-[#222222]">
            Loved by marketers and creators worldwide.
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-8 border border-slate-200 bg-white rounded-xl"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
            >
              <div className="mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="inline h-5 w-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="mb-6 text-[#555555]">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary">{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-[#222222]">{testimonial.author}</div>
                  <div className="text-sm text-[#555555]">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
