import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    black: '#0C0C0C',
    gold: '#BB892C'
  }
}

const fonts = {
  heading: `'Roboto', sans-serif`,
  body: `'Roboto', sans-serif`
}

const theme = extendTheme({ colors, fonts })

export { theme }
