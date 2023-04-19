import React from 'react'

import { theme } from '../../styles/theme'

import Image from 'next/image'

import { Box, Text } from '@chakra-ui/react'

import { CtaButton } from '../CtaButton'
import HmHalfContainer from '../HmHalfContainer'
import hmxSign from '../../public/hmx-sign.jpg'

const About = () => (
  <Box
    as='section'
    className='about-section'
    id='about-section'
    display='flex'
    flexDirection={['column', 'column', 'row']}
  >
    <Box
      className='right'
      flexBasis={['unset', 'unset', '50%']}
      display={['none', 'none', 'block']}
      h='100vh'
      maxH={['unset', 'unset', '1025px']}
      position='relative'
    >
      <Image className='shopImg' src={hmxSign} alt='barber chair' h='100%' objectFit='cover' layout='responsive' />
    </Box>

    <Box
      className='left'
      minH={['100vh', '100vh', 'unset']}
      h={['unset', 'unset', '100vh']}
      maxH={['unset', 'unset', '1025px']}
      flexBasis={['unset', 'unset', '50%']}
      pt={['330px', '330px', '0']}
      position='relative'
    >
      <Box p='1rem' display={['block', 'block', 'none']}>
        <Image className='shopImg-2' src={hmxSign} alt='barber chair' objectFit='cover' layout='responsive' />
      </Box>
      <HmHalfContainer className='about-container' justifyContent='end' width='100%' maxW='520px' p='1rem'>
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
