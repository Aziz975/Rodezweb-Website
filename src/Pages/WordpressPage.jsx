import React from 'react'
import Hero from '../components/Services/WordpressDevelopment/Hero'
import WordpressBusinessImpact from '../components/Services/WordpressDevelopment/WordpressBusinessImpact'
import WordpressGrowthSection from '../components/Services/WordpressDevelopment/WordpressGrowthSection'
import WordpressProcessFaqSection from '../components/Services/WordpressDevelopment/WordpressProcessFaqSection'
import TrustedBySection from '../components/Services/WordpressDevelopment/TrustedBySection'

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