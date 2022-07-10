import React from 'react'

import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import { HmContainer } from '../HmContainer'
import { theme } from '../../styles/theme'

const IgBox = () => (
  <Box w='288px' h='288px' p='20px' display='grid' placeItems='center' backgroundColor={theme.colors.brand.midGrey}>
    <ExternalLinkIcon w={12} h={12} color='white' />
  </Box>
)

const OurWork = () => {
  return (
    <Box as='section' className='our-team-section'>
      <Box pt={16}>
        <HmContainer>
          <Box display='flex' justifyContent='space-between'>
            <Text className='title' mb={8}>
              Our Work
            </Text>
          </Box>
        </HmContainer>
        <Box display='flex' justifyContent='center' overflowX='hidden' gap='1px'>
          <IgBox />
          <IgBox />
          <IgBox />
          <IgBox />
          <IgBox />
          <IgBox />
        </Box>
      </Box>
    </Box>
  )
}

export { OurWork }
