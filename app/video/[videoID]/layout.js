import SoundAccordion from "@/components/SoundAccordion/SoundAccordion";

export default function SoundLayout({
  children, // will be a page or nested layout
}) {
  return <section>{children}</section>;
}
