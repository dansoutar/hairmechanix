import '../styles/globals.css'

import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'

import '@fontsource/roboto/400.css'

import Head from 'next/head'
import Script from 'next/script'

const PHOREST_SUBDOMAIN = 'thehairmechanix'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/site.webmanifest' />
      </Head>
      <ChakraProvider {...{ theme }}>
        <Component {...pageProps} />
      </ChakraProvider>
      <Script
        src='https://booking-widget.phorestcdn.com/obwidget.bundle.js'
        strategy='afterInteractive'
        onLoad={() => {
          window.widget = new OBWidget(PHOREST_SUBDOMAIN)
        }}
      />
    </>
  )
}

export default MyApp
