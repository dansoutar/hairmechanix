import React from 'react'

import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

import { HmContainer } from '../HmContainer'
import { TeamMemberCard } from '../TeamMemberCard'

import teamImg from '../../public/about-img.png'

import { theme } from '../../styles/theme'

const teamMembers = [
  {
    name: 'Lorem Ipsum',
    jobTitle: 'Lorem Ipsum Title',
    igLink: 'https://www.instagram.com',
    image: teamImg
  },
  {
    name: 'Lorem Ipsum',
    jobTitle: 'Lorem Ipsum Title',
    igLink: 'https://www.instagram.com',
    image: teamImg
  },
  {
    name: 'Lorem Ipsum',
    jobTitle: 'Lorem Ipsum Title',
    igLink: 'https://www.instagram.com',
    image: teamImg
  },
  {
    name: 'Lorem Ipsum',
    jobTitle: 'Lorem Ipsum Title',
    igLink: 'https://www.instagram.com',
    image: teamImg
  },
  {
    name: 'Lorem Ipsum',
    jobTitle: 'Lorem Ipsum Title',
    igLink: 'https://www.instagram.com',
    image: teamImg
  },
  {
    name: 'Lorem Ipsum',
    jobTitle: 'Lorem Ipsum Title',
    igLink: 'https://www.instagram.com',
    image: teamImg
  },
  {
    name: 'Lorem Ipsum',
    jobTitle: 'Lorem Ipsum Title',
    igLink: 'https://www.instagram.com',
    image: teamImg
  },
  {
    name: 'Lorem Ipsum',
    jobTitle: 'Lorem Ipsum Title',
    igLink: 'https://www.instagram.com',
    image: teamImg
  }
]

const OurTeam = () => {
  return (
    <Box as='section' className='our-team-section' backgroundColor={theme.colors.brand.lightGrey}>
      <Box p={16}>
        <HmContainer>
          <Box display='flex' justifyContent='space-between'>
            <Text className='title' mb={8}>
              Our Team
            </Text>
          </Box>
          <Box display='flex' gap='1rem' overflowX='hidden'>
            {teamMembers.map(({ name, ...rest }) => (
              <TeamMemberCard key={name} {...{ name }} {...rest} />
            ))}
          </Box>
        </HmContainer>
      </Box>
    </Box>
  )
}

export { OurTeam }
