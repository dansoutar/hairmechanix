import React from 'react'

import { theme } from '../styles/theme'

import { Button } from '@chakra-ui/react'

const CtaButton = ({ text = 'View Services', ...rest }) => {
  console.log(text)
  return (
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
  )
}

export { CtaButton }
