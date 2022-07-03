import React from 'react'

import { Container } from '@chakra-ui/react'

const HmHalfContainer = ({ children, ...rest }) => {
  return (
    <Container className='half-container' display='flex' justifyContent='end' w='100vw' maxW='520px' p={0} {...rest}>
      {children}
    </Container>
  )
}

export default HmHalfContainer
