import React from 'react'

import { Box, Stack, VStack, Link } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { HmContainer } from './HmContainer'

import { theme } from '../styles/theme'

const PHONE_NUMBER = '(519) 974-5453'
const PHONE_NUMBER_HREF = '15199745453'

const infoColumns = [
  {
    title: 'Contact',
    line1: PHONE_NUMBER,
    line2: 'info.hairmechanix@gmail.com'
  },
  {
    title: 'Hours',
    line1: 'Tues to Fri 9am - 7pm',
    line2: 'Fri 9am - 5pm',
    line3: 'Sat 8am - 3pm'
  },
  {
    title: 'Location',
    line1: '7826 Wyandotte St. E',
    line2: 'Windsor, ON'
  }
]

const InfoBar = () => {
  return (
    <Box position='relative' h='0' zIndex='100'>
      <HmContainer transform={['translateY(-30%)', 'translateY(-40%)', 'translateY(-50%)']}>
        <Stack
          className='info-bar'
          direction={['column', 'row']}
          backgroundColor={theme.colors.brand.gold}
          py='40px'
          display='grid'
          gap='1.5rem'
          gridTemplateColumns={['1fr', '1fr', '1fr 1fr 1fr']}
        >
          {infoColumns.map(({ title, line1, line2, line3 }) => {
            if (title === 'Contact') {
              return (
                <VStack key={title} color='#FFF' textAlign='center' spacing={2}>
                  <Text color={theme.colors.brand.black} fontWeight='bold'>
                    {title}
                  </Text>
                  <Link href={`tel:${PHONE_NUMBER_HREF}`}>{line1}</Link>
                  <Link href={`mailto:${line2}`}>{line2}</Link>
                </VStack>
              )
            }

            return (
              <VStack key={title} color='#FFF' textAlign='center' spacing={2}>
                <Text color={theme.colors.brand.black} fontWeight='bold'>
                  {title}
                </Text>
                <Text>{line1}</Text>
                <Text>{line2}</Text>
                <Text>{line3}</Text>
              </VStack>
            )
          })}
        </Stack>
      </HmContainer>
    </Box>
  )
}

export { InfoBar }
