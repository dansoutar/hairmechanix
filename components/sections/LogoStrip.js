import React from 'react'

import { Box, Link } from '@chakra-ui/react'
import Image from 'next/image'

import { HmContainer } from '../HmContainer'
import { logoStripImages } from '../../public/logo-strip-images'

const logoStripLinks = {
  schwarzkopf: 'https://www.schwarzkopf-professional.ca/en/home.html',
  colorProof: 'https://colorproof.com',
  olaplex: 'https://www.facebook.com/olaplex/',
  layrite: 'https://www.amazon.ca/Layrite-Pomade-Original-120-Gram/dp/B01MA55K6I'
}

const Logo = ({ src, link, maxWidth }) => (
  <Box placeItems='center' maxWidth={maxWidth}>
    <Link href={link} isExternal>
      <Image className='logostrip-logo' src={src} alt='partner logo' />
    </Link>
  </Box>
)

const LogoStrip = () => {
  return (
    <Box as='section' className='our-team-section' paddingY='12%'>
      <Box p='6%'>
        <HmContainer>
          <Box display='flex' flexWrap='wrap' justifyContent={{ base: 'center', md: 'space-between' }} gap='1rem'>
            <Logo link={logoStripLinks.schwarzkopf} maxWidth='215px' src={logoStripImages.schwarzkopf} />
            <Logo link={logoStripLinks.colorProof} maxWidth='215px' src={logoStripImages.colorProof} />
            <Logo link={logoStripLinks.olaplex} maxWidth='215px' src={logoStripImages.olaplex} />
            <Logo link={logoStripLinks.layrite} maxWidth='215px' src={logoStripImages.layrite} />
          </Box>
        </HmContainer>
      </Box>
    </Box>
  )
}

export { LogoStrip }
