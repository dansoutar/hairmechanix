import { React, useRef } from 'react'

import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { HmContainer } from '../HmContainer'
import { TeamMemberCard } from '../TeamMemberCard'
import { theme } from '../../styles/theme'
import slideLeftIcon from '../../public/slide-left.png'
import slideRightIcon from '../../public/slide-right.png'
import { teamImages } from '../../public/team'

const teamMembers = [
  {
    name: 'Helene Briffa',
    jobTitle: 'Owner, Stylist',
    igLink: 'thehairmechanix',
    image: teamImages.helene
  },
  {
    name: 'Sloane Rowe',
    jobTitle: 'General Manager, Stylist',
    igLink: 'sloanehairmechanix',
    image: teamImages.sloane
  },
  {
    name: 'Cole Briffa',
    jobTitle: 'Manager, Barber',
    igLink: 'briffathebarber',
    image: teamImages.cole
  },
  {
    name: 'Grace Powers',
    jobTitle: 'Stylist, Brow Artist',
    igLink: 'hairbygracepowers',
    image: teamImages.grace
  },
  {
    name: 'Carrie Cudney',
    jobTitle: 'Stylist',
    igLink: 'clc_hair',
    image: teamImages.carrie
  },
  {
    name: 'Paige Matthews',
    jobTitle: 'Stylist',
    igLink: 'paperhaircutz',
    image: teamImages.paige
  },
  {
    name: 'Gabriella Hernandez',
    jobTitle: 'Receptionist',
    igLink: 'thehairmechanix',
    image: teamImages.gab
  }
]

const buttonStyles = {
  backgroundColor: 'unset',
  padding: 0,
  margin: 0
}

const OurTeam = () => {
  const swiperRef = useRef()

  const breakpoints = {
    0: {
      slidesPerView: 1
    },
    640: {
      slidesPerView: 1.5
    },
    768: {
      slidesPerView: 2.5
    },
    1140: {
      slidesPerView: 3.25
    }
  }

  const SlidePrevIcon = <Image src={slideLeftIcon} w='24px' h='24px' alt='slide prev icon' />
  const SlidePrevButton = () => (
    <Button style={buttonStyles} onClick={() => swiperRef.current.slidePrev()}>
      {SlidePrevIcon}
    </Button>
  )

  const SlideNextIcon = <Image src={slideRightIcon} w='24px' h='24px' alt='slide prev icon' />
  const SlideNextButton = () => (
    <Button style={buttonStyles} onClick={() => swiperRef.current.slideNext()}>
      {SlideNextIcon}
    </Button>
  )

  const attachSwiperRef = (swiper) => (swiperRef.current = swiper)

  return (
    <Box as='section' id='team-section' backgroundColor={theme.colors.brand.black}>
      <Box py={['12', '20']}>
        <HmContainer>
          <Box display='flex' justifyContent='space-between'>
            <Text color={theme.colors.brand.white} className='title' mb={8}>
              Our Team
            </Text>
            <ButtonGroup>
              <SlidePrevButton />
              <SlideNextButton />
            </ButtonGroup>
          </Box>
        </HmContainer>

        <Box marginLeft={'max(5%, calc((100vw - 1040px)/2))'}>
          <Swiper breakpoints={breakpoints} spaceBetween={25} onSwiper={attachSwiperRef}>
            {teamMembers.map(({ name, ...rest }) => (
              <SwiperSlide key={name}>
                <TeamMemberCard key={name} {...{ name }} {...rest} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Box>
  )
}

export { OurTeam }
