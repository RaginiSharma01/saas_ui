"use client";

import { useLayoutEffect, useRef, useState } from "react";

interface Tab {
  id: string;
  label: string;
}

interface SlidingTabProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

const SlidingTab = ({
  tabs,
  activeTab,
  onTabChange,
  className = "",
}: SlidingTabProps) => {
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    height: 0,
  });

  const tabsRef = useRef<Record<string, HTMLButtonElement>>({});

  const updateIndicator = (tabId: string) => {
    const tabElement = tabsRef.current[tabId];
    if (!tabElement) return;

    setIndicatorStyle({
      left: tabElement.offsetLeft,
      width: tabElement.clientWidth,
      height: tabElement.clientHeight,
    });
  };

  const handleTabClick = (tabId: string) => {
    onTabChange(tabId);
    updateIndicator(tabId);
  };

  useLayoutEffect(() => {
    if (activeTab) {
      requestAnimationFrame(() => updateIndicator(activeTab));
    }
  }, [activeTab, tabs]);

  return (
    <div className={`relative ${className}`}>
      <div className="relative h-[48px] rounded-full bg-[#1a1a1a]/80 border border-white/10 backdrop-blur-md px-2 py-1 flex items-center">
        <div role="tablist" className="relative flex items-center gap-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  if (el) tabsRef.current[tab.id] = el;
                  else delete tabsRef.current[tab.id];
                }}
                role="tab"
                aria-selected={isActive}
                tabIndex={isActive ? 0 : -1}
                onClick={() => handleTabClick(tab.id)}
                className={`
                  relative z-10
                  rounded-full
                  px-5
                  py-2
                  text-sm
                  font-medium
                  whitespace-nowrap
                  transition-colors
                  duration-200
                  ${
                    isActive
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }
                `}
              >
                {tab.label}
              </button>
            );
          })}

          {/* Sliding Indicator */}
          <div
            className="
              absolute
              rounded-full
              bg-linear-to-r
              from-purple-600
              to-indigo-600
              transition-all
              duration-300
              ease-in-out
            "
            style={{
              left: indicatorStyle.left,
              width: indicatorStyle.width,
              height: indicatorStyle.height,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SlidingTab;
