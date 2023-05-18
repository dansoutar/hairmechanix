import React from 'react'

import { Box, Text } from '@chakra-ui/react'
import { ServiceCard } from '../ServiceCard'
import { HmContainer } from '../HmContainer'

import { theme } from '../../styles/theme'
import { servicesIcons } from '../../public/serviceIcons'

const services = [
  {
    title: 'Hair',
    description:
      'Any hair cut to your taste using high quality products to suit your hair type. Finished with a blow-dry and style. See our Barber for classic cuts and beard styling for a specialized service.',
    icon: servicesIcons.haircutIcon
  },
  {
    title: 'Color',
    description:
      'Using the award winning color line from Schwarzkopf professional, we offer unique color services to suit your individual needs.',
    icon: servicesIcons.colorIcon
  },
  {
    title: 'Specialty Services',
    description:
      'Offering a wide range of specialty services to suit your specific needs. From smoothing treatments, perms, and extensions, we can make all your hair dreams come true.',
    icon: servicesIcons.specialtyIcon
  },
  {
    title: 'Styling',
    description: 'With creativity feeling our fire, we can deliver various styles for everyday, or a special event.',
    icon: servicesIcons.stylingIcon
  },
  {
    title: 'Bridal Services',
    description:
      'Book your special day with us for a full service experience, including hair and makeup, either in house or mobile.',
    icon: servicesIcons.bridalIcon
  },
  {
    title: 'Waxing',
    description:
      'Let our brow stylist reshape and clean up your brows to suit your face shape. Also servicing all facial waxing.',
    icon: servicesIcons.waxingIcon
  }
]

const Services = () => {
  return (
    <Box
      as='section'
      backgroundColor={theme.colors.brand.lightGrey}
      id='services-section'
      p={['12', '20']}
      px={{ base: 0 }}
    >
      <HmContainer>
        <Text className='title' mb={8}>
          Services
        </Text>
        <Box display='grid' gridTemplateColumns={['1fr', '1fr', '1fr  1fr', '1fr  1fr 1fr']} gridGap='1rem'>
          {services.map(({ title, description, icon }) => (
            <ServiceCard {...{ title, description, icon }} key={title} />
          ))}
        </Box>
      </HmContainer>
    </Box>
  )
}

export { Services }
