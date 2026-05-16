import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu as MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/coconut-logo.jpg";

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/experience", label: t("nav.experience") },
    { to: "/menu", label: t("nav.menu") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  const toggleLang = () => i18n.changeLanguage(i18n.language === "en" ? "gr" : "en");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
  <img
    src={logo}
    alt="Coconut Malia"
    className="h-35 w-24 object-contain animate-glow-pulse"
    style={{ filter: "drop-shadow(0 0 12px rgba(255,107,0,0.6))" }}
  />
  <div className="flex flex-col leading-tight">
    <span className="font-display text-lg uppercase tracking-[0.2em] text-foreground">
      Coconut
    </span>
    <span className="font-display text-lg uppercase tracking-[0.2em] text-orange">
      Bar
    </span>
    <span className="font-display text-lg uppercase tracking-[0.2em] text-foreground">
      Malia
    </span>
  </div>
</Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group relative text-sm font-medium uppercase tracking-wider text-foreground/80 transition hover:text-orange"
              activeProps={{ className: "text-orange" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-orange transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="relative flex h-9 items-center rounded-full border border-border bg-card/60 px-1 backdrop-blur"
            aria-label="Toggle language"
          >
            <span className={`relative z-10 px-3 text-xs font-bold transition ${i18n.language === "en" ? "text-background" : "text-foreground/70"}`}>EN</span>
            <span className={`relative z-10 px-3 text-xs font-bold transition ${i18n.language === "gr" ? "text-background" : "text-foreground/70"}`}>GR</span>
            <motion.span
              layout
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="absolute top-1 bottom-1 w-[42px] rounded-full bg-orange glow-orange-sm"
              style={{ left: i18n.language === "en" ? 4 : 46 }}
            />
          </button>
          <button
            className="lg:hidden text-foreground"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <MenuIcon size={26} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border bg-background/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="border-b border-border/40 py-3 font-display text-2xl tracking-wider text-foreground hover:text-orange"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
