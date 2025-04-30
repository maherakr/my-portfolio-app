import React from 'react'
import Hero from '@/components/hero'
import Experience from '@/components/experience'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Bio from '@/components/bio'

export default  function Home() {
  
  return (
  <div>
  <Hero />
  <Bio />
  <Experience />
  <Projects />
  <ContactMe />
  </div>
   )
}
