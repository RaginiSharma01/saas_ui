import Image from "next/image";
import { images } from "@/utils/images";

export default function ActivityBanner() {
  return (
    <section className="w-full flex justify-center py-24 px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT: CONTENT */}
        <div className="text-white space-y-6">
          <p className="text-xs tracking-widest uppercase text-text-primary-100">
            Advanced Project Management
          </p>

          <h2 className="heading-primary">
            Beat your project deadlines
          </h2>

          <p className="subheading text-primary-50 max-w-md">
            Our CRM gives you the right tools to manage, collaborate and
            complete your projects on time. Your clients will be happy and
            your team will be happy.
          </p>

          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3 text-text-primary-300">
              <Image
                          src={images.tickIcon}
                          alt="tickIcon"
                          width={20}
                          height={20}
                          className="w-full max-w-5 "
                          priority
                        />
              Easily see the progress of your project
            </li>
            <li className="flex items-start gap-3 text-text-primary-300">
              <Image
                          src={images.tickIcon}
                          alt="tickIcon"
                          width={20}
                          height={20}
                          className="w-full max-w-5 "
                          priority
                        />
              Collaborate with team members
            </li>
            <li className="flex items-start gap-3 text-text-primary-300">
             <Image
                         src={images.tickIcon}
                         alt="tickIcon"
                         width={20}
                         height={20}
                         className="w-full max-w-5 "
                         priority
                       />
              Break down your project into milestones and tasks
            </li>
          </ul>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="flex justify-center md:justify-end">
          <Image
            src={images.productivityActivity}
            alt="Activity dashboard"
            width={636}
            height={390}
            className="w-full max-w-159 h-auto"
            priority
          />
        </div>

      </div>
    </section>
  );
}
