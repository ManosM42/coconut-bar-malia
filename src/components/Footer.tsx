import { useTranslation } from "react-i18next";
import { Instagram, Facebook, Music2 } from "lucide-react";

const SOCIALS = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/coconutmalia/",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/CoconutMalia/",
  },
  {
    icon: Music2,
    label: "TikTok",
    href: "https://www.tiktok.com/@coconutmalia",
  },
];

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-border bg-black/60 px-5 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">{t("footer")}</p>
        <div className="flex gap-3">
          {SOCIALS.map(({ icon: Icon, label, href }) => (
            
          <a   key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/70 transition hover:border-orange hover:text-orange"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}