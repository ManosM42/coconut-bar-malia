import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Experience } from "@/components/Experience";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "The Experience — Coconut Bar Malia" },
      { name: "description", content: "RnB & party music every night, 50+ cocktails, premium shisha, pole dancing and always free entry — the Coconut Bar Malia experience." },
      { property: "og:title", content: "The Experience — Coconut Bar Malia" },
      { property: "og:description", content: "Malia's favourite night out: RnB, cocktails, shisha and a vibe that keeps you coming back." },
    ],
  }),
  component: () => (
    <Layout>
      <Experience />
    </Layout>
  ),
});
