import React from 'react'

import { Box, Flex, Text, Link } from '@chakra-ui/react'
import Image from 'next/image'

import { HmContainer } from '../HmContainer'
import { theme } from '../../styles/theme'
import footerImg from '../../public/footer-img.png'

const footerAddressInfo = (
  <>
    <Text className='title-small' color={theme.colors.brand.gold} fontWeight='bold' mb='10px'>
      Contact
    </Text>
    <Box display='flex' gap='10px' flexDirection='column'>
      <Text>7826 Wyandotte St. E</Text>
      <Text>Windsor, ON</Text>
      <Text>(519) 974-5453</Text>
      <Text>contact@hairmechanix.ca</Text>
    </Box>
  </>
)

const footerLinks = ['About', 'Services', 'Team', 'Work'].map((link) => (
  <Link key={link} href='#'>
    {link}
  </Link>
))

const Footer = () => {
  return (
    <Box
      className='footer'
      as='section'
      display='grid'
      placeItems='center'
      minH='446px'
      backgroundColor={theme.colors.brand.black}
      p='2rem'
      color='#fff'
    >
      <HmContainer>
        <Flex gap='0.6rem' justifyContent='center'>
          <Box
            className='left'
            flexBasis='55%'
            flexWrap={['wrap', 'nowrap']}
            display='flex'
            alignItems='center'
            gap='2rem'
          >
            <Box className='footer-image' minW='180px' maxW='246px' maxH='246px' display='grid' placeItems='center'>
              <Image src={footerImg} alt='footer image' />
            </Box>
            <Box className='footer-info' p='1rem' display='grid' placeItems='center'>
              <Box>{footerAddressInfo}</Box>
            </Box>
          </Box>
          <Box
            display={['none', 'none', 'none', 'flex']}
            alignItems='center'
            justifyContent='end'
            className='right'
            flexBasis='45%'
          >
            <Flex gap='2rem'>{footerLinks}</Flex>
          </Box>
        </Flex>
      </HmContainer>
    </Box>
  )
}

export { Footer }
