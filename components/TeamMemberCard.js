import React from 'react'

import { Box, Link } from '@chakra-ui/react'
import { VStack, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'

import { theme } from '../styles/theme'
import igIcon from '../public/icons/ig-icon.svg'

const INSTAGRAM_URL = 'https://www.instagram.com/'

const TeamMemberCard = ({ name, jobTitle, igLink, image }) => {
  return (
    <>
      <VStack
        className='image-parent'
        spacing={2}
        alignItems='start'
        p={5}
        shadow='md'
        borderWidth='1px'
        h='100%'
        minW='220px'
        minH='450px'
        maxW='400px'
        backgroundColor='#FFF'
      >
        <Image h='100%' objectFit='cover' src={image} mb='1rem' alt='Team Member Photo' />
        <div>
          <Heading fontSize='lg'>{name}</Heading>
          <Text color={theme.colors.brand.black}>{jobTitle}</Text>
        </div>
        <Link href={`${INSTAGRAM_URL}/${igLink}`} display='flex' gap='6px' color={theme.colors.brand.gold} isExternal>
          <Box maxW='24px'>
            <Image src={igIcon} alt='instagram icon' />
          </Box>
          <Box>@{igLink}</Box>
        </Link>
      </VStack>
    </>
  )
}

export { TeamMemberCard }
