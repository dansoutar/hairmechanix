import React from 'react'

import Image from 'next/image'

import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

import { CtaButton } from '../CtaButton'
import Navbar from '../Navbar'
import HmHalfContainer from '../HmHalfContainer'
import heroImg from '../../public/hero-img.png'

const Hero = () => {
  return (
    <Box as='section' className='hero-section' display='flex'>
      <Navbar />
      <Box className='left' w='50%' display='grid' alignItems='center' justifyContent='end'>
        <HmHalfContainer justifyContent='start'>
          <Box className='hero-content' maxW='478px'>
            <Text className='title' mb='1rem' lineHeight='normal'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Text>
            <Text mb='2rem'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </Text>
            <CtaButton />
          </Box>
        </HmHalfContainer>
      </Box>
      <Box className='right' w='50%' h='100vh' maxH='1025px' position='relative'>
        <Image className='chairImg' src={heroImg} alt='barber chair' h='100%' objectFit='cover' layout='responsive' />
      </Box>
    </Box>
  )
}

export default Hero
