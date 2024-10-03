import Featured from "./_components/Featured";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import HowItWorks from "./_components/HowItWorks";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Featured />
        <HowItWorks />
      </main>
    </>
  );
}
