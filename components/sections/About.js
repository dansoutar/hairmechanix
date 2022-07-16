import React from 'react'

import { theme } from '../../styles/theme'

import Image from 'next/image'

import { AbsoluteCenter, Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

import { CtaButton } from '../CtaButton'
import HmHalfContainer from '../HmHalfContainer'
import aboutImg from '../../public/about-img.png'

const About = () => {
  return (
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
              Lorem ipsum dolor
            </Text>
            <Text mb='1.5rem' fontSize='lg' fontWeight='600' letterSpacing='1px'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Text>
            <Text mb='2rem'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Text>
            <CtaButton />
          </Box>
        </HmHalfContainer>
      </Box>
    </Box>
  )
}

export { About }
