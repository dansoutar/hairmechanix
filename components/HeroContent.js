import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { CtaButton } from './CtaButton'
import { theme } from '../styles/theme'

export default function HeroContent() {
  return (
    <Box className='hero-content' color={theme.colors.brand.white} w='88%'>
      <Text className='title' mb='1rem' lineHeight='normal'>
        Welcome to The Hair Mechanix
      </Text>
      <Text mb='2rem'>
        We are an inclusive salon, offering a blend of services to anyone looking for a unique experience.
      </Text>
      <CtaButton />
    </Box>
  )
}
