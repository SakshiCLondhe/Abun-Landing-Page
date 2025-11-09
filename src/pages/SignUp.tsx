import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card } from "../components/ui/card";
import { useRouter } from "../components/Router";
import { Mail, Lock, User, ArrowLeft } from "lucide-react";

export function SignUp() {
  const { navigate } = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sign up
    navigate('demo');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <button
          onClick={() => navigate('home')}
          className="flex items-center gap-2 text-[#555555] hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </button>

        <Card className="p-8 rounded-xl border border-slate-200">
          <div className="text-center mb-8">
            <h1 className="mb-2 text-[#222222]">Get started free</h1>
            <p className="text-[#555555]">Create your Abun account today</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[#222222]">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#555555]" />
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="pl-10 h-12 rounded-[10px] border-slate-300"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#222222]">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#555555]" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="pl-10 h-12 rounded-[10px] border-slate-300"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#222222]">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#555555]" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="pl-10 h-12 rounded-[10px] border-slate-300"
                  required
                />
              </div>
              <p className="text-xs text-[#555555]">Must be at least 8 characters</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-[#222222]">Confirm Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#555555]" />
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="••••••••"
                  className="pl-10 h-12 rounded-[10px] border-slate-300"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 rounded-[10px]"
              style={{ fontWeight: 600 }}
            >
              Create Account
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-[#555555]">
              Already have an account?{' '}
              <button
                onClick={() => navigate('signin')}
                className="text-primary hover:underline font-medium"
              >
                Sign in
              </button>
            </p>
          </div>

          <p className="mt-6 text-xs text-center text-[#555555]">
            By signing up, you agree to our{' '}
            <a href="#" className="text-primary hover:underline">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="text-primary hover:underline">Privacy Policy</a>
          </p>
        </Card>
      </div>
    </div>
  );
}
