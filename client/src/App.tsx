import { useMemo, useState } from "react";
import { Route, Switch, useLocation } from "wouter";
import { Toaster, toast } from "sonner";
import { Search, ShoppingBag, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRODUCTS, PROVIDERS, type Product, type ProviderId } from "@shared/catalog";
import Home from "@/pages/Home";
import Catalog from "@/pages/Catalog";
import ProductPage from "@/pages/Product";
import CartPage from "@/pages/Cart";
import Experiments from "@/pages/Experiments";
import NotFound from "@/pages/NotFound";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "@/components/ErrorBoundary";

export type CartLine = { product: Product; quantity: number };

function AppHeader({ provider, setProvider, cartCount }: { provider: ProviderId; setProvider: (id: ProviderId) => void; cartCount: number }) {
  const [, navigate] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-[#e8e1d8]/90 bg-[#f8f6f1]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 lg:px-10">
        <button className="group flex items-center gap-3" onClick={() => navigate("/")} aria-label="Go to home">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#d6533f] text-white shadow-[0_8px_20px_rgba(214,83,63,.22)] transition-transform duration-200 group-hover:-rotate-3">
            <Sparkles size={19} strokeWidth={2.3} />
          </span>
          <span className="text-left">
            <span className="block font-display text-xl leading-none tracking-[-0.04em] text-[#25211e]">Common Room</span>
            <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9b8c80]">ABO commerce lab</span>
          </span>
        </button>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#6f655c] md:flex">
          <button className="transition-colors hover:text-[#d6533f]" onClick={() => navigate("/catalog")}>Shop all</button>
          <button className="transition-colors hover:text-[#d6533f]" onClick={() => navigate("/catalog?category=Sofas")}>Living room</button>
          <button className="transition-colors hover:text-[#d6533f]" onClick={() => navigate("/catalog?category=Chairs")}>Seating</button>
          <button className="transition-colors hover:text-[#d6533f]" onClick={() => navigate("/experiments")}>Lab notes</button>
        </nav>

        <div className="flex items-center gap-2">
          <div className="relative hidden lg:block">
            <label className="sr-only" htmlFor="provider-select">Active search provider</label>
            <select id="provider-select" value={provider} onChange={(event) => setProvider(event.target.value as ProviderId)} className="h-10 appearance-none rounded-full border border-[#e3dcd2] bg-white px-4 pr-9 text-xs font-semibold text-[#6f655c] outline-none transition hover:border-[#d6533f] focus:ring-2 focus:ring-[#d6533f]/20">
              {PROVIDERS.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-[#9b8c80]">⌄</span>
          </div>
          <button className="hidden h-10 w-10 items-center justify-center rounded-full text-[#6f655c] transition hover:bg-white hover:text-[#d6533f] sm:flex" onClick={() => navigate("/catalog")} aria-label="Search"><Search size={18} /></button>
          <button className="relative flex h-10 w-10 items-center justify-center rounded-full text-[#6f655c] transition hover:bg-white hover:text-[#d6533f]" onClick={() => navigate("/cart")} aria-label="Open cart"><ShoppingBag size={18} />{cartCount > 0 && <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#d6533f] px-1 text-[10px] font-bold text-white">{cartCount}</span>}</button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-transparent text-[#6f655c] transition hover:border-[#e3dcd2] hover:bg-white hover:text-[#d6533f] md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle menu"><span className="text-lg">☰</span></button>
        </div>
      </div>
      {menuOpen && <div className="border-t border-[#e8e1d8] bg-[#f8f6f1] px-5 py-4 md:hidden"><div className="flex flex-col gap-3 text-sm font-semibold text-[#6f655c]"><button className="text-left" onClick={() => { navigate("/catalog"); setMenuOpen(false); }}>Shop all</button><button className="text-left" onClick={() => { navigate("/catalog?category=Sofas"); setMenuOpen(false); }}>Living room</button><button className="text-left" onClick={() => { navigate("/experiments"); setMenuOpen(false); }}>Lab notes</button></div></div>}
    </header>
  );
}

function App() {
  const [provider, setProvider] = useState<ProviderId>("unified_multimodal");
  const [cart, setCart] = useState<CartLine[]>([]);
  const cartCount = useMemo(() => cart.reduce((sum, line) => sum + line.quantity, 0), [cart]);

  const addToCart = (product: Product) => {
    setCart((current) => {
      const existing = current.find((line) => line.product.id === product.id);
      if (existing) return current.map((line) => line.product.id === product.id ? { ...line, quantity: line.quantity + 1 } : line);
      return [...current, { product, quantity: 1 }];
    });
    toast.success("Added to your room plan", { description: product.title });
  };

  const updateQuantity = (id: string, quantity: number) => setCart((current) => quantity <= 0 ? current.filter((line) => line.product.id !== id) : current.map((line) => line.product.id === id ? { ...line, quantity } : line));

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster position="bottom-right" toastOptions={{ style: { borderRadius: "16px", border: "1px solid #e8e1d8", background: "#fffdf9", color: "#25211e" } }} />
          <AppHeader provider={provider} setProvider={setProvider} cartCount={cartCount} />
          <Switch>
            <Route path="/"><Home provider={provider} onAddToCart={addToCart} /></Route>
            <Route path="/catalog"><Catalog provider={provider} onAddToCart={addToCart} /></Route>
            <Route path="/product/:id"><ProductPage onAddToCart={addToCart} /></Route>
            <Route path="/cart"><CartPage cart={cart} updateQuantity={updateQuantity} /></Route>
            <Route path="/experiments"><Experiments provider={provider} setProvider={setProvider} /></Route>
            <Route component={NotFound} />
          </Switch>
          <footer className="border-t border-[#e8e1d8] bg-[#25211e] px-5 py-12 text-[#e8e1d8] lg:px-10"><div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-8 md:flex-row"><div><p className="font-display text-2xl tracking-[-0.04em]">Common Room</p><p className="mt-2 max-w-sm text-sm leading-6 text-[#b9aaa0]">A controlled commerce testbed for multimodal product discovery. Powered by an ABO fixture catalog.</p></div><div className="text-sm text-[#b9aaa0]"><p className="font-semibold text-[#f8f6f1]">Dataset note</p><p className="mt-2 max-w-xs leading-6">Amazon Berkeley Objects · CC BY 4.0 · abo-furniture-fixture-v0.1</p></div></div></footer>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
