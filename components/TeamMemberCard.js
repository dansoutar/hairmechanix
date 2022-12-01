import React from 'react'

import { Link } from '@chakra-ui/react'
import { VStack, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'

import { theme } from '../styles/theme'
import igIcon from '../public/ig-icon.png'

const TeamMemberCard = ({ name, jobTitle, igLink, image }) => {
  return (
    <>
      <VStack
        className='team-member-card-stack'
        spacing={2}
        alignItems='start'
        p={5}
        shadow='md'
        borderWidth='1px'
        h='100%'
        minW='320px'
        minH='450px'
        maxW='400px'
        backgroundColor='#FFF'
      >
        <Image h='100%' objectFit='cover' src={image} mb='1rem' alt='Team Member Photo' />
        <Heading fontSize='lg'>{name}</Heading>
        <Text mt={4} color={theme.colors.brand.gold}>
          {jobTitle}
        </Text>
        <Link href={igLink} isExternal>
          <Image src={igIcon} alt='instagram icon' />
        </Link>
      </VStack>
    </>
  )
}

export { TeamMemberCard }
