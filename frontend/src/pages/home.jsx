import HomeNavbar from "../components/homePage/HomeNavbar";
import Hero from "../components/homePage/Hero";
import FeaturesSection from "../components/homePage/FeaturesSection";
import Footer from "../components/Footer";

export default function home() {
  return (
    <div>
      <HomeNavbar />

      <Hero />

      <FeaturesSection />

      <Footer />
    </div>
  );
}
