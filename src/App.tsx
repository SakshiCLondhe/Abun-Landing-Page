import { Router, useRouter } from "./components/Router";
import { Toaster } from "./components/ui/sonner";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { FeaturesPage } from "./pages/FeaturesPage";
import { DemoPage } from "./pages/DemoPage";
import { PricingPage } from "./pages/PricingPage";
import { AboutPage } from "./pages/AboutPage";

function AppContent() {
  const { currentPage } = useRouter();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'signin':
        return <SignIn />;
      case 'signup':
      case 'get-started':
        return <SignUp />;
      case 'features':
        return <FeaturesPage />;
      case 'demo':
        return <DemoPage />;
      case 'pricing':
        return <PricingPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      {renderPage()}
      <Toaster />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
