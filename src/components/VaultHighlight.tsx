import { DollarSign, Sparkles, Globe, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const VaultHighlight = () => {
  const benefits = [
    {
      icon: Sparkles,
      title: "Irresistible Hook",
      description: "Start small, win big – amplified by guilds"
    },
    {
      icon: Shield,
      title: "Powerful Impact",
      description: "Access 5–12% APY + puzzle prizes"
    },
    {
      icon: Globe,
      title: "Future-Proof",
      description: "Multi-chain expansion coming soon"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-cyber-darker to-cyber-dark" />
      
      {/* Subtle background accent */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <div className="text-[20rem] font-orbitron font-black text-primary">
          $10
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Giant $10 */}
          <div className="relative animate-slide-in-up">
            <div className="inline-flex items-baseline gap-4 mb-6">
              <DollarSign className="h-16 w-16 md:h-24 md:w-24 text-primary" />
              <span className="text-8xl md:text-9xl font-orbitron font-black gradient-text">
                10
              </span>
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-4 animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-primary">
              Unlocks Everything
            </h2>
          </div>

          {/* Main copy */}
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            <p>
              Forget whale-dominated farms. For just <span className="text-3xl font-orbitron font-bold text-primary">$10 in USDC</span>, 
              enter vaults earning real yields.
            </p>
            
            <p>
              Solve creative puzzles (riddles, videos, poems) to claim your share – 
              <span className="text-secondary font-bold"> no luck, pure skill and strategy</span>. 
              Low barrier, high rewards – your pocket change becomes a powerhouse.
            </p>
          </div>

          {/* Benefits cards */}
          <div className="grid md:grid-cols-3 gap-6 pt-8">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="glass-panel p-8 rounded-xl border border-transparent hover:border-primary transition-all duration-300 group animate-slide-in-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <benefit.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-orbitron font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-12 animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
            <Button variant="neon" size="xl" className="group text-xl px-16 py-8">
              <DollarSign className="mr-2 h-6 w-6 group-hover:rotate-12 transition-transform" />
              Deposit $10 Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VaultHighlight;
