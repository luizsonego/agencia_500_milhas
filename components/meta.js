import Head from 'next/head'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

export default function Meta() {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/favicon/apple-touch-icon-57x57.png" />
      <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/favicon/apple-touch-icon-114x114.png" />
      <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/favicon/apple-touch-icon-72x72.png" />
      <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/favicon/apple-touch-icon-144x144.png" />
      <link rel="apple-touch-icon-precomposed" sizes="60x60" href="/favicon/apple-touch-icon-60x60.png" />
      <link rel="apple-touch-icon-precomposed" sizes="120x120" href="/favicon/apple-touch-icon-120x120.png" />
      <link rel="apple-touch-icon-precomposed" sizes="76x76" href="/favicon/apple-touch-icon-76x76.png" />
      <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/favicon/apple-touch-icon-152x152.png" />
      <link rel="icon" type="image/png" href="/favicon/favicon-196x196.png" sizes="196x196" />
      <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/png" href="/favicon/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="/favicon/favicon-16x16.png" sizes="16x16" />
      <link rel="icon" type="image/png" href="/favicon/favicon-128.png" sizes="128x128" />
      <meta name="application-name" content="Agencia 500 Milhas" />
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta name="msapplication-TileImage" content="/favicon/mstile-144x144.png" />
      <meta name="msapplication-square70x70logo" content="/favicon/mstile-70x70.png" />
      <meta name="msapplication-square150x150logo" content="/favicon/mstile-150x150.png" />
      <meta name="msapplication-wide310x150logo" content="/favicon/mstile-310x150.png" />
      <meta name="msapplication-square310x310logo" content="/favicon/mstile-310x310.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#461E77" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#461E77" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`Somos uma agência ousada, criativa e comprometida em alavancar seus ganhos, e garantir que o seu concorrente queira te seguir como exemplo. ${CMS_NAME}.`}
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Passion+One:wght@700;900&display=swap" rel="stylesheet" />
      <link href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/biko-black.woff" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Barrio&display=swap" rel="stylesheet" />


      <script src="https://kit.fontawesome.com/bfaef1dc37.js" crossorigin="anonymous"></script>

    </Head>
  )
}
