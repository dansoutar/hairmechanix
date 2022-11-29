import React from 'react'

import Image from 'next/image'

import { Box, Text } from '@chakra-ui/react'

import { CtaButton } from '../CtaButton'
import Navbar from '../Navbar'
import HmHalfContainer from '../HmHalfContainer'
import heroImg from '../../public/hero-img.png'

import { theme } from '../../styles/theme'

const Hero = () => {
  return (
    <Box as='section' className='hero-section' display='flex' flexDirection={['column', 'column', 'row']}>
      <Navbar className='nav' />
      <Box
        backgroundColor={theme.colors.brand.black}
        className='left'
        flexBasis={['auto', 'auto', '50%']}
        h={['80vh', '80vh', 'unset']}
        mt={['3rem', '3rem', 'unset']}
        pl={['unset', 'unset', '2rem']}
        display='grid'
        alignItems='center'
        justifyContent={['center', 'center', 'end']}
      >
        <HmHalfContainer justifyContent={['center', 'center', 'start']}>
          <Box className='hero-content' color={theme.colors.white} w='88%' maxW='478px'>
            <Text className='title' mb='1rem' lineHeight='normal'>
              Welcome to The Hair Mechanix
            </Text>
            <Text mb='2rem'>
              We are an inclusive salon, offering a blend of services to anyone looking for a unique experience.
            </Text>
            <CtaButton />
          </Box>
        </HmHalfContainer>
      </Box>
      <Box
        className='right'
        flexBasis='50%'
        display={['none', 'none', 'block']}
        h='100vh'
        maxH='1025px'
        position='relative'
      >
        <Image className='chairImg' src={heroImg} alt='barber chair' h='100%' objectFit='cover' layout='responsive' />
      </Box>
    </Box>
  )
}

export { Hero }
