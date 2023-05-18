import React from 'react'

import { Box, Flex, Text, Link } from '@chakra-ui/react'
import Image from 'next/image'

import { HmContainer } from '../HmContainer'
import { theme } from '../../styles/theme'
import footerImg from '../../public/footer-img.png'

import { HIDE_OUR_WORK_SECTION } from '../../utils/vars'

const footerAddressInfo = (
  <>
    <Text className='title-small' color={theme.colors.brand.gold} fontWeight='bold' mb='10px'>
      Contact
    </Text>
    <Box display='flex' gap='10px' flexDirection='column'>
      <Text>7826 Wyandotte St. E</Text>
      <Text>Windsor, ON</Text>
      <Link href='tel:15199745453'>
        <Text>(519) 974-5453</Text>
      </Link>
      <Link href='mailto:info.hairmechanix@gmail.com'>
        <Text>info.hairmechanix@gmail.com</Text>
      </Link>
    </Box>
  </>
)

const footerLinks = ['About', 'Services', 'Team', ...(!HIDE_OUR_WORK_SECTION ? ['Work'] : [])].map((link) => (
  <Link key={link} href={`#${link.toLowerCase()}-section`}>
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
      minH={{ base: '360px', md: '446px' }}
      backgroundColor={theme.colors.brand.black}
      py={['12', '24']}
      color='#fff'
    >
      <HmContainer>
        <Flex gap={['2rem', '4rem', '0.6rem']} justifyContent='center' flexDirection={['column', 'column', 'row']}>
          <Box
            className='left'
            flexBasis='55%'
            flexWrap={['wrap', 'nowrap']}
            display='flex'
            alignItems='center'
            gap='2rem'
          >
            <Box
              className='footer-image'
              maxW={{ base: '100px', md: '180px', lg: '200px' }}
              maxH='246px'
              display='grid'
              placeItems='center'
            >
              <Image src={footerImg} alt='footer image' />
            </Box>
            <Box className='footer-info' display='grid' placeItems='center'>
              <Box>{footerAddressInfo}</Box>
            </Box>
          </Box>
          <Box
            display={['flex']}
            alignItems='center'
            justifyContent={['start', 'start', 'end']}
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
