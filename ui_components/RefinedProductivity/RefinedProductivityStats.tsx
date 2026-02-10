import React from 'react'

const RefinedProductivityStats = () => {
  return (
    <div className="w-full rounded-2xl bg-white/5 backdrop-blur px-8 py-6 grid grid-cols-3 gap-12">
      {/* Completed Task */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-sm text-text-primary-100">
          <span className="h-2 w-2 rounded-full bg-purple-400" />
          Completed Task
        </div>
        <div className="flex items-center gap-2">
          <span className="text-3xl font-semibold text-white">300</span>
          <span className="text-red-500 text-xl">↓</span>
        </div>
      </div>

      {/* Earned by task */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-sm text-text-primary-100">
          <span className="h-2 w-2 rounded-full bg-purple-400" />
          Earned by task
        </div>
        <div className="flex items-center gap-2">
          <span className="text-3xl font-semibold text-white">$1655.22</span>
          <span className="text-purple-400 text-xl">↑</span>
        </div>
      </div>

      {/* Earning per task */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-sm text-text-primary-100">
          <span className="h-2 w-2 rounded-full bg-purple-400" />
          Earning per task
        </div>
        <div className="flex items-center gap-2">
          <span className="text-3xl font-semibold text-white">$254.22</span>
          <span className="text-purple-400 text-xl">↑</span>
        </div>
      </div>
    </div>
  )
}

export default RefinedProductivityStats
