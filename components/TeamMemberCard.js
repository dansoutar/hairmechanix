import React from 'react'

import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, VStack, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'

import { theme } from '../styles/theme'

const TeamMemberCard = ({ name, jobTitle, igLink, image }) => {
  return (
    <>
      <VStack
        spacing={2}
        alignItems='start'
        p={5}
        shadow='md'
        borderWidth='1px'
        minW='320px'
        minH='450px'
        maxW='400px'
        backgroundColor='#FFF'
      >
        <Image src={image} mb='1rem' alt='Team Member Photo' />
        <Heading fontSize='lg'>{name}</Heading>
        <Text mt={4} color={theme.colors.brand.gold}>
          {jobTitle}
        </Text>
        <Link href={igLink} isExternal>
          <ExternalLinkIcon w={6} h={6} />
        </Link>
      </VStack>
    </>
  )
}

export { TeamMemberCard }
