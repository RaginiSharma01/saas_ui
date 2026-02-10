import Image from "next/image";
import { images } from "@/utils/images";

export default function FeatureGrid() {
  return (
    <section className="w-full flex justify-center px-2 md:px-0 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl w-full">

        {/* LEFT CARD */}

        
          <div className="bg-card-bg border border-card-bg2 rounded-2xl p-6 min-h-27.5 md:min-h-65 flex flex-row md:flex-col items-center justify-start md:justify-center text-start md:text-center gap-4">
          <div className="w-16 h-16 md:h-30 md:w-30 flex items-center justify-center">
            <Image
              src={images.client}
              alt="Clients"
              className="object-contain w-full h-full"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-white text-lg font-semibold ">
            Clients
          </h3>
          <p className="text-text-primary-200 text-sm md:max-w-55">
            Manage all aspects of your clients in one place.
          </p>
          </div>
        </div>
        

        {/* CENTER COLUMN */}
        <div className="flex flex-col gap-5">

          {/* PROJECTS */}
          <div className="bg-card-bg border border-card-bg2 rounded-2xl p-6 min-h-27.5 flex items-center gap-4">
            <div className="w-16 h-16 flex items-center justify-center">
              <Image
                src={images.frame}
                alt="Projects"
                className="object-contain w-full h-full"
              />
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold">
                Projects
              </h3>
              <p className="text-text-primary-200 text-sm">
                Deliver your projects on time and on budget.
              </p>
            </div>
          </div>

          {/* PROSPECTS */}
          <div className="bg-card-bg border border-card-bg2 rounded-2xl p-6 min-h-27.5 flex items-center gap-4">
            <div className="w-16 h-16  flex items-center justify-center">
              <Image
                src={images.frame2}
                alt="Prospects"
                className="object-contain w-full h-full"
              />
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold">
                Prospects
              </h3>
              <p className="text-text-primary-200 text-sm">
                Capture all your leads and opportunities easily.
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT CARD */}
        <div className="bg-card-bg border border-card-bg2 rounded-2xl p-6 min-h-27.5 md:min-h-65 flex flex-row md:flex-col items-center justify-start md:justify-center text-start md:text-center gap-4">
  <div className="w-16 h-16 md:h-30 md:w-30 flex items-center justify-center">
    <Image
      src={images.client2}
      alt="Prospects"
      className="object-contain w-full h-full"
    />
  </div>
  <div className="flex flex-col">
    <h3 className="text-white text-lg font-semibold">
      Prospects
    </h3>
    <p className="text-text-primary-200 text-sm md:max-w-55">
      Capture all your leads and opportunities easily.
    </p>
  </div>
</div>


      </div>
    </section>
  );
}
