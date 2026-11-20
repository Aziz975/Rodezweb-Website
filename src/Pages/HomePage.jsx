import React from 'react'
import HeroMarquee from '../components/Home/HeroMarquee'
import DigitalMarketing from '../components/Home/DigitalMarketing'
import ContactPage from '../components/Contact/ContactPage'

import AboutUs from '../Components/AboutUs/AboutUs'
import ServicesSection from '../components/Home/ServiceSection'
import ProcessSection from '../components/Home/ProcessSection'
import TestimonialsSection from '../components/Home/TestimonialsSection'
import BlogSection from '../components/Home/BlogSection'
import WhyChooseSection from '../components/Home/WhyChooseSection'
import FaqSection from '../components/Home/FaqSection'


const Home = () => {
  return (
   <>
  <HeroMarquee></HeroMarquee>
  <DigitalMarketing></DigitalMarketing>
  <ServicesSection></ServicesSection>
  <ProcessSection></ProcessSection>
  <TestimonialsSection></TestimonialsSection>
  <BlogSection></BlogSection>
  <WhyChooseSection></WhyChooseSection>
  <FaqSection></FaqSection>
   </>
  )
}

export default Home
