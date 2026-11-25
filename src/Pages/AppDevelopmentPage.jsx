// import React from 'react'
// import Hero from '../components/Services/AppDevelopment/Hero'
// import AppGrowthSection from '../components/Services/AppDevelopment/AppGrowthSection'
// import AppBusinessImpact from '../components/Services/AppDevelopment/AppBusinessImpact'
// import AppProcessFaqSection from '../components/Services/AppDevelopment/AppProcessFaqSection'
// import TrustedBySection from '../components/Services/AppDevelopment/TrustedBySection'

// import PhoneShowcase from '../components/Services/AppDevelopment/PhoneShowCase'



// const AppDevelopment = () => {
//   return (
//       <>
//     <Hero></Hero>
//     <AppGrowthSection></AppGrowthSection>
//     <PhoneShowcase></PhoneShowcase>
//         <AppProcessFaqSection></AppProcessFaqSection>

//     <AppBusinessImpact></AppBusinessImpact>
//     <TrustedBySection></TrustedBySection>
//       </>
//   )
// }

// export default AppDevelopment



import React from 'react'
import Hero from '../components/Services/AppDevelopment/Hero'
import AppGrowthSection, { AppCustomersSection } from '../components/Services/AppDevelopment/AppGrowthSection'
import AppBusinessImpact from '../components/Services/AppDevelopment/AppBusinessImpact'
import AppProcessFaqSection from '../components/Services/AppDevelopment/AppProcessFaqSection'
import TrustedBySection from '../components/Services/AppDevelopment/TrustedBySection'
import PhoneShowcase from '../components/Services/AppDevelopment/PhoneShowCase'

/* Same order as https://rodezweb.com/app-development/ */
const AppDevelopment = () => {
  return (
    <>
      <Hero />
      <AppCustomersSection />   {/* Your Customers Are Already There */}
      <PhoneShowcase />         {/* three phones */}
      <AppGrowthSection />      {/* We Don't Just Build Apps. We Build Growth Engines. */}
      <AppBusinessImpact />     {/* stats banner + What Can A Custom Application Do */}
      <AppProcessFaqSection />  {/* From Vision To Launch + Why Choose Rodez + FAQs */}
      <TrustedBySection />      {/* CTA + Trusted by logos */}
    </>
  )
}

export default AppDevelopment