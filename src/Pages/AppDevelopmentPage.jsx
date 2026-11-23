import React from 'react'
import Hero from '../components/Services/AppDevelopment/Hero'
import AppGrowthSection from '../components/Services/AppDevelopment/AppGrowthSection'
import AppBusinessImpact from '../components/Services/AppDevelopment/AppBusinessImpact'
import AppProcessFaqSection from '../components/Services/AppDevelopment/AppProcessFaqSection'
import TrustedBySection from '../components/Services/AppDevelopment/TrustedBySection'

import PhoneShowcase from '../components/Services/AppDevelopment/PhoneShowCase'



const AppDevelopment = () => {
  return (
      <>
    <Hero></Hero>
    <AppGrowthSection></AppGrowthSection>
    <PhoneShowcase></PhoneShowcase>
        <AppProcessFaqSection></AppProcessFaqSection>

    <AppBusinessImpact></AppBusinessImpact>
    <TrustedBySection></TrustedBySection>
      </>
  )
}

export default AppDevelopment
