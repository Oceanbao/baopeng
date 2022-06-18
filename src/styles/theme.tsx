import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
  styles: {
    global: props => ({
      html: {
        scrollBehavior: 'smooth'
      },
      body: {
        // color: mode('#ebe9e3', '#011627')(props),
        bg: mode('#ebe9e3', '#011627')(props),
      }

    })
  }
})

export default theme