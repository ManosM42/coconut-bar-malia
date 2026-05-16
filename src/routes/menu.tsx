import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Menu } from "@/components/Menu";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Drinks, Cocktails, Shisha & Dishes · Coconut Bar Malia" },
      { name: "description", content: "Explore our full menu — beers, spirits, signature cocktails, premium shisha flavours and late-night dishes at Coconut Bar Malia." },
      { property: "og:title", content: "Menu — Coconut Bar Malia" },
      { property: "og:description", content: "Drinks, cocktails, shisha and dishes — everything you need for the night." },
    ],
  }),
  component: () => (
    <Layout>
      <Menu />
    </Layout>
  ),
});
