import NextLink from 'next/link'
import { Box, Flex, HStack, Link, IconButton, useDisclosure, Stack } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { HmContainer } from './HmContainer'
import logo from '../public/hm-logo-1.png'
import Image from 'next/image'

import { theme } from '../styles/theme'

const navLinks = [
  { linkText: 'About', path: '#about-section' },
  { linkText: 'Services', path: '#services-section' },
  { linkText: 'Team', path: '#team-section' },
  { linkText: 'Work', path: '#work-section' }
]

const NavLink = ({ children, linkPath, ...rest }) => (
  <NextLink href={linkPath} passHref>
    <Link
      color={theme.colors.brand.white}
      px={2}
      py={1}
      backgroundColor='none'
      _hover={{
        textDecoration: 'none'
      }}
      {...rest}
    >
      {children}
    </Link>
  </NextLink>
)

export const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box px={4} position='absolute' top='0' w='100%' zIndex='1000' py='1rem' boxShadow={isOpen ? 'md' : 'unset'}>
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            className='mobile-toggle'
            size={'md'}
            icon={
              isOpen ? (
                <CloseIcon color='white' />
              ) : (
                <HamburgerIcon backgroundColor={'none'} boxSize={6} color={theme.colors.brand.white} />
              )
            }
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HmContainer>
            <HStack display='flex' justifyContent='start' spacing={8} alignItems={'center'}>
              <NextLink href={'/'} passHref>
                <Link maxWidth='100px'>
                  <Image src={logo} alt='hair mechanix logo' />
                </Link>
              </NextLink>
              <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                {navLinks.map(({ linkText, path }) => (
                  <NavLink key={linkText} linkPath={path}>
                    {linkText}
                  </NavLink>
                ))}
              </HStack>
            </HStack>
          </HmContainer>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {navLinks.map(({ linkText, path }) => (
                <NavLink key={linkText} linkPath={path} onClick={isOpen ? onClose : onOpen}>
                  {linkText}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}
