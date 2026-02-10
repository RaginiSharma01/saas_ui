import Image from "next/image";
import { images } from "@/utils/images";
export default function HomeBannerImage() {
  return (
    <div className="w-full flex justify-center    px-4">
      <Image
        src={images.feature}
        alt="Feature preview"
        width={600}
        height={180}
        className="
          w-full
          max-w-150
          h-auto
          opacity-100
        "
        priority
      />
     
    </div>
  );
}