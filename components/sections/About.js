import React from 'react'

import { theme } from '../../styles/theme'

import Image from 'next/image'

import { Box, Text } from '@chakra-ui/react'

import { CtaButton } from '../CtaButton'
import HmHalfContainer from '../HmHalfContainer'
import aboutImg from '../../public/about-img.png'

const About = () => (
  <Box as='section' className='hero-section' display='flex'>
    <Box className='right' display={['none', 'none', 'block']} w='50%' h='100vh' maxH='1025px' position='relative'>
      <Image className='chairImg' src={aboutImg} alt='barber chair' h='100%' objectFit='cover' layout='responsive' />
    </Box>
    <Box className='left' w={['100%', '100%', '50%']} pt={['4rem', '4rem', '0']} position='relative'>
      <HmHalfContainer className='about-container' justifyContent='end' width='100%' maxW='520px' pl='1rem'>
        <Box className='about-content' maxW='478px'>
          <Text className='title' mb='1rem' lineHeight='normal'>
            About Us
          </Text>
          <Text mb='1rem' color={theme.colors.brand.gold}>
            The Hair Mechanix is a premier hair salon, offering the latest in trends and styles
          </Text>
          <Text mb='2rem'>
            Focusing on education, we are committed to growth and advancements in our field to be able to deliver the
            best quality services in our industry. From cuts, and colours to speciality services, such as extensions and
            smoothing treatments, our staff is prepared to give you an experience that is tailored to your specific
            needs and desires. We carry a variety of high end products including Schwarzkopf, Colorproof, Olaplex and
            Layrite which are sure to change your styling capabilities at home. Let our trained professionals teach you
            about our carefully selected product lines.
          </Text>
          <CtaButton />
        </Box>
      </HmHalfContainer>
    </Box>
  </Box>
)

export { About }
