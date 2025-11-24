import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Card3D } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Github, Linkedin, Twitter, ExternalLink } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_3d_dark_neon_geometric_landscape_for_portfolio_background.png";
import avatar from "@assets/generated_images/3d_stylized_developer_avatar.png";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />
          <img
            src={heroBg}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="container relative z-10 px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-primary font-display text-xl mb-4 tracking-widest">WELCOME TO THE FUTURE</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              CREATIVE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary neon-text">
                DEVELOPER
              </span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              Building immersive digital experiences with code and creativity. 
              Specializing in 3D interactions and modern web technologies.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/80 text-white border-none rounded-full px-8 py-6 text-lg shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all hover:scale-105">
                View Work
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg border-secondary text-secondary hover:bg-secondary/10 hover:text-secondary transition-all hover:scale-105">
                Contact Me
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full h-full"
              >
                <img
                  src={avatar}
                  alt="Avatar"
                  className="w-full h-full object-contain drop-shadow-[0_0_50px_hsl(var(--primary)/0.3)]"
                />
              </motion.div>
              
              {/* Floating Elements */}
              <FloatingBadge icon="REACT" x={-20} y={20} delay={0} />
              <FloatingBadge icon="THREE.JS" x={80} y={-40} delay={1} />
              <FloatingBadge icon="NEXT.JS" x={60} y={60} delay={2} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Marquee */}
      <div className="w-full bg-secondary/5 border-y border-secondary/20 py-8 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex gap-12 mx-6">
              <span className="text-2xl font-display font-bold text-muted-foreground/50">UI/UX DESIGN</span>
              <span className="text-2xl font-display font-bold text-primary">FULL STACK</span>
              <span className="text-2xl font-display font-bold text-muted-foreground/50">3D MODELING</span>
              <span className="text-2xl font-display font-bold text-secondary">MOTION GRAPHICS</span>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <section id="work" className="py-32 container px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">SELECTED <span className="text-secondary">WORK</span></h2>
          <p className="text-muted-foreground">Hover over the cards to interact</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Cyberpunk Dashboard"
            category="Web Application"
            description="A futuristic data visualization dashboard with real-time metrics."
            color="from-purple-500 to-indigo-500"
          />
          <ProjectCard
            title="Neon Commerce"
            category="E-Commerce"
            description="Immersive shopping experience with 3D product previews."
            color="from-cyan-500 to-blue-500"
          />
          <ProjectCard
            title="Void Social"
            category="Social Network"
            description="Privacy-focused social platform with decentralized architecture."
            color="from-pink-500 to-rose-500"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 container px-4 relative">
        <div className="absolute inset-0 bg-primary/5 skew-y-3 -z-10 transform origin-top-left" />
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              LET'S BUILD <br />
              SOMETHING <br />
              <span className="text-primary neon-text">AMAZING</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Have a project in mind? Let's turn your vision into an immersive reality.
            </p>
            
            <div className="flex gap-6">
              <SocialLink icon={<Github />} />
              <SocialLink icon={<Linkedin />} />
              <SocialLink icon={<Twitter />} />
            </div>
          </div>

          <div className="glass-panel p-8 rounded-2xl border border-white/10">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Name</label>
                  <Input className="bg-background/50 border-white/10 focus:border-primary/50" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Email</label>
                  <Input className="bg-background/50 border-white/10 focus:border-primary/50" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Message</label>
                <Textarea className="bg-background/50 border-white/10 focus:border-primary/50 min-h-[150px]" placeholder="Tell me about your project..." />
              </div>
              <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-bold py-6">
                Send Message <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-white/5 text-center text-muted-foreground text-sm">
        © 2024 Dev.io Portfolio. All rights reserved.
      </footer>
    </div>
  );
}

function ProjectCard({ title, category, description, color }: { title: string; category: string; description: string; color: string }) {
  return (
    <div className="h-[400px] w-full perspective-1000">
      <Card3D>
        <div className={`h-40 w-full rounded-lg bg-gradient-to-br ${color} mb-6 opacity-80`} />
        <div className="space-y-4">
          <span className="text-xs font-bold tracking-widest text-secondary uppercase">{category}</span>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
          <div className="pt-4 flex gap-4">
            <Button variant="ghost" size="sm" className="text-white hover:text-primary p-0 hover:bg-transparent">
              View Project <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card3D>
    </div>
  );
}

function FloatingBadge({ icon, x, y, delay }: { icon: string; x: number; y: number; delay: number }) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
      style={{
        top: `${50 + y}%`,
        left: `${50 + x}%`,
      }}
      className="absolute px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-primary/30 text-primary text-xs font-bold shadow-[0_0_15px_hsl(var(--primary)/0.3)]"
    >
      {icon}
    </motion.div>
  );
}

function SocialLink({ icon }: { icon: React.ReactNode }) {
  return (
    <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:scale-110 transition-all">
      {icon}
    </a>
  );
}
