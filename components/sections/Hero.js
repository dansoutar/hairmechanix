import React from 'react'

import { Box } from '@chakra-ui/react'
import Image from 'next/image'

import Navbar from '../Navbar'
import heroImg from '../../public/hero-img.png'

const Hero = () => {
  return (
    <Box as='section' className='hero-section'>
      <Navbar />
      <Box w='50%'>
        <Image src={heroImg} alt='barber chair' />
      </Box>
    </Box>
  )
}

export default Hero
