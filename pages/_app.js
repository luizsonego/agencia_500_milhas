import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

import '../styles/index.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
