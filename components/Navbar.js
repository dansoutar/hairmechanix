import React from 'react'
import { Link, Box, Flex, Text, Stack } from '@chakra-ui/react'
import Image from 'next/image'

import { theme } from '../styles/theme'
import { HmContainer } from './HmContainer'
import logo from '../public/hm-logo-1.png'

import { HIDE_OUR_WORK_SECTION } from '../utils/vars'

const Logo = (props) => {
  return (
    <Box {...props} maxWidth={{ base: '50px', md: '100px' }}>
      <Text fontSize='lg' fontWeight='bold'>
        <Link href='/'>
          <Image src={logo} alt='hair mechanix logo' />
        </Link>
      </Text>
    </Box>
  )
}

export const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <NavBarContainer
      {...props}
      backgroundColor={theme.colors.brand.black}
      py='1rem'
      px={{ base: '1rem' }}
      position='absolute'
      top='0'
      w='100%'
      zIndex='1000'
      boxShadow={isOpen ? 'lg' : 'unset'}
    >
      <Flex align='center' flexDirection={{ base: 'column', md: 'row' }} gap={{ base: '1rem', md: '4rem' }}>
        <Flex align='center' gap='1rem'>
          <MenuToggle toggle={toggle} isOpen={isOpen} />
          <Logo w='100px' color={['white', 'white', 'primary.500', 'primary.500']} />
        </Flex>
        <MenuLinks toggle={toggle} isOpen={isOpen} />
      </Flex>
    </NavBarContainer>
  )
}

const CloseIcon = () => (
  <svg width='24' viewBox='0 0 18 18' xmlns='http://www.w3.org/2000/svg'>
    <title>Close</title>
    <path
      fill='white'
      d='M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z'
    />
  </svg>
)

const MenuIcon = () => (
  <svg width='24px' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='white'>
    <title>Menu</title>
    <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
  </svg>
)

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  )
}

const MenuItem = ({ children, isLast, toggle, to = '/', ...rest }) => {
  return (
    <Link onClick={toggle} href={to}>
      <Text display='block' {...rest}>
        {children}
      </Text>
    </Link>
  )
}

const MenuLinks = ({ isOpen, toggle }) => {
  return (
    <Box display={{ base: isOpen ? 'block' : 'none', md: 'block' }} flexBasis={{ base: '100%', md: 'auto' }}>
      <Stack
        spacing={8}
        align={{ base: 'flex-start' }}
        justify={{ base: 'flex-start' }}
        direction={['column', 'column', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem toggle={toggle} to='#about-section'>
          About
        </MenuItem>
        <MenuItem toggle={toggle} to='#services-section'>
          Services
        </MenuItem>
        <MenuItem toggle={toggle} to='#team-section'>
          Team
        </MenuItem>
        {!HIDE_OUR_WORK_SECTION && (
          <MenuItem toggle={toggle} to='#work-section' isLast>
            Work
          </MenuItem>
        )}
      </Stack>
    </Box>
  )
}

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as='nav'
      align='center'
      wrap='wrap'
      w='100%'
      mb={8}
      p={8}
      bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
      color={['white', 'white', 'primary.700', 'primary.700']}
      {...props}
    >
      <HmContainer>
        <Flex
          align='center'
          justifyContent={{ base: 'flex-end', md: 'initial' }}
          flexDirection={{ base: 'row-reverse', md: 'row' }}
        >
          {children}
        </Flex>
      </HmContainer>
    </Flex>
  )
}
