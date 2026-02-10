import { images } from "@/utils/images";
import FeatureButton from "./FeatureButton";
import FeatureHeading from "./FeatureHeading";
import FeatureGrid from "./FeatureGrid";

export default function FeatureHome() {
  return (
    <main
      style={{
        backgroundImage: `url(${images.featureHome.src})`,
      }}
      className="
        h-[calc(100vh-48px)]
        bg-cover
        bg-center
        bg-no-repeat
      "
    >
     <FeatureButton/> 
     <FeatureHeading/>
     <FeatureGrid/>
    </main>
  );
}
