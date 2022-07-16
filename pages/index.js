import Head from 'next/head'

import { InfoBar } from '../components/InfoBar'
import { Hero } from '../components/sections/Hero'
import { About } from '../components/sections/About'
import { Services } from '../components/sections/Services'
import { OurTeam } from '../components/sections/OurTeam'
import { OurWork } from '../components/sections/OurWork'
import { LogoStrip } from '../components/sections/LogoStrip'
import { Footer } from '../components/sections/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hair Mechanix</title>
      </Head>

      <Hero />
      <InfoBar />
      <About />
      <Services />
      <OurTeam />
      <OurWork />
      <LogoStrip />
      <Footer />
    </>
  )
}
