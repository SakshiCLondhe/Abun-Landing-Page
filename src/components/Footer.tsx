import { Linkedin, Github, Mail } from "lucide-react";
import { useRouter } from "./Router";

export function Footer() {
  const { navigate } = useRouter();

  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-[120px]">
        {/* Links row */}
        <div className="flex justify-center items-center gap-8 mb-6 flex-wrap">
          <button
            onClick={() => navigate('about')}
            className="text-sm text-[#555555] hover:text-primary transition-colors"
          >
            About
          </button>
          <button
            onClick={() => navigate('features')}
            className="text-sm text-[#555555] hover:text-primary transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => navigate('pricing')}
            className="text-sm text-[#555555] hover:text-primary transition-colors"
          >
            Pricing
          </button>
          <button
            onClick={() => navigate('demo')}
            className="text-sm text-[#555555] hover:text-primary transition-colors"
          >
            Contact
          </button>
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="text-[#555555] hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" className="text-[#555555] hover:text-primary transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" className="text-[#555555] hover:text-primary transition-colors">
            <Mail className="h-5 w-5" />
          </a>
        </div>

        {/* Copyright and credits */}
        <div className="text-center space-y-2">
          <p className="text-sm text-[#555555]">
            © 2025 Abun AI Writer · All rights reserved.
          </p>
          <p className="text-xs text-slate-400">
            Designed by Sakshi Londhe (UI Test · Draftss)
          </p>
        </div>
      </div>
    </footer>
  );
}
