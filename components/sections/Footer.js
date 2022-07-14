import React from 'react'

import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'

import { HmContainer } from '../HmContainer'

const Footer = () => {
  return (
    <Box className='footer' as='section'>
      <HmContainer>
        <Flex>
          <Box className='left' flexBasis='55%'>
            Left
          </Box>
          <Box className='right'>Right</Box>
        </Flex>
      </HmContainer>
    </Box>
  )
}

export { Footer }
