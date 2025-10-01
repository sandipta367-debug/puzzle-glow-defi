import { Button } from "@/components/ui/button";
import { Wallet, Menu } from "lucide-react";
import { useState } from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { motion, useScroll, useTransform } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const navHeight = useTransform(scrollY, [0, 100], [80, 64]);
  const navPadding = useTransform(scrollY, [0, 100], [16, 8]);

  return (
    <motion.nav 
      style={{ height: navHeight, paddingTop: navPadding, paddingBottom: navPadding }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/20 transition-all duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg neon-border-blue flex items-center justify-center animate-pulse-glow">
              <span className="text-xl font-bold font-orbitron gradient-text">C</span>
            </div>
            <span className="text-xl font-orbitron font-bold gradient-text">CipherStakes</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:neon-text-blue transition-colors">
              About
            </a>
            <a href="#how" className="text-sm font-medium text-muted-foreground hover:neon-text-blue transition-colors">
              How It Works
            </a>
            <a href="#hackathon" className="text-sm font-medium text-muted-foreground hover:neon-text-blue transition-colors">
              Hackathon
            </a>
          </div>

          {/* Wallet connect with Hover Border Gradient */}
          <div className="flex items-center gap-3">
            <HoverBorderGradient
              as="button"
              containerClassName="hidden sm:block"
              className="px-4 py-2 flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <Wallet className="h-4 w-4" />
              Connect Wallet
            </HoverBorderGradient>
            
            {/* Mobile menu toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border/20 animate-slide-in-up">
            <a href="#about" className="block text-sm font-medium text-muted-foreground hover:neon-text-blue transition-colors py-2">
              About
            </a>
            <a href="#how" className="block text-sm font-medium text-muted-foreground hover:neon-text-blue transition-colors py-2">
              How It Works
            </a>
            <a href="#hackathon" className="block text-sm font-medium text-muted-foreground hover:neon-text-blue transition-colors py-2">
              Hackathon
            </a>
            <Button variant="neonOutline" size="sm" className="w-full">
              <Wallet className="mr-2 h-4 w-4" />
              Connect Wallet
            </Button>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
