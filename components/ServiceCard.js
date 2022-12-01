import React from 'react'

import { Box, Heading, Text } from '@chakra-ui/react'

import { InfoOutlineIcon } from '@chakra-ui/icons'

import { theme } from '../styles/theme'

const ServiceCard = ({ title, description }) => {
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
        <InfoOutlineIcon mb='1rem' w={8} h={8} />
        <Heading fontSize='lg'>{title}</Heading>
        <Text mt={4}>{description}</Text>
      </Box>
    </>
  )
}

export { ServiceCard }
