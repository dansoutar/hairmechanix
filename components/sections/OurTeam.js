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
import teamImg from '../../public/about-img.png'
import slideLeftIcon from '../../public/slide-left.png'
import slideRightIcon from '../../public/slide-right.png'

const teamMembers = [
  {
    name: 'Lorem Ipsum1',
    jobTitle: 'Lorem Ipsum Title',
    igLink: 'https://www.instagram.com',
    image: teamImg
  },
  {
    name: 'Lorem Ipsum2',
    jobTitle: 'Lorem Ipsum Title',
    igLink: 'https://www.instagram.com',
    image: teamImg
  },
  {
    name: 'Lorem Ipsum3',
    jobTitle: 'Lorem Ipsum Title',
    igLink: 'https://www.instagram.com',
    image: teamImg
  },
  {
    name: 'Lorem Ipsum4',
    jobTitle: 'Lorem Ipsum Title',
    igLink: 'https://www.instagram.com',
    image: teamImg
  },
  {
    name: 'Lorem Ipsum5',
    jobTitle: 'Lorem Ipsum Title',
    igLink: 'https://www.instagram.com',
    image: teamImg
  },
  {
    name: 'Lorem Ipsum6',
    jobTitle: 'Lorem Ipsum Title',
    igLink: 'https://www.instagram.com',
    image: teamImg
  },
  {
    name: 'Lorem Ipsum7',
    jobTitle: 'Lorem Ipsum Title',
    igLink: 'https://www.instagram.com',
    image: teamImg
  },
  {
    name: 'Lorem Ipsum8',
    jobTitle: 'Lorem Ipsum Title',
    igLink: 'https://www.instagram.com',
    image: teamImg
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
    <Box as='section' className='our-team-section' slidesperview={3.5} backgroundColor={theme.colors.brand.lightGrey}>
      <Box p={['4', '12']}>
        <HmContainer>
          <Box display='flex' justifyContent='space-between'>
            <Text className='title' mb={8}>
              Our Team
            </Text>
            <ButtonGroup>
              <SlidePrevButton />
              <SlideNextButton />
            </ButtonGroup>
          </Box>
          <Box display='flex' gap='1rem'>
            <Swiper breakpoints={breakpoints} spaceBetween={25} slidesPerView={3.5} onSwiper={attachSwiperRef}>
              {teamMembers.map(({ name, ...rest }) => (
                <SwiperSlide key={name}>
                  <TeamMemberCard key={name} {...{ name }} {...rest} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </HmContainer>
      </Box>
    </Box>
  )
}

export { OurTeam }
