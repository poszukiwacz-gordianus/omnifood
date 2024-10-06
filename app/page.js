import {
  CallToAction,
  FeaturedIn,
  Footer,
  Header,
  Hero,
  HowItWorks,
  Meals,
  Pricing,
  Testimonials,
} from "@/app/_section/Section";

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <FeaturedIn />
        <HowItWorks />
        <Meals />
        <Testimonials />
        <Pricing />
        <CallToAction />
      </main>

      <Footer />
    </>
  );
}
