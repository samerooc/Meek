import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Card3D } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Github, Linkedin, Twitter, ExternalLink, Sparkles, Zap, Wind, Mail, Send, Instagram } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_3d_dark_neon_geometric_landscape_for_portfolio_background.png";
import avatar from "@assets/generated_images/3d_stylized_developer_avatar.png";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 cyber-grid opacity-10 pointer-events-none" />
      {/* Cursor Glow */}
      <motion.div
        className="fixed w-48 h-48 rounded-full pointer-events-none mix-blend-screen"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
          x: mousePosition.x - 96,
          y: mousePosition.y - 96,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 100 }}
      />
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
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

        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -50, 0], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
          />
          <motion.div
            animate={{ y: [0, 50, 0], x: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"
          />
        </div>

        <div className="container relative z-10 px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6"
            >
              <span className="text-primary font-display text-lg tracking-widest flex items-center gap-2">
                <Sparkles className="w-5 h-5" /> WELCOME TO THE FUTURE
              </span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              CREATIVE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary neon-text animate-gradient">
                DEVELOPER
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8 max-w-md"
            >
              <p className="text-xl leading-relaxed font-medium">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-secondary">Building immersive</span> digital experiences with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold">code</span> and{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary font-bold">creativity.</span>
              </p>
              <p className="text-xl leading-relaxed font-medium mt-4">
                Specializing in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary font-bold">3D interactions</span>, motion design, and{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary font-bold">modern tech</span>.
              </p>
            </motion.div>

            <div className="flex gap-4 flex-wrap">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 text-white border-none rounded-full px-8 py-6 text-lg shadow-[0_0_30px_hsl(var(--primary)/0.6)] transition-all magnetic-btn">
                  View My Work
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg border-secondary text-secondary hover:bg-secondary/10 hover:text-secondary transition-all animate-border-glow">
                  Let's Connect
                </Button>
              </motion.div>
            </div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mt-12 flex gap-4 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-secondary" />
                <span>Performance First</span>
              </div>
              <div className="flex items-center gap-2">
                <Wind className="w-4 h-4 text-primary" />
                <span>Smooth Interactions</span>
              </div>
            </motion.div>
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
                  y: [0, -30, 0],
                  rotateZ: [0, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full h-full"
              >
                <img
                  src={avatar}
                  alt="Avatar"
                  className="w-full h-full object-contain drop-shadow-[0_0_80px_hsl(var(--primary)/0.4)] animate-glow-pulse"
                />
              </motion.div>

              <FloatingBadge icon="REACT" x={-20} y={20} delay={0} />
              <FloatingBadge icon="THREE.JS" x={80} y={-40} delay={1} />
              <FloatingBadge icon="NEXT.JS" x={60} y={60} delay={2} />
              <FloatingBadge icon="FRAMER" x={-60} y={-20} delay={1.5} />
            </div>
          </motion.div>
        </div>
      </section>
      {/* Skills Marquee */}
      <div className="w-full bg-gradient-to-r from-secondary/10 to-primary/10 border-y border-primary/20 py-12 overflow-hidden relative">
        <div className="absolute inset-0 scan-effect pointer-events-none" />
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex gap-16 mx-8">
              <span className="text-2xl md:text-3xl font-display font-bold text-primary/60 hover:text-primary transition-colors">UI/UX</span>
              <span className="text-2xl md:text-3xl font-display font-bold text-secondary">FULL STACK</span>
              <span className="text-2xl md:text-3xl font-display font-bold text-primary/60 hover:text-primary transition-colors">3D WEB</span>
              <span className="text-2xl md:text-3xl font-display font-bold text-secondary/60 hover:text-secondary transition-colors">MOTION</span>
            </div>
          ))}
        </div>
      </div>
      {/* Stats Section */}
      <section className="py-20 container px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard number="50+" label="Projects Completed" />
          <StatCard number="20+" label="Happy Clients" />
          <StatCard number="1.5+" label="Years Experience" />
          <StatCard number="∞" label="Creativity" />
        </div>
      </section>
      {/* Projects Section */}
      <section id="work" className="py-32 container px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            SELECTED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary animate-gradient">WORK</span>
          </h2>
          <p className="text-muted-foreground text-lg">Hover to see the magic ✨</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Cyberpunk Dashboard"
            category="Web Application"
            description="A futuristic data visualization dashboard with real-time metrics and AI integration."
            color="from-purple-500 to-indigo-500"
            delay={0}
          />
          <ProjectCard
            title="Neon Commerce"
            category="E-Commerce"
            description="Immersive shopping experience with 3D product previews and AR features."
            color="from-cyan-500 to-blue-500"
            delay={0.1}
          />
          <ProjectCard
            title="Void Social"
            category="Social Network"
            description="Privacy-focused social platform with decentralized architecture."
            color="from-pink-500 to-rose-500"
            delay={0.2}
          />
          <ProjectCard
            title="Hologram Studio"
            category="Design Tool"
            description="Advanced 3D design tool with real-time collaboration and AI assistance."
            color="from-orange-500 to-yellow-500"
            delay={0.3}
          />
          <ProjectCard
            title="Neural Network"
            category="SaaS Platform"
            description="AI-powered analytics platform with predictive modeling capabilities."
            color="from-green-500 to-emerald-500"
            delay={0.4}
          />
          <ProjectCard
            title="Quantum Vault"
            category="Security App"
            description="Military-grade encryption tool with quantum-resistant algorithms."
            color="from-red-500 to-orange-500"
            delay={0.5}
          />
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-32 container px-4 relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-8">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a creative developer obsessed with building beautiful, performant digital experiences. With expertise spanning from modern web frameworks to advanced 3D graphics, I bring ideas to life through code.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source, or designing next-gen UX patterns.
            </p>
            <div className="flex gap-6">
              <div>
                <h3 className="text-primary font-bold mb-2">Stack</h3>
                <p className="text-muted-foreground text-sm">React • Next.js • Three.js • Framer Motion</p>
              </div>
              <div>
                <h3 className="text-primary font-bold mb-2">Expertise</h3>
                <p className="text-muted-foreground text-sm">3D Web • Performance • Animation • UX</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-2xl neon-glow"
          >
            <div className="space-y-6">
              <SkillBar label="Web Development" value={95} />
              <SkillBar label="3D Graphics" value={85} />
              <SkillBar label="UI/UX Design" value={90} />
              <SkillBar label="Performance Optimization" value={92} />
            </div>
          </motion.div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-32 container px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl transform -skew-y-2 -z-10" />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              LET'S BUILD <br />
              SOMETHING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary neon-text">AMAZING</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Have an exciting project or just want to chat? I'm always open to new opportunities and collaborations. Let's create something extraordinary together.
            </p>

            <div className="flex gap-6 mb-8">
              <SocialLink icon={<Mail />} href="mailto:Samevahiwala@gmail.com" label="Email" />
              <SocialLink icon={<Instagram />} href="https://www.instagram.com/meek.ankit/" label="Instagram" />
              <SocialLink icon={<Send />} href="https://t.me/Marco_x_terminator" label="Telegram" />
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>📧 Samevahiwala@gmail.com</p>
              <p>📱 00000000000</p>
              <p>💬 t.me/Marco_x_terminator</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-panel p-10 rounded-2xl border border-white/10 neon-glow"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary tracking-widest">NAME</label>
                  <Input className="bg-background/50 border-secondary/30 focus:border-secondary text-white placeholder:text-muted-foreground/50 rounded-lg" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary tracking-widest">EMAIL</label>
                  <Input className="bg-background/50 border-secondary/30 focus:border-secondary text-white placeholder:text-muted-foreground/50 rounded-lg" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary tracking-widest">PROJECT TYPE</label>
                <Input className="bg-background/50 border-secondary/30 focus:border-secondary text-white placeholder:text-muted-foreground/50 rounded-lg" placeholder="Web App / 3D Experience / Other" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary tracking-widest">MESSAGE</label>
                <Textarea className="bg-background/50 border-secondary/30 focus:border-secondary text-white placeholder:text-muted-foreground/50 min-h-[150px] rounded-lg" placeholder="Tell me about your project..." />
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-bold py-6 rounded-lg text-lg shadow-[0_0_30px_hsl(var(--primary)/0.4)] magnetic-btn">
                  Send Message
                  <Sparkles className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-muted-foreground text-sm mb-4"
        >© 2025 MEEK • Designed & Built with ❤️ and code</motion.div>
        <p className="text-muted-foreground/50 text-xs">Made with Framer Motion • Three.js • Tailwind CSS</p>
      </footer>
    </div>
  );
}

function ProjectCard({ title, category, description, color, delay }: { title: string; category: string; description: string; color: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="h-[450px] w-full perspective-1000 grid-item-hover"
    >
      <Card3D>
        <div className={`h-48 w-full rounded-lg bg-gradient-to-br ${color} mb-6 opacity-80 relative overflow-hidden`}>
          <motion.div
            animate={{ x: [0, 100, -100, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          />
        </div>
        <div className="space-y-4">
          <span className="text-xs font-bold tracking-widest text-secondary uppercase">{category}</span>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
          <motion.div
            initial={{ x: -10 }}
            whileHover={{ x: 0 }}
            className="pt-4 flex gap-2 items-center text-secondary hover:text-primary transition-colors cursor-pointer"
          >
            <span className="text-sm font-semibold">Explore Project</span>
            <ExternalLink className="w-4 h-4" />
          </motion.div>
        </div>
      </Card3D>
    </motion.div>
  );
}

function FloatingBadge({ icon, x, y, delay }: { icon: string; x: number; y: number; delay: number }) {
  return (
    <motion.div
      animate={{
        y: [0, -15, 0],
        rotateZ: [0, -5, 5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
      style={{
        top: `${50 + y}%`,
        left: `${50 + x}%`,
      }}
      className="absolute px-5 py-3 rounded-full bg-gradient-to-r from-black/60 to-black/40 backdrop-blur-md border border-primary/50 text-primary text-xs font-bold shadow-[0_0_25px_hsl(var(--primary)/0.5)] cursor-pointer hover:scale-110 transition-transform"
    >
      {icon}
    </motion.div>
  );
}

function SocialLink({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 hover:neon-glow transition-all"
      title={label}
    >
      {icon}
    </motion.a>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="glass-panel p-6 rounded-lg text-center border border-primary/20 hover:border-primary/50 transition-all group"
    >
      <motion.h3
        animate={{ color: ["hsl(var(--primary))", "hsl(var(--secondary))", "hsl(var(--primary))"] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="text-4xl font-bold mb-2"
      >
        {number}
      </motion.h3>
      <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">{label}</p>
    </motion.div>
  );
}

function SkillBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-white">{label}</span>
        <span className="text-sm text-primary">{value}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
        />
      </div>
    </div>
  );
}
