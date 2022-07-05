import React from 'react'

import { Box, Stack, VStack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import HmContainer from './HmContainer'

import { theme } from '../styles/theme'

const infoColumns = [
  {
    title: 'Contact',
    line1: '(519) 974-5453',
    line2: 'contact@hairmechanix.ca'
  },
  {
    title: 'Hours',
    line1: 'Tues to Fri 9am - 7pm',
    line2: 'Sat 9am - 3pm'
  },
  {
    title: 'Location',
    line1: '7826 Wyandotte St. E',
    line2: 'Windsor, ON'
  }
]

const InfoBar = () => {
  return (
    <Box position='relative' h='1px' zIndex='100'>
      <HmContainer transform='translateY(-50%)'>
        <Stack
          direction={['column', 'row']}
          backgroundColor={theme.colors.brand.black}
          py='50px'
          display='grid'
          gridTemplateColumns='1fr 1fr 1fr'
        >
          {infoColumns.map(({ title, line1, line2 }) => (
            <VStack key={title} color='#FFF' textAlign='center' spacing={5}>
              <Text color={theme.colors.brand.gold} fontWeight='bold'>
                {title}
              </Text>
              <Text>{line1}</Text>
              <Text>{line2}</Text>
            </VStack>
          ))}
        </Stack>
      </HmContainer>
    </Box>
  )
}

export { InfoBar }
