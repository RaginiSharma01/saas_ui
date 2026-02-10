import React from "react";
import { images } from "@/utils/images";
import FeatureCard from "@/shared/FeatureCard";
import AllFeatTab from "./AllFeatTab";

const AllFeatGrid: React.FC = () => {
  const features = {
    tasks: {
      title: "Tasks",
      description: "Work through your task efficiently and intuitively.",
      icon: images.AllFeat1,
      layout: "vertical" as const,
    },
    invoicing: {
      title: "Invoicing",
      description: "Invoice your clients and accept payments easily",
      icon: images.AllFeat2,
      layout: "vertical" as const,
    },
    estimates: {
      title: "Estimates",
      description: "Quickly send your clients estimates and proposals",
      icon: images.AllFeat3,
      layout: "vertical" as const,
    },
    userRoles: {
      title: "User Roles",
      description: "Control the resources your team members can access",
      icon: images.AllFeat4,
      layout: "vertical" as const,
    },
    helpDesk: {
      title: "Help Desk",
      description: "Use the helpdesk to provide support for your clients",
      icon: images.AllFeat5,
      layout: "horizontal" as const,
    },
    timeTracking: {
      title: "Time Tracking",
      description:
        "Advanced time tracking so you never miss a minute of time spent",
      icon: images.AllFeat6,
      layout: "horizontal" as const,
    },
    workAnywhere: {
      title: "Work From Anywhere",
      description:
        "Your team can now easily connect and work from anywhere",
      icon: images.AllFeat7,
      layout: "horizontal" as const,
    },
    subscriptions: {
      title: "Subscriptions",
      description:
        "Accept recurring payments via Stripe, using the subscription feature",
      icon: images.AllFeat9,
      layout: "vertical" as const,
    },
    knowledgebase: {
      title: "Knowledgebase",
      description:
        "Create engaging articles easily share information with all your stakeholders",
      icon: images.AllFeat8,
      layout: "horizontal" as const,
    },
  };

  return (
    <section className="w-full bg-[#13151f] py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* Heading */}
        <AllFeatTab />

        {/* Cards */}
        <div className="space-y-4">

          {/* ROW 1 */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            <FeatureCard {...features.tasks}  />
            <FeatureCard {...features.invoicing} />
            <FeatureCard {...features.estimates} />
          </div>

               <div className="md:hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 ">
            <FeatureCard {...features.tasks} layout={"horizontal"}/>
            <FeatureCard {...features.invoicing}layout={"horizontal"}/>
            <FeatureCard {...features.estimates}layout={"horizontal"} />
          </div>
<div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-4">
  <FeatureCard {...features.userRoles} />
  <div className="flex flex-col gap-4">
    <FeatureCard {...features.helpDesk} />
    <FeatureCard {...features.timeTracking} />
  </div>
</div>

{/* ROW 2 - Mobile */}
<div className="md:hidden grid grid-cols-1 gap-4 px-2">
  <FeatureCard {...features.userRoles} layout="horizontal" />
  <div className="flex flex-col gap-4">
    <FeatureCard {...features.helpDesk} />
    <FeatureCard {...features.timeTracking} />
  </div>
</div>

          {/* ROW 3 */}
          <div className=" hidden md:grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <FeatureCard {...features.workAnywhere} />
              <FeatureCard {...features.knowledgebase} />
            </div>
            <FeatureCard {...features.subscriptions} />
          </div>

           <div className="md:hidden grid grid-cols-1 lg:grid-cols-2 gap-4 px-2">
            <div className="flex flex-col gap-4">
              <FeatureCard {...features.workAnywhere} />
              <FeatureCard {...features.knowledgebase} />
            </div>
            <FeatureCard {...features.subscriptions} layout="horizontal" />
          </div>


        </div>
      </div>
    </section>
  );
};

export default AllFeatGrid;
