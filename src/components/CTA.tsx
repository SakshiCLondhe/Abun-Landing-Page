import { Button } from "./ui/button";
import { useRouter } from "./Router";

export function CTA() {
  const { navigate } = useRouter();

  return (
    <section 
      className="text-white" 
      style={{ 
        paddingTop: '120px', 
        paddingBottom: '100px',
        background: 'linear-gradient(135deg, #4B3FF0 0%, #6C63FF 100%)'
      }}
    >
      <div className="mx-auto max-w-[800px] px-6 lg:px-[120px] text-center">
        <h2 className="mb-6 text-white">
          Ready to write your next great post?
        </h2>
        <p className="mb-8 text-white/90 text-xl">
          Start creating high-quality content in minutes.
        </p>
        <Button 
          size="lg" 
          className="h-12 px-8 rounded-[10px] bg-white text-primary hover:bg-white/90"
          style={{ fontWeight: 600 }}
          onClick={() => navigate('signup')}
        >
          Start Writing — It's Free
        </Button>
      </div>
    </section>
  );
}
