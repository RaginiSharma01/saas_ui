import Home from "@/ui_components/Home/Home";
import FeatureHome from "@/ui_components/Features/FeatureHome";
import ProductivityHome from "@/ui_components/Productivity/ProductivityHome";
import ActivityHome from "@/ui_components/Activity/ActivityHome";
import AllFeatGrid from "@/ui_components/AllFeatCard/AllFeatGrid";
import RefinedProductivityHome from "@/ui_components/RefinedProductivity/RefinedProductivityHome";
import Footer from "@/ui_components/Footer/Footer";
export default function Homepage() {
  return (
    <main className="min-h-[calc(100vh-60px)] md:h-screen bg-white text-black pt-15">
      <Home/>
      <FeatureHome/>
      <ProductivityHome/>
      <ActivityHome/>
      <AllFeatGrid/>
      <RefinedProductivityHome/>
      <Footer/>
    </main>
  );
}
