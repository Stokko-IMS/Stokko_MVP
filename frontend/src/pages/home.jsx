import PublicNavbar from "../components/publicNavbar";
import Hero from "../components/homePage/Hero";
import FeaturesSection from "../components/homePage/FeaturesSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <PublicNavbar />

      <Hero />

      <FeaturesSection />

      <Footer />
    </div>
  );
}
