import PublicNavbar from "../components/PublicNavbar";
import Hero from "../components/homePage/Hero";
import FeaturesSection from "../components/homePage/FeaturesSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-200 text-deep">
      <PublicNavbar />
      <Hero />
      <FeaturesSection />
      <Footer />
    </div>
  );
}
