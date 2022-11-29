import NextLink from 'next/link'
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  theme
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { HmContainer } from '../components/HmContainer'
import logo from '../public/hm-logo-1.png'
import Image from 'next/image'

const Links = ['About', 'Services', 'Team', 'Work']

const NavLink = ({ children }) => (
  <NextLink href={'#'} passHref>
    <Link
      color={theme.colors.white}
      px={2}
      py={1}
      backgroundColor='none'
      _hover={{
        textDecoration: 'none'
      }}
    >
      {children}
    </Link>
  </NextLink>
)

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box
        px={4}
        backgroundColor={['white', 'white', 'unset']}
        position='absolute'
        top='0'
        w='100%'
        zIndex='1000'
        py='1rem'
        boxShadow={isOpen ? 'md' : 'unset'}
      >
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            className='mobile-toggle'
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HmContainer>
            <HStack display='flex' justifyContent={['end', 'end', 'start']} spacing={8} alignItems={'center'}>
              <Box maxW={['60px', '80px']}>
                <Image src={logo} alt='hair mechanix logo' />
              </Box>
              <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
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
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}
