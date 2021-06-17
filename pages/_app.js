import { useState } from 'react'
import Router from 'next/router'
import theme from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import NProgress from 'nprogress'
import '../styles/index.css'
import Loading from '../components/animations/loading'

export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)


  Router.events.on("routeChangeStart", (url) => {
    setLoading(true)
    NProgress.start();
  })
  Router.events.on("routeChangeComplete", (url) => {
    NProgress.done();
    setLoading(false)
  })

  return (
    <ThemeProvider theme={theme}>
      {loading === true ? <Loading /> : (<Component {...pageProps} />)}
    </ThemeProvider>
  )
}
