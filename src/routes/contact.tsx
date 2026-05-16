import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Find Us — Coconut Bar Malia" },
      { name: "description", content: "Find Coconut Bar Malia in Malia, Crete. Open 20:00 – 05:00 daily. Get directions, follow us on Instagram, say hi." },
      { property: "og:title", content: "Find Us — Coconut Bar Malia" },
      { property: "og:description", content: "Malia, Heraklion, Crete · Open 20:00 – 05:00 daily." },
    ],
  }),
  component: () => (
    <Layout>
      <Contact />
    </Layout>
  ),
});
