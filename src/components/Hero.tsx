import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import barInterior from "@/assets/bar-interior.jpg";
import barCrowd from "@/assets/bar-crowd.jpg";
import barCocktail from "@/assets/bar-cocktail.jpg";
import barShisha from "@/assets/bar-shisha.jpg";
import barNight from "@/assets/bar-night.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ORBS = [
  { c: "#FF6B00", s: 520, x: "8%", y: "20%", d: 0 },
  { c: "#FFB347", s: 380, x: "78%", y: "15%", d: 2 },
  { c: "#FF6B00", s: 460, x: "65%", y: "70%", d: 4 },
  { c: "#FFB347", s: 300, x: "18%", y: "75%", d: 6 },
];

const FRAME_COUNT = 80;
const frameModules = import.meta.glob<{ default: string }>(
  "/src/frames/*.jpg",
  { eager: true }
);
const FRAMES: string[] = Object.keys(frameModules)
  .sort()
  .slice(0, FRAME_COUNT)
  .map((k) => frameModules[k].default);

// ── Scroll-pinned frame animation ─────────────────────────────────────────────
function FrameCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameIndexRef = useRef({ value: 0 });

  useEffect(() => {
    if (!FRAMES.length) return;

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const images: HTMLImageElement[] = FRAMES.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });

    const draw = (index: number) => {
      const img = images[Math.round(index)];
      if (!img?.complete) return;
      if (canvas.width !== img.naturalWidth) canvas.width = img.naturalWidth;
      if (canvas.height !== img.naturalHeight) canvas.height = img.naturalHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    images[0].onload = () => draw(0);

    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${FRAME_COUNT * 20}px`,
      pin: true,
      pinSpacing: true,
      scrub: 0.5,
      animation: gsap.to(frameIndexRef.current, {
        value: FRAMES.length - 1,
        ease: "none",
        onUpdate() {
          draw(frameIndexRef.current.value);
        },
      }),
    });

    return () => {
      st.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        style={{ display: "block", objectFit: "cover" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/80" />
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
export function Hero() {
  const { t } = useTranslation();
  const [parallax, setParallax] = useState(0);

  useEffect(() => {
    const onScroll = () => setParallax(window.scrollY * 0.4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const slides = [
    { img: barInterior, caption: t("gallery.interior") },
    { img: barCrowd, caption: t("gallery.crowd") },
    { img: barCocktail, caption: t("gallery.cocktail") },
    { img: barShisha, caption: t("gallery.shisha") },
    { img: barNight, caption: t("gallery.night") },
  ];

  return (
    <section id="home" className="relative overflow-hidden">

      {/* ── Headline block ──────────────────────────────────────────────────── */}
      <div className="relative flex min-h-screen items-center justify-center px-5">
        <div
          className="absolute inset-0 -z-10"
          style={{ transform: `translateY(${parallax}px)` }}
          aria-hidden
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-transparent" />
          {ORBS.map((o, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-float-orb blur-3xl opacity-50"
              style={{
                width: o.s,
                height: o.s,
                left: o.x,
                top: o.y,
                background: `radial-gradient(circle, ${o.c}, transparent 70%)`,
                animationDelay: `${o.d}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange/40 bg-orange/10 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-orange backdrop-blur"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange" />
            Malia · Crete · Open Tonight
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-[clamp(3rem,11vw,9rem)] leading-[0.85] tracking-tight text-foreground text-glow"
          >
            {t("hero.headline")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl text-base text-foreground/80 sm:text-lg"
          >
            {t("hero.sub")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <Link
              to="/experience"
              className="group relative inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-background transition hover:glow-orange"
            >
              {t("hero.cta1")}
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-foreground/30 bg-transparent px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-foreground transition hover:border-orange hover:text-orange"
            >
              <MapPin size={16} />
              {t("hero.cta2")}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll-pinned frame animation ───────────────────────────────────── */}
      {FRAMES.length > 0 && <FrameCanvas />}

      {/* ── Our Gallery divider ─────────────────────────────────────────────── */}
      <div className="relative flex flex-col items-center justify-center gap-4 py-24 px-5">
        <div className="flex items-center gap-4 w-full max-w-xl">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-orange/50" />
          <span className="h-1.5 w-1.5 rounded-full bg-orange animate-pulse" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-orange/50" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-none tracking-tight text-foreground text-glow text-center"
        >
          Our Gallery
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm uppercase tracking-[0.3em] text-orange"
        >
          Malia · Crete · Every Night
        </motion.p>

        <div className="flex items-center gap-4 w-full max-w-xl">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-orange/50" />
          <span className="h-1.5 w-1.5 rounded-full bg-orange animate-pulse" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-orange/50" />
        </div>
      </div>

      {/* ── Image carousel ──────────────────────────────────────────────────── */}
      <HeroGallery slides={slides} />

    </section>
  );
}

// ── Gallery carousel ──────────────────────────────────────────────────────────
function HeroGallery({ slides }: { slides: { img: string; caption: string }[] }) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSel = () => setSelected(embla.selectedScrollSnap());
    embla.on("select", onSel);
    onSel();
    const id = setInterval(() => embla.scrollNext(), 4500);
    return () => {
      clearInterval(id);
      embla.off("select", onSel);
    };
  }, [embla]);

  return (
    <div className="relative pb-16">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((s, i) => (
            <div
              key={i}
              className="relative min-w-0 flex-[0_0_92%] px-3 md:flex-[0_0_75%] lg:flex-[0_0_60%]"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-card">
                <img
                  src={s.img}
                  alt={s.caption}
                  width={1600}
                  height={1024}
                  loading={i === 0 ? "eager" : "lazy"}
                  className={`h-full w-full object-cover ${selected === i ? "animate-ken-burns" : ""}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-xl">
                  <p className="font-display text-lg tracking-wider text-foreground">
                    {s.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => embla?.scrollTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              selected === i ? "w-8 bg-orange" : "w-2 bg-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}