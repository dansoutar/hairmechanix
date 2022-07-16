import React from 'react'

import { Box, Text } from '@chakra-ui/react'
import { ServiceCard } from '../ServiceCard'
import { HmContainer } from '../HmContainer'

const serviceDescription = `Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
exercitation ullamco laboris nisi ut aliquip ex ea commodo 
consequat.
`

const services = [
  {
    title: 'Hair',
    description: serviceDescription
  },
  {
    title: 'Color',
    description: serviceDescription
  },
  {
    title: 'Styling',
    description: serviceDescription
  },
  {
    title: 'Beard & Moustache',
    description: serviceDescription
  },
  {
    title: 'Waxing',
    description: serviceDescription
  },
  {
    title: 'Children',
    description: serviceDescription
  }
]

const Services = () => {
  return (
    <Box as='section' className='services-section' p={['4', '12']}>
      <HmContainer>
        <Text className='title' mb={8}>
          Services
        </Text>
        <Box display='grid' gridTemplateColumns={['1fr', '1fr', '1fr  1fr', '1fr  1fr 1fr']} gridGap='1rem'>
          {services.map(({ title, description }) => (
            <ServiceCard {...{ title, description }} key={title} />
          ))}
        </Box>
      </HmContainer>
    </Box>
  )
}

export { Services }
