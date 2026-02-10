import React from 'react'
import { images } from '@/utils/images'
import RefinedProductivityStats from './RefinedProductivityStats'

const RefinedProductivityBanner = () => {
  return (
    <div
      className="
        w-[54vw]
        max-w-[1000px]
        h-[520px]
        mx-auto
        mt-6
        rounded-[26px]
        border border-white/10
        bg-black/40
        backdrop-blur-xl
        p-4
        overflow-hidden
      "
    >
      <div className="flex gap-4 h-full">
        {/* LEFT SIDEBAR */}
        <div className="w-[190px] rounded-xl bg-white/5 p-3 flex-shrink-0">
          <img
            src={images.RefinedSideBar.src}
            alt="Sidebar"
            className="w-full h-full object-contain scale-95"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-4 flex-1 h-full">
          {/* STATS */}
          <div className="shrink-0">
            <RefinedProductivityStats />
          </div>

          {/* CHART */}
          <div className="rounded-xl bg-white/5 p-0 flex-1 flex items-center justify-center">
            <img
              src={images.RefinedChart.src}
              alt="Chart"
              className="w-full max-h-[260px] object-contain scale-95"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RefinedProductivityBanner
