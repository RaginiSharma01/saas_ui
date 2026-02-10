import { images } from "@/utils/images";
import HomeBanner from "./HomeBanner";
import HomeBannerImage from "./HomeBannerImage";
import HomeButton from "./HomeButton";
import HomeFooter from "./HomeFooter";

export default function Home() {
  return (
    <main
  style={{ backgroundImage: `url(${images.bg.src})` }}
  className="
    h-[calc(100vh-48px)] md:h-screen
    bg-cover
    bg-center
    bg-no-repeat
    flex
    flex-col
    justify-between
    px-6
    pb-6
  "
>

      
      <div>
        <HomeBanner />
        <HomeButton />
      </div>

      
      <HomeBannerImage />

     
      <HomeFooter />
    </main>
  );
}
