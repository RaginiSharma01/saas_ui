'use client'
import SlidingTab from '@/shared/SlidingTab'
import React, { useState } from 'react'

const tabs = [
  { id: "home", label: "Tasks" },
  { id: "profile", label: "Invoices" },
  { id: "settings", label: "Support Tickets" },
  { id: "notifications", label: "Clients" },
  { id: "leads", label: "Leads" },
  { id: "knowledges", label: "Knowledges" },
]

const ProductivityTabs = () => {
  const [activeTab, setActiveTab] = useState("home")

  return (
    <div className="hidden w-full md:flex justify-center">
      <SlidingTab
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        className="max-w-3xl"
      />
    </div>
  )
}

export default ProductivityTabs
