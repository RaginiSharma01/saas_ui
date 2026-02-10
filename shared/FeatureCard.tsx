import React from "react";
import Image, { StaticImageData } from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: StaticImageData;
  layout?: "vertical" | "horizontal";
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  layout = "vertical",
  className = "",
}) => {
  if (layout === "horizontal") {
    return (
      <div
        className={`
          bg-card-bg
          rounded-2xl
          p-5
          flex
          items-center
          gap-4
          hover:bg-[#252936]
          transition-all
          duration-300
          border border-card-bg2
          min-h-27.5
          ${className}
        `}
      >
        {/* Icon */}
        <div className="w-20 h-20 shrink-0 flex items-center justify-center">
          <Image
            src={icon}
            alt={title}
            className="object-contain w-full h-full"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <h3 className="text-white text-lg font-semibold">
            {title}
          </h3>
          <p className="text-text-primary-200  text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`
        bg-card-bg
        rounded-2xl
        p-6
        flex
        flex-col
        items-center
        text-center
        gap-4
        hover:bg-[#252936]
        transition-all
        duration-300
        border border-card-bg2
        min-h-55
        ${className}
      `}
    >
      {/* Icon */}
      <div className="w-28 h-28 flex items-center justify-center">
        <Image
          src={icon}
          alt={title}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <h3 className="text-white text-lg font-semibold">
          {title}
        </h3>
        <p className="text-text-primary-200 text-sm leading-relaxed max-w-60">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
