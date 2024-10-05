import CallToAction from "./_section/CallToAction";
import Featured from "./_section/Featured";
import Header from "./_section/Header";
import Hero from "./_section/Hero";
import HowItWorks from "./_section/HowItWorks";
import Meals from "./_section/Meals";
import Pricing from "./_section/Pricing";
import Testimonials from "./_section/Testimonials";

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Featured />
        <HowItWorks />
        <Meals />
        <Testimonials />
        <Pricing />
        <CallToAction />
      </main>
    </>
  );
}
