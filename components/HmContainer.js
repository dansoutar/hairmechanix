import React from 'react'

import { Container } from '@chakra-ui/react'

const HmContainer = ({ children, ...rest }) => {
  return (
    <Container {...rest} maxW='1040px' p={0}>
      {children}
    </Container>
  )
}

export default HmContainer
