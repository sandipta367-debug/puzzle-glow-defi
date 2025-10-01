import { Shield, Puzzle, Users, TrendingUp, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/ui/text-reveal";
import { Timeline } from "@/components/ui/timeline";

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

  const timelineData = [
    {
      title: "Deposit",
      content: (
        <div className="glass-panel p-6 rounded-lg">
          <Coins className="h-8 w-8 text-primary mb-4" />
          <p className="text-muted-foreground">
            Start with just $10 in USDC. Your stablecoins are pooled into secure, high-yield vaults on Solana.
          </p>
        </div>
      ),
    },
    {
      title: "Yield Staking",
      content: (
        <div className="glass-panel p-6 rounded-lg">
          <TrendingUp className="h-8 w-8 text-secondary mb-4" />
          <p className="text-muted-foreground">
            Earn 5-12% APY automatically through battle-tested DeFi protocols like Aave, Maker, and Ondo on Solana.
          </p>
        </div>
      ),
    },
    {
      title: "Puzzle Wallets",
      content: (
        <div className="glass-panel p-6 rounded-lg">
          <Shield className="h-8 w-8 text-accent mb-4" />
          <p className="text-muted-foreground">
            Generated yields fund puzzle-secured wallets with tiered prizes up to $5,000+. Solve to claim your rewards.
          </p>
        </div>
      ),
    },
    {
      title: "Claim Rewards",
      content: (
        <div className="glass-panel p-6 rounded-lg">
          <Users className="h-8 w-8 text-primary mb-4" />
          <p className="text-muted-foreground">
            Solve creative challenges solo or form guilds. Win through skill, not luck. Principal always safe – withdraw anytime.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark to-cyber-darker" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* What is CipherStakes */}
          <div className="space-y-8 animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text text-center">
              What is CipherStakes?
            </h2>
            
            {/* Text Reveal Effect */}
            <TextReveal 
              text="CipherStakes pools your $1 stablecoin deposits into high-yield vaults on Solana. Earn 5–12% APY via blue-chip DeFi protocols like Aave, Maker, and Ondo. Yields fund puzzle-secured wallets – solve riddles, images, and challenges to claim tiered prizes up to $5,000+. Form guilds for collaborative wins and forge real bonds. Vault 10? Community treasury for DAO-voted impact. Principal always safe – withdraw anytime."
              className="max-w-4xl mx-auto"
            />

            {/* Feature bullets */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 max-w-6xl mx-auto">
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
          </div>

          {/* Timeline Section */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-12">
              <span className="gradient-text">The Flow</span>
            </h2>
            <Timeline data={timelineData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
