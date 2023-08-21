import Hero from "./components/Hero";
import Services from "./components/ServicesOffered";
import Portfolio from "./components/Portfolio";
import Trustees from "./components/Trustees";
import ScrollToTopButton from "./components/ScrollToTop";

export default function Home() {
  return (
    <main className="text-white bg-background">
      <Hero />
      <Services />
      <Portfolio />
      <Trustees />
      <ScrollToTopButton />
    </main>
  );
}
