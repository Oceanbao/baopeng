import { ChakraProvider } from '@chakra-ui/react'
import Head from '../components/Head'

import theme from '../styles/theme'
import '../styles/globals.css'

import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head
        title="bao peng" 
        description="gallery of works by Bao Peng"
      />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
