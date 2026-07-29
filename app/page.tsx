import { LandingPage } from "@/components/home/LandingPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { createFaqJsonLd } from "@/lib/metadata";

const faqJsonLd = createFaqJsonLd([
  {
    question: "Do you offer fully custom door designs?",
    answer:
      "Yes. Mata Mauli Doors crafts custom doors around your required dimensions, materials, decorative details, finishes, and architectural requirements.",
  },
  {
    question: "Which materials do you work with?",
    answer:
      "We work with premium hardwoods, engineered wood cores, PVC, and laminate finishes selected for durability and appearance.",
  },
  {
    question: "What is your typical delivery timeline?",
    answer:
      "Standard door deliveries typically take 3-4 weeks from order confirmation. Custom designs may take 5-7 weeks depending on complexity.",
  },
  {
    question: "Do you provide installation?",
    answer:
      "Yes. Professional installation is available across Maharashtra and nearby regions, with costs based on location and project complexity.",
  },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <LandingPage />
    </>
  );
}
