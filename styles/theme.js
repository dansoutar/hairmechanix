import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    black: '#0C0C0C',
    gold: '#BB892C',
    grey: '#8C8C8C',
    midGrey: '#C4C4C4',
    lightGrey: '#EEEEEE'
  }
}

const fonts = {
  heading: `'Roboto', sans-serif`,
  body: `'Roboto', sans-serif`
}

const theme = extendTheme({ colors, fonts })

export { theme }
