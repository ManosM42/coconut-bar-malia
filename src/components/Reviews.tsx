import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { REVIEWS } from "@/lib/menu-data";

export function Reviews() {
  const { t } = useTranslation();
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start", dragFree: true });
  useEffect(() => {
    if (!embla) return;
    let paused = false;
    const node = embla.rootNode();
    const enter = () => (paused = true);
    const leave = () => (paused = false);
    node.addEventListener("mouseenter", enter);
    node.addEventListener("mouseleave", leave);
    const id = setInterval(() => { if (!paused) embla.scrollNext(); }, 3800);
    return () => {
      clearInterval(id);
      node.removeEventListener("mouseenter", enter);
      node.removeEventListener("mouseleave", leave);
    };
  }, [embla]);

  return (
    <section id="reviews" className="relative px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={t("reviews.eyebrow")} title={t("reviews.title")} />
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {[...REVIEWS, ...REVIEWS].map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (i % 4) * 0.1 }}
                className="relative flex min-w-0 flex-[0_0_85%] flex-col rounded-2xl border border-border bg-card/60 p-8 backdrop-blur-xl transition hover:border-orange md:flex-[0_0_45%] lg:flex-[0_0_32%]"
              >
                <Quote className="absolute right-6 top-6 text-orange/40" size={40} />
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} size={16} className="fill-orange text-orange" />
                  ))}
                </div>
                <p className="text-base leading-relaxed text-foreground/85">"{r.text}"</p>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="font-display text-lg tracking-wider text-orange">{r.name}, {r.country}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-foreground/50">{r.meta}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
