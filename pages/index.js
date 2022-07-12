import Head from 'next/head'

import { InfoBar } from '../components/InfoBar'
import { Hero } from '../components/sections/Hero'
import { About } from '../components/sections/About'
import { Services } from '../components/sections/Services'
import { OurTeam } from '../components/sections/OurTeam'
import { OurWork } from '../components/sections/OurWork'
import { LogoStrip } from '../components/sections/LogoStrip'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hair Mechanix</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Hero />
      <InfoBar />
      <About />
      {/* <Services /> */}
      {/* <OurTeam /> */}
      {/* <OurWork /> */}
      {/* <LogoStrip /> */}
    </div>
  )
}
