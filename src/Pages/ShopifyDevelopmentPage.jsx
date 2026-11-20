import React from 'react'
import Hero from '../Components/Services/ShopifyDevelopment/Hero'
import ShopifyBusinessImpact from '../Components/Services/ShopifyDevelopment/ShopifyBusinessImpact'
import ShopifyGrowthSection from '../Components/Services/ShopifyDevelopment/ShopifyGrowthSection'
import ShopifyProcessFaqSection from '../Components/Services/ShopifyDevelopment/ShopifyProcessFaqSection'
import TrustedBySection from '../Components/Services/ShopifyDevelopment/TrustedBySection'

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