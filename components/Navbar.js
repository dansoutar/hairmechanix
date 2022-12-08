import NextLink from 'next/link'
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Menu,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { HmContainer } from '../components/HmContainer'
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
      color={[theme.colors.brand.black, theme.colors.brand.black, theme.colors.brand.white]}
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

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  console.log(isOpen)

  return (
    <>
      <Box px={4} position='absolute' top='0' w='100%' zIndex='1000' py='1rem' boxShadow={isOpen ? 'md' : 'unset'}>
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            className='mobile-toggle'
            size={'md'}
            icon={
              isOpen ? (
                <CloseIcon />
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
          <Flex alignItems={'center'}>
            <Menu>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
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
