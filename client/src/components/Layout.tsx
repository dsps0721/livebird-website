import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Bird } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#solutions", label: "Solutions" },
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#about", label: "About" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background selection:bg-primary/20 selection:text-primary-foreground">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] bg-purple-500/20 rounded-full blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[20%] w-[35%] h-[35%] bg-blue-400/20 rounded-full blur-[120px] animate-blob animation-delay-4000" />
      </div>

      {/* Navbar */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          scrolled
            ? "bg-white/70 dark:bg-black/70 backdrop-blur-md border-white/20 shadow-sm py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-emerald-400 text-white shadow-lg group-hover:shadow-primary/40 transition-all duration-300">
                <Bird className="w-6 h-6" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-foreground">
                LiveBird
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary cursor-pointer relative py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 bg-gradient-to-r from-primary to-emerald-500 hover:scale-105"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] glass-panel">
              <div className="flex flex-col gap-8 mt-10">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a 
                      key={link.href} 
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="text-lg font-medium text-foreground transition-colors hover:text-primary cursor-pointer block py-2 border-b border-border/50"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
                <div className="flex flex-col gap-4 mt-4">
                  <Button 
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full justify-center bg-primary text-primary-foreground"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24 pb-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white/40 dark:bg-black/40 backdrop-blur-lg border-t border-white/20 pt-16 pb-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white">
                  <Bird className="w-5 h-5" />
                </div>
                <span className="font-heading font-bold text-lg">LiveBird</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Empowering streamers and brands with AI-driven automation for a seamless live streaming experience.
              </p>
              <div className="flex gap-4">
                {/* Social Icons Placeholder */}
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer">
                    <div className="w-4 h-4 bg-current rounded-sm opacity-50" />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" onClick={(e) => scrollToSection(e, "#features")} className="hover:text-primary cursor-pointer transition-colors">Features</a></li>
                <li><a href="#solutions" onClick={(e) => scrollToSection(e, "#solutions")} className="hover:text-primary cursor-pointer transition-colors">Solutions</a></li>
                <li><a href="#pricing" onClick={(e) => scrollToSection(e, "#pricing")} className="hover:text-primary cursor-pointer transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" onClick={(e) => scrollToSection(e, "#about")} className="hover:text-primary cursor-pointer transition-colors">About Us</a></li>
                <li><a href="mailto:contact@livebird.ai" className="hover:text-primary cursor-pointer transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Terms of Service</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © 2026 LiveBird. All rights reserved. Backed by Natural Robotics.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              All Systems Operational
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
