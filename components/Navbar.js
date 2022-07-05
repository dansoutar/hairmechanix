import NextLink from 'next/link'
import { Box, Flex, HStack, Link, IconButton, useDisclosure, useColorModeValue, Stack } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { HmContainer } from '../components/HmContainer'
import logo from '../public/hm-logo-1.png'
import Image from 'next/image'

const Links = ['About', 'Services', 'Team', 'Work']

const NavLink = ({ children }) => (
  <NextLink href={'#'} passHref>
    <Link
      px={2}
      py={1}
      _hover={{
        textDecoration: 'none'
      }}
    >
      {children}
    </Link>
  </NextLink>
)

const containerSx = {
  position: 'absolute',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)'
}

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <HmContainer sx={containerSx}>
      <Box display='flex' justifyContent='center'>
        <Box h='140px' w='100%' display='flex' alignItems='center'>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
              <Box>
                <Image src={logo} alt='hair mechanix logo' />
              </Box>
              <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </HStack>
            </HStack>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
      </Box>
    </HmContainer>
  )
}
