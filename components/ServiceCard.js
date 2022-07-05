import React from 'react'

import { Box, Heading, Text } from '@chakra-ui/react'

import { InfoOutlineIcon } from '@chakra-ui/icons'

const ServiceCard = ({ title, description }) => {
  return (
    <>
      <Box p={5} shadow='md' borderWidth='1px' maxW='360px'>
        <InfoOutlineIcon mb='1rem' w={8} h={8} />
        <Heading fontSize='lg'>{title}</Heading>
        <Text mt={4}>{description}</Text>
      </Box>
    </>
  )
}

export { ServiceCard }
