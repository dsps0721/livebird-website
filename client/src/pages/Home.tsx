import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, BarChart3, MessageSquare, Zap, Users, CheckCircle2, Globe, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      } as any
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-10 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center lg:text-left"
            >
              <motion.div variants={itemVariants}>
                <Badge variant="outline" className="mb-6 px-4 py-1.5 rounded-full border-primary/30 bg-primary/5 text-primary backdrop-blur-sm">
                  <span className="mr-2">✨</span> AI + Automation IN Live Streaming
                </Badge>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
                Empower Your <br />
                <span className="text-gradient">Live Streaming</span> <br />
                with AI
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Automate your workflow, engage your audience instantly, and unlock deep insights with the world's first multi-modal AI live streaming assistant.
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="rounded-full px-8 h-12 text-base shadow-lg shadow-primary/25 bg-gradient-to-r from-primary to-emerald-500 hover:scale-105 transition-transform">
                  Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base border-primary/20 hover:bg-primary/5 backdrop-blur-sm">
                  <Play className="mr-2 w-4 h-4 fill-current" /> Watch Demo
                </Button>
              </motion.div>
              
              <motion.div variants={itemVariants} className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>14-day free trial</span>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:h-[600px] flex items-center justify-center"
            >
              {/* Abstract Glass Elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-purple-500/10 rounded-[3rem] blur-3xl -z-10" />
              
              <div className="relative w-full max-w-[600px] aspect-[4/3] glass-panel rounded-2xl p-2 overflow-hidden shadow-2xl border border-white/40">
                <img 
                  src="/images/dashboard-preview.jpg" 
                  alt="LiveBird Dashboard" 
                  className="w-full h-full object-cover rounded-xl"
                />
                
                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-6 top-10 glass-card p-4 rounded-xl w-48 z-20"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Sales Velocity</p>
                      <p className="font-bold text-sm">+124%</p>
                    </div>
                  </div>
                  <div className="h-1 w-full bg-green-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-[70%]" />
                  </div>
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -left-6 bottom-20 glass-card p-4 rounded-xl w-56 z-20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                      <img src="/images/ai-avatar.png" alt="AI Bot" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary">AI Assistant</p>
                      <p className="text-[10px] text-muted-foreground leading-tight">"Welcome to the stream! Check out our new collection below 👇"</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 bg-white/30 dark:bg-black/30 backdrop-blur-sm">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Why Traditional Live Streaming is Hard</h2>
            <p className="text-muted-foreground text-lg">Managing live streams manually is chaotic, inefficient, and data-blind.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Data Chaos",
                desc: "Collecting performance statistics across multiple streams manually is time-consuming and prone to errors."
              },
              {
                icon: Zap,
                title: "Operational Stress",
                desc: "Live situations change rapidly. Human teams struggle to react instantly, leading to missed opportunities."
              },
              {
                icon: MessageSquare,
                title: "Engagement Gap",
                desc: "Manual comment moderation and interaction can't keep up with high-volume streams, hurting conversion."
              }
            ].map((item, i) => (
              <Card key={i} className="glass-card border-none bg-white/40 dark:bg-white/5 hover:bg-white/60 transition-colors">
                <CardContent className="pt-8 pb-8 px-6 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-red-50 dark:bg-red-900/20 text-red-500 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full -z-10" />
              <img 
                src="/images/live-stream-collage.jpg" 
                alt="Live Stream Management" 
                className="rounded-2xl shadow-2xl border border-white/20 w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <Badge variant="secondary" className="mb-4 text-primary bg-primary/10 hover:bg-primary/20">All-in-One Solution</Badge>
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">Complete Lifecycle Automation</h2>
              <p className="text-lg text-muted-foreground mb-8">From preparation to post-analysis, LiveBird handles every step of your streaming journey.</p>
              
              <div className="space-y-6">
                {[
                  { title: "Before Live", desc: "Auto-create posts, warm up social networks, and select best-selling products." },
                  { title: "During Live", desc: "Real-time comment collection, AI auto-reply, and instant audience interaction." },
                  { title: "After Live", desc: "Deep data analysis, multi-platform distribution, and auto-generated highlight clips." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                      <span className="font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Innovation Highlights */}
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="glass-card overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[url('/images/global-network.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay" />
                <Globe className="w-16 h-16 text-primary/80 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold mb-2">Efficient Aggregation</h3>
                <p className="text-muted-foreground text-sm mb-4">Real-time consolidation of orders, fans, and ad data into actionable reports.</p>
                <div className="flex items-center gap-2 text-xs font-medium text-primary">
                  <span className="px-2 py-1 rounded bg-primary/10">Real-time</span>
                  <span className="px-2 py-1 rounded bg-primary/10">Multi-platform</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[url('/images/ai-avatar.png')] bg-cover bg-center opacity-20 mix-blend-overlay" />
                <Users className="w-16 h-16 text-primary/80 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold mb-2">AI Interaction</h3>
                <p className="text-muted-foreground text-sm mb-4">Auto-welcome new viewers and answer questions instantly with 80% efficiency.</p>
                <div className="flex items-center gap-2 text-xs font-medium text-primary">
                  <span className="px-2 py-1 rounded bg-primary/10">-20% Labor Cost</span>
                  <span className="px-2 py-1 rounded bg-primary/10">24/7 Active</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[url('/images/dashboard-preview.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay" />
                <TrendingUp className="w-16 h-16 text-primary/80 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold mb-2">Auto Management</h3>
                <p className="text-muted-foreground text-sm mb-4">Automatically fetch product info, analyze reviews, and upload to multiple stores.</p>
                <div className="flex items-center gap-2 text-xs font-medium text-primary">
                  <span className="px-2 py-1 rounded bg-primary/10">Smart Mining</span>
                  <span className="px-2 py-1 rounded bg-primary/10">One-click Sync</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2 font-heading">28%</div>
              <div className="text-primary-foreground/80">CAGR Growth (2023-2032)</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2 font-heading">$87B+</div>
              <div className="text-primary-foreground/80">Market Size by 2023</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2 font-heading">80%</div>
              <div className="text-primary-foreground/80">Response Efficiency</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2 font-heading">20M+</div>
              <div className="text-primary-foreground/80">Funding Raised</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground text-lg">Choose the plan that fits your growth stage.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="glass-card border-border/50">
              <CardContent className="p-8">
                <h3 className="font-bold text-xl mb-2">Basic</h3>
                <div className="text-3xl font-bold mb-6">$699<span className="text-sm font-normal text-muted-foreground">/year</span></div>
                <ul className="space-y-3 mb-8 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Single Platform</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Basic Analytics</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> 5 AI Bot Hours/mo</li>
                </ul>
                <Button className="w-full" variant="outline">Get Started</Button>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-primary shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-emerald-400" />
              <CardContent className="p-8">
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">POPULAR</div>
                <h3 className="font-bold text-xl mb-2">Pro</h3>
                <div className="text-3xl font-bold mb-6">$1199<span className="text-sm font-normal text-muted-foreground">/year</span></div>
                <ul className="space-y-3 mb-8 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Multi-Platform (3)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Advanced Analytics</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> 20 AI Bot Hours/mo</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Auto-Clipping</li>
                </ul>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-border/50">
              <CardContent className="p-8">
                <h3 className="font-bold text-xl mb-2">Premium</h3>
                <div className="text-3xl font-bold mb-6">$1999<span className="text-sm font-normal text-muted-foreground">/year</span></div>
                <ul className="space-y-3 mb-8 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Unlimited Platforms</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Custom Reports</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Unlimited AI Bot</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Dedicated Support</li>
                </ul>
                <Button className="w-full" variant="outline">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 backdrop-blur-3xl -z-10" />
        <div className="container text-center relative z-10">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Live Streaming?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">Join thousands of creators and brands using LiveBird to automate their growth.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full px-10 h-14 text-lg shadow-xl bg-primary text-primary-foreground hover:scale-105 transition-transform">
              Start Your Free Trial
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-lg bg-white/50 hover:bg-white/80 border-white/40">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
