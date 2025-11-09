import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useRouter } from "./Router";
import { useState } from "react";

export function Header() {
  const { navigate, currentPage } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-[120px]">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-12">
            <button 
              onClick={() => navigate('home')}
              className="text-2xl text-primary cursor-pointer hover:opacity-80 transition-opacity" 
              style={{ fontWeight: 700 }}
            >
              Abun
            </button>
            <nav className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => navigate('features')}
                className={`text-sm transition-colors ${
                  currentPage === 'features' ? 'text-primary' : 'text-[#555555] hover:text-primary'
                }`}
              >
                Features
              </button>
              <button 
                onClick={() => navigate('demo')}
                className={`text-sm transition-colors ${
                  currentPage === 'demo' ? 'text-primary' : 'text-[#555555] hover:text-primary'
                }`}
              >
                Demo
              </button>
              <button 
                onClick={() => navigate('pricing')}
                className={`text-sm transition-colors ${
                  currentPage === 'pricing' ? 'text-primary' : 'text-[#555555] hover:text-primary'
                }`}
              >
                Pricing
              </button>
              <button 
                onClick={() => navigate('about')}
                className={`text-sm transition-colors ${
                  currentPage === 'about' ? 'text-primary' : 'text-[#555555] hover:text-primary'
                }`}
              >
                About
              </button>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              className="hidden sm:inline-flex text-[#555555]"
              onClick={() => navigate('signin')}
            >
              Sign in
            </Button>
            <Button 
              className="hidden sm:inline-flex rounded-[10px] h-12 px-6" 
              style={{ fontWeight: 600 }}
              onClick={() => navigate('signup')}
            >
              Get started
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col gap-4">
              <button 
                onClick={() => {
                  navigate('features');
                  setMobileMenuOpen(false);
                }}
                className="text-sm text-[#555555] hover:text-primary text-left"
              >
                Features
              </button>
              <button 
                onClick={() => {
                  navigate('demo');
                  setMobileMenuOpen(false);
                }}
                className="text-sm text-[#555555] hover:text-primary text-left"
              >
                Demo
              </button>
              <button 
                onClick={() => {
                  navigate('pricing');
                  setMobileMenuOpen(false);
                }}
                className="text-sm text-[#555555] hover:text-primary text-left"
              >
                Pricing
              </button>
              <button 
                onClick={() => {
                  navigate('about');
                  setMobileMenuOpen(false);
                }}
                className="text-sm text-[#555555] hover:text-primary text-left"
              >
                About
              </button>
              <Button 
                variant="ghost"
                onClick={() => {
                  navigate('signin');
                  setMobileMenuOpen(false);
                }}
                className="justify-start"
              >
                Sign in
              </Button>
              <Button 
                onClick={() => {
                  navigate('signup');
                  setMobileMenuOpen(false);
                }}
                className="rounded-[10px]"
              >
                Get started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
