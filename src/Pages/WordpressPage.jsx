import React from 'react'
import Hero from '../Components/Services/WordpressDevelopment/Hero'
import WordpressBusinessImpact from '../Components/Services/WordpressDevelopment/WordpressBusinessImpact'
import WordpressGrowthSection from '../Components/Services/WordpressDevelopment/WordpressGrowthSection'
import WordpressProcessFaqSection from '../Components/Services/WordpressDevelopment/WordpressProcessFaqSection'
import TrustedBySection from '../Components/Services/WordpressDevelopment/TrustedBySection'

const WordpressPage = () => {
  return (
    <main className="bg-[#1c1c1c] font-sans overflow-x-hidden">
      <Hero />
      <WordpressBusinessImpact />
      <WordpressGrowthSection />
      <WordpressProcessFaqSection />
      <TrustedBySection />
    </main>
  )
}

export default WordpressPage