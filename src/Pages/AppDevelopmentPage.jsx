import React from 'react'
import Hero from '../components/Services/AppDevelopment/Hero'
import AppGrowthSection from '../components/Services/AppDevelopment/AppGrowthSection'
import AppBusinessImpact from '../components/Services/AppDevelopment/AppBusinessImpact'
import AppProcessFaqSection from '../components/Services/AppDevelopment/AppProcessFaqSection'
import TrustedBySection from '../Components/Services/ShopifyDevelopment/TrustedBySection'

const AppDevelopment = () => {
  return (
      <>
    <Hero></Hero>
    <AppGrowthSection></AppGrowthSection>
    <AppBusinessImpact></AppBusinessImpact>
    <AppProcessFaqSection></AppProcessFaqSection>
    <TrustedBySection></TrustedBySection>
      </>
  )
}

export default AppDevelopment
