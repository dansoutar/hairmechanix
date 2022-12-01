import React from 'react'

import { Box, Text } from '@chakra-ui/react'
import { ServiceCard } from '../ServiceCard'
import { HmContainer } from '../HmContainer'

import { theme } from '../../styles/theme'

const services = [
  {
    title: 'Hair',
    description:
      'Any hair cut to your taste using high quality products to suit your hair type. Finished with a blow-dry and style. See our Barber for classic cuts and beard styling for a specialized service. '
  },
  {
    title: 'Color',
    description:
      'Using the award winning color line from Schwarzkopf professional, we offer unique color services to suit your individual needs. '
  },
  {
    title: 'Specialty Services',
    description:
      'Offering a wide range of specialty services to suit your specific needs. From smoothing treatments, perms, and extensions, we can make all your hair dreams come true. '
  },
  {
    title: 'Styling',
    description: 'With creativity feeling our fire, we can deliver various styles for everyday, or a special event. '
  },
  {
    title: 'Bridal Services',
    description:
      'Book your special day with us for a full service experience, including hair and makeup, either in house or mobile. '
  },
  {
    title: 'Waxing',
    description:
      'Let our brow stylist reshape and clean up your brows to suit your face shape. Also servicing all facial waxing. '
  }
]

const Services = () => {
  return (
    <Box as='section' backgroundColor={theme.colors.brand.lightGrey} id='services-section' p={['4', '20']}>
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
