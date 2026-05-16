import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { Reviews } from "@/components/Reviews";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Coconut Bar Malia — RnB, Cocktails & Shisha in Malia, Crete" },
      { name: "description", content: "Malia's favourite chill-out and party bar. Cocktails, premium shisha, RnB nights, free entry. Open 20:00 – 05:00 daily in Malia, Crete." },
      { property: "og:title", content: "Coconut Bar Malia — The Night Starts Here" },
      { property: "og:description", content: "Cocktails · Shisha · RnB · Good Vibes. Free entry every night in Malia, Crete." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      <div className="-mt-20">
        <Hero />
        <Reviews />
      </div>
    </Layout>
  );
}
