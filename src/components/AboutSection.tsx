import { Shield, Puzzle, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "No-Loss Model",
      description: "Risk only yields, keep your principal safe",
      color: "neon-text-blue"
    },
    {
      icon: Puzzle,
      title: "Gamified & Social",
      description: "Puzzles replace luck; solve to win",
      color: "neon-text-purple"
    },
    {
      icon: Users,
      title: "Guild Power",
      description: "Form teams for collaborative wins",
      color: "neon-text-pink"
    },
    {
      icon: TrendingUp,
      title: "5-12% APY",
      description: "Blue-chip DeFi yield generation",
      color: "neon-text-blue"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark to-cyber-darker" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div className="space-y-8 animate-slide-in-up">
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text">
                What is CipherStakes?
              </h2>
              
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  CipherStakes pools your <span className="neon-text-blue font-semibold">$1 stablecoin deposits</span> into high-yield vaults on Solana. 
                  Earn 5–12% APY via blue-chip DeFi protocols like Aave, Maker, and Ondo.
                </p>
                
                <p>
                  Yields fund puzzle-secured wallets – solve riddles, images, and challenges to claim tiered prizes up to <span className="neon-text-pink font-bold">$5,000+</span>. 
                  Form guilds for collaborative wins and forge real bonds.
                </p>
                
                <p>
                  Vault 10? That's our community treasury for DAO-voted impact. <span className="neon-text-purple font-semibold">Principal always safe</span> – withdraw anytime.
                </p>
              </div>

              {/* Feature bullets */}
              <div className="grid sm:grid-cols-2 gap-4 pt-6">
                {features.map((feature, index) => (
                  <div 
                    key={feature.title}
                    className="glass-panel p-4 rounded-lg hover:neon-border-blue transition-all duration-300 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <feature.icon className={`h-8 w-8 ${feature.color} mb-2 group-hover:animate-pulse-glow`} />
                    <h3 className="font-orbitron font-bold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>

              <Button variant="neonPurple" size="lg">
                Explore How It Works
              </Button>
            </div>

            {/* Right: Infographic */}
            <div className="relative animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="glass-panel p-8 rounded-2xl space-y-6">
                <h3 className="text-2xl font-orbitron font-bold neon-text-blue text-center mb-8">The Flow</h3>
                
                <div className="space-y-6">
                  {[
                    { step: "01", title: "Deposit", desc: "Pool stablecoins into vaults" },
                    { step: "02", title: "Yield Staking", desc: "Earn 5-12% APY automatically" },
                    { step: "03", title: "Puzzle Wallets", desc: "Solve challenges to claim prizes" },
                    { step: "04", title: "Claim Rewards", desc: "Withdraw principal + prizes anytime" }
                  ].map((item, index) => (
                    <div key={item.step} className="flex items-start gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full neon-border-blue flex items-center justify-center font-orbitron font-bold neon-text-blue group-hover:animate-pulse-glow">
                        {item.step}
                      </div>
                      <div className="flex-1 pt-2">
                        <h4 className="font-orbitron font-bold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                      {index < 3 && (
                        <div className="absolute left-6 mt-12 w-0.5 h-6 bg-primary/30" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
