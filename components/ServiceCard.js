import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'

import { theme } from '../styles/theme'

const ServiceCard = ({ title, description, icon }) => {
  return (
    <>
      <Box
        backgroundColor={theme.colors.brand.white}
        p={5}
        shadow='md'
        borderWidth='1px'
        minHeight={'248px'}
        maxW={['unset', 'unset', '360px']}
      >
        <Image alt='service icon' src={icon} />
        <Heading fontSize='lg'>{title}</Heading>
        <Text mt={4}>{description}</Text>
      </Box>
    </>
  )
}

export { ServiceCard }
