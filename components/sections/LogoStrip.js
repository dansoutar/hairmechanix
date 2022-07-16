import React from 'react'

import { Box } from '@chakra-ui/react'
import Image from 'next/image'

import { HmContainer } from '../HmContainer'
import logo from '../../public/hm-logo-1.png'

const Logo = () => <Image className='logostrip-logo' src={logo} alt='hair mechanix logo' style={{ opacity: 0.2 }} />

const LogoStrip = () => {
  return (
    <Box as='section' className='our-team-section'>
      <Box p='6%'>
        <HmContainer>
          <Box display='flex' flexWrap='wrap' justifyContent='center' overflowX='hidden' gap='6rem'>
            {Array.from({ length: 5 }).map((_logo, idx) => (
              <Logo key={idx} />
            ))}
          </Box>
        </HmContainer>
      </Box>
    </Box>
  )
}

export { LogoStrip }
