import React from 'react'

import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import Image from 'next/image'

import { HmContainer } from '../HmContainer'
import logo from '../../public/hm-logo-1.png'

const Logo = () => <Image src={logo} alt='hair mechanix logo' />

const LogoStrip = () => {
  return (
    <Box as='section' className='our-team-section'>
      <Box p='6%'>
        <HmContainer>
          <Box display='flex' justifyContent='center' overflowX='hidden' gap='6rem'>
            <Logo />
            <Logo />
            <Logo />
            <Logo />
            <Logo />
          </Box>
        </HmContainer>
      </Box>
    </Box>
  )
}

export { LogoStrip }
