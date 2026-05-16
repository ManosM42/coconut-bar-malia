import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import barInterior from "@/assets/bar-interior.jpg";
import barCrowd from "@/assets/bar-crowd.jpg";

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function Experience() {
  const { t } = useTranslation();
  const items = t("exp.items", { returnObjects: true }) as { n: number; suffix: string; label: string }[];
  const quote = t("exp.quote");

  return (
    <section id="experience" className="relative py-28 px-5">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={t("exp.eyebrow")} title={t("exp.title")} />
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <ul className="space-y-6">
              {items.map((it, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="group flex items-baseline gap-5 border-b border-border pb-5"
                >
                  <span className="font-display text-4xl text-orange text-glow tabular-nums md:text-5xl">
                    <Counter to={it.n} suffix={it.suffix} />
                  </span>
                  <span className="text-base font-medium uppercase tracking-wider text-foreground/85 md:text-lg">
                    {it.label}
                  </span>
                </motion.li>
              ))}
            </ul>
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10 border-l-2 border-orange pl-6 text-lg italic text-foreground/80"
            >
              "{quote}"
            </motion.blockquote>
          </div>

          <div className="relative grid h-[560px] grid-cols-5 grid-rows-5 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative col-span-3 row-span-3 overflow-hidden rounded-2xl border border-border glow-orange-sm"
            >
              <img src={barInterior} alt="Bar interior" loading="lazy" width={1600} height={1024} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/40" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative col-span-2 col-start-4 row-span-2 row-start-2 overflow-hidden rounded-2xl border border-border"
            >
              <img src={barCrowd} alt="Crowd" loading="lazy" width={1600} height={1024} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="relative col-span-4 col-start-2 row-span-2 row-start-4 overflow-hidden rounded-2xl border border-border"
            >
              <img src={barCrowd} alt="Night vibes" loading="lazy" width={1600} height={1024} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4 font-display text-xl tracking-wider text-orange">
                EVERY NIGHT · 20:00 → 05:00
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
