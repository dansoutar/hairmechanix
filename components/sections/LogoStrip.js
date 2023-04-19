import React from 'react'

import { Box } from '@chakra-ui/react'
import Image from 'next/image'

import { HmContainer } from '../HmContainer'
import { logoStripImages } from '../../public/logo-strip-images'

const Logo = ({ src, maxWidth }) => (
  <Box placeItems='center' maxWidth={maxWidth}>
    <Image className='logostrip-logo' src={src} alt='partner logo' />
  </Box>
)

const LogoStrip = () => {
  return (
    <Box as='section' className='our-team-section'>
      <Box p='6%'>
        <HmContainer>
          <Box display='flex' flexWrap='wrap' justifyContent={{ base: 'center', md: 'space-between' }} gap='1rem'>
            <Logo maxWidth='215px' src={logoStripImages.schwarzkopf} />
            <Logo maxWidth='215px' src={logoStripImages.colorProof} />
            <Logo maxWidth='215px' src={logoStripImages.olaplex} />
            <Logo maxWidth='215px' src={logoStripImages.layrite} />
          </Box>
        </HmContainer>
      </Box>
    </Box>
  )
}

export { LogoStrip }
