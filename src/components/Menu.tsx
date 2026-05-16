import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { DRINKS, COCKTAILS, SHISHA, DISHES, type MenuItem } from "@/lib/menu-data";

function MenuGroup({ id, label, tag, items }: { id: string; label: string; tag: string; items: MenuItem[] }) {
  return (
    <section id={id} className="scroll-mt-24 py-14">
      <div className="mb-10 flex flex-col items-start gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h3 className="font-display text-5xl tracking-wider text-orange text-glow md:text-6xl">{label}</h3>
          <p className="mt-2 text-sm uppercase tracking-[0.3em] text-foreground/60">{tag}</p>
        </div>
        <div className="hidden h-px flex-1 bg-gradient-to-r from-orange/60 to-transparent md:ml-8 md:block" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <motion.div
            key={it.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: (i % 4) * 0.08, duration: 0.5 }}
            className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-orange hover:glow-orange"
          >
            <div className="absolute right-5 top-5 font-display text-xl text-orange">{it.price}</div>
            <h4 className="pr-14 font-display text-2xl tracking-wide text-foreground">{it.name}</h4>
            <p className="mt-3 text-sm leading-relaxed text-foreground/65">{it.desc}</p>
            <div className="mt-6 h-px w-10 bg-orange/60 transition-all duration-300 group-hover:w-full" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Menu() {
  const { t } = useTranslation();
  return (
    <section className="relative px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={t("menu.eyebrow")} title={t("menu.title")} />
        <MenuGroup id="drinks" label={t("menu.drinks.label")} tag={t("menu.drinks.tag")} items={DRINKS} />
        <MenuGroup id="cocktails" label={t("menu.cocktails.label")} tag={t("menu.cocktails.tag")} items={COCKTAILS} />
        <MenuGroup id="shisha" label={t("menu.shisha.label")} tag={t("menu.shisha.tag")} items={SHISHA} />
        <MenuGroup id="dishes" label={t("menu.dishes.label")} tag={t("menu.dishes.tag")} items={DISHES} />
      </div>
    </section>
  );
}
