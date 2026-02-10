import React from 'react'
import ProductivityTabs from './ProductivityTabs'
import { images } from '@/utils/images'
import RefinedProductivityHeading from './RefinedProductivityHeading'
import RefinedProductivityBanner from './RefinedProductivityBanner'
import CTAButtons from './CTAButtons'

const RefinedProductivityHome = () => {
  return (
    <main
      style={{
        backgroundImage: `url(${images.RefinedProductivityHomeBg.src})`,
      }}
      className="
        h-200vh
        bg-cover
        bg-center
        bg-no-repeat
        flex
        flex-col
        px-6
        pb-6
      "
    >
      {/* Heading + Tabs */}
      <div className="flex flex-col items-center gap-6 pt-10">
        <RefinedProductivityHeading />
        <ProductivityTabs />
        <RefinedProductivityBanner/>
        <CTAButtons/>
      </div>
    </main>
  )
}

export default RefinedProductivityHome
