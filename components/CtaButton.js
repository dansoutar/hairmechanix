import React from 'react'
import { Button, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

import { theme } from '../styles/theme'

const CtaButton = ({ text = 'View Services', ...rest }) => {
  return (
    <NextLink href='#services-section' passHref>
      <Link>
        <Button
          fontWeight='bold'
          fontSize='small'
          textTransform='uppercase'
          color={theme.colors.brand.gold}
          outline='1px'
          borderColor={theme.colors.brand.grey}
          letterSpacing='1px'
          variant='outline'
          {...rest}
        >
          {text}
        </Button>
      </Link>
    </NextLink>
  )
}

export { CtaButton }
