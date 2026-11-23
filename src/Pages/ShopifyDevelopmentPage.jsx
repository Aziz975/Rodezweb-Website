import React from 'react'
import Hero from '../components/Services/ShopifyDevelopment/Hero'
import ShopifyBusinessImpact from '../components/Services/ShopifyDevelopment/ShopifyBusinessImpact'
import ShopifyGrowthSection from '../components/Services/ShopifyDevelopment/ShopifyGrowthSection'
import ShopifyProcessFaqSection from '../components/Services/ShopifyDevelopment/ShopifyProcessFaqSection'
import TrustedBySection from '../components/Services/ShopifyDevelopment/TrustedBySection'

const ShopifyDevelopment = () => {
  return (
    <main className="bg-[#1c1c1c] font-sans overflow-x-hidden">
      <Hero />
      <ShopifyBusinessImpact />
      <ShopifyGrowthSection />
      <ShopifyProcessFaqSection />
      <TrustedBySection />
    </main>
  )
}

export default ShopifyDevelopment