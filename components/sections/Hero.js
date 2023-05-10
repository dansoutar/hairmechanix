import React from 'react'

import Image from 'next/image'

import { Box } from '@chakra-ui/react'

import { NavBar } from '../Navbar'
import HmHalfContainer from '../HmHalfContainer'
import scissorsImage from '../../public/scissors.jpg'

import { theme } from '../../styles/theme'
import HeroContent from '../HeroContent'

const Hero = () => {
  return (
    <Box as='section' className='hero-section' id='hero' display='flex' flexDirection={['column', 'column', 'row']}>
      <NavBar />
      <Box
        backgroundColor={theme.colors.brand.black}
        className='left'
        display={['none', 'none', 'grid']}
        flexBasis={['auto', 'auto', '50%']}
        h={['80vh', '80vh', 'unset']}
        mt={['unset']}
        pl={['unset', 'unset', '2rem']}
        alignItems='center'
        justifyContent={['center', 'center', 'end']}
      >
        <HmHalfContainer justifyContent={['center', 'center', 'start']}>
          <HeroContent />
        </HmHalfContainer>
      </Box>
      <Box className='right' flexBasis={['unset', 'unset', '50%']} h='100vh' maxH='1025px' position='relative'>
        <Box className='image-parent' filter='auto' brightness='80%' h='100%'>
          <Image
            className='chairImg'
            src={scissorsImage}
            alt='barber chair'
            h='100%'
            objectFit='cover'
            layout='responsive'
          />
        </Box>

        <Box
          position='absolute'
          inset='0'
          display={['flex', 'flex', 'none']}
          justifyContent='center'
          alignItems='start'
          paddingTop='30%'
        >
          <HeroContent />
        </Box>
      </Box>
    </Box>
  )
}

export { Hero }
