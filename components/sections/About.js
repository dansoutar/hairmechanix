import React from 'react'

import { theme } from '../../styles/theme'

import Image from 'next/image'

import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

import { CtaButton } from '../CtaButton'
import HmHalfContainer from '../HmHalfContainer'
import aboutImg from '../../public/about-img.png'

const Hero = () => {
  return (
    <Box as='section' className='hero-section' display='flex'>
      <Box className='right' w='50%' h='100vh' maxH='1025px' position='relative'>
        <Image className='chairImg' src={aboutImg} alt='barber chair' h='100%' objectFit='cover' layout='responsive' />
      </Box>
      <Box w='50%' display='grid' alignItems='center' justifyContent='start'>
        <HmHalfContainer>
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

export default Hero
