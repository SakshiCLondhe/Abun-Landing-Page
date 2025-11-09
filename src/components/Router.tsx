import { createContext, useContext, useState, ReactNode } from 'react';

type Page = 'home' | 'features' | 'demo' | 'pricing' | 'about' | 'signin' | 'signup' | 'get-started';

interface RouterContextType {
  currentPage: Page;
  navigate: (page: Page) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export function Router({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <RouterContext.Provider value={{ currentPage, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within Router');
  }
  return context;
}
