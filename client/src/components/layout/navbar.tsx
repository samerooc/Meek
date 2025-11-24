import { motion } from "framer-motion";
import { Link } from "wouter";
import { Code, Layout, Mail, User } from "lucide-react";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-2 sm:p-4 backdrop-blur-sm bg-background/50"
    >
      <div className="glass-panel flex items-center justify-between w-full md:w-auto gap-4 md:gap-8 px-4 md:px-8 py-3 md:py-4 rounded-full border border-white/10 neon-glow">
        <Link href="/">
          <span className="text-xl md:text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary hover:opacity-80 transition-opacity cursor-pointer">
            SAMEROOC
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <NavLink href="#work" icon={<Layout className="w-4 h-4" />} label="Work" />
          <NavLink href="#about" icon={<User className="w-4 h-4" />} label="About" />
          <NavLink href="#contact" icon={<Mail className="w-4 h-4" />} label="Contact" />
        </div>

        <div className="md:hidden flex items-center gap-3">
          <a href="#work" className="text-xs text-muted-foreground hover:text-primary">Work</a>
          <a href="#about" className="text-xs text-muted-foreground hover:text-primary">About</a>
          <a href="#contact" className="text-xs text-muted-foreground hover:text-primary">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
}

function NavLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}
