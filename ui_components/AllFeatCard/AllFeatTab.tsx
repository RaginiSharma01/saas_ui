import React from "react";

const AllFeatTab: React.FC = () => {
  return (
    <div className="w-full text-center">
      <div className="flex flex-col items-center gap-4">
        {/* Badge */}
        <div className="px-5 py-1.5 rounded-full bg-bg-primary text-white text-xs font-medium tracking-wide">
          OUR FEATURES
        </div>

        {/* Heading */}
        <h2 className="text-white text-xl md:text-4xl font-semibold">
          All the important tools that you need
        </h2>
      </div>
    </div>
  );
};

export default AllFeatTab;
