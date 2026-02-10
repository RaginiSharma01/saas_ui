import Image from "next/image";
import { images } from "@/utils/images";

export default function ProductivityBanner() {
  return (
    <section className="w-full flex justify-center py-20 px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT: IMAGE */}
        <div className="flex justify-center md:justify-start">
          <Image
            src={images.productivityActivity}
            alt="Productivity dashboard"
            width={636}
            height={390}
            className="w-full max-w-159 h-auto"
            priority
          />
        </div>

        {/* RIGHT: CONTENT */}
        <div className="text-white space-y-6">
          <p className="text-xs tracking-widest text-text-primary-300 uppercase">
            Increase your productivity
          </p>

          <h2 className="heading-primary text-">
            Software that your team will love
          </h2>

          <p className="subheading text-text-primary-300">
            Our application comes with a host of features that are designed to
            help increase your entire team&apos;s productivity.
          </p>

          <ul className="space-y-3 text-sm text-text-primary-300">
            <li className="flex items-start gap-3">
               <Image
            src={images.tickIcon}
            alt="tickIcon"
            width={20}
            height={20}
            className="w-full max-w-5 "
            priority
          />
              Project templates to kick-start a new project
            </li>
            <li className="flex items-start gap-3">
              <Image
            src={images.tickIcon}
            alt="tickIcon"
            width={20}
            height={20}
            className="w-full max-w-5 "
            priority
          />
              Clone task to speed your time to action
            </li>
            <li className="flex items-start gap-3">
               <Image
            src={images.tickIcon}
            alt="tickIcon"
            width={20}
            height={20}
            className="w-full max-w-5 "
            priority
          />
              Communicate and collaborate with your team and clients
            </li>
            <li className="flex items-start gap-3">
              <Image
            src={images.tickIcon}
            alt="tickIcon"
            width={20}
            height={20}
            className="w-full max-w-5 "
            priority
          />
              Time tracking for the whole team
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
