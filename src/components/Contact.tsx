import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Instagram, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const MAPS_LINK = "https://www.google.com/maps/dir/?api=1&destination=Malia,Crete,Greece";
const MAP_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3256.7068577136397!2d25.45918877792471!3d35.28841395144913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149a651ebb114013%3A0x31111a9a18b96dcf!2sCoconut%20Bar%20Malia!5e0!3m2!1sel!2sgr!4v1778942072381!5m2!1sel!2sgr";

export function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="relative px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={t("contact.eyebrow")} title={t("contact.title")} />
        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between rounded-2xl border border-border bg-card/40 p-8 backdrop-blur"
          >
            <ul className="space-y-7">
              <ContactRow icon={<MapPin />} label={t("contact.address")} />
              <ContactRow icon={<Clock />} label={t("contact.hours")} />
              <ContactRow icon={<Phone />} label={t("contact.phone")} />
              <ContactRow
                icon={<Instagram />}
                label={t("contact.instagram")}
                href={`https://instagram.com/${t("contact.instagram").replace("@", "")}`}
              />
            </ul>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-orange px-7 py-3.5 font-semibold uppercase tracking-wider text-background transition hover:glow-orange"
            >
              {t("contact.directions")}
              <ArrowUpRight size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-orange/40 glow-orange"
          >
            <iframe
              src={MAP_EMBED}
              title="Coconut Bar Malia map"
              loading="lazy"
              className="h-[440px] w-full"
              style={{ filter: "invert(0.92) hue-rotate(180deg) saturate(0.7) contrast(1.05)" }}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, href }: { icon: React.ReactNode; label: string; href?: string }) {
  const inner = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-orange/40 bg-orange/10 text-orange">
        {icon}
      </span>
      <span className="text-lg text-foreground/90">{label}</span>
    </>
  );
  return (
    <li>
      {href ? (
        <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-4 transition hover:text-orange">
          {inner}
        </a>
      ) : (
        <div className="flex items-center gap-4">{inner}</div>
      )}
    </li>
  );
}
