import Head from 'next/head'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { CMS_NAME } from '../lib/constants'
import { getAllConn } from '../lib/apiConn'
import About from '../components/pages/about'
import Container from '../components/container'
import Connect from '../components/pages/connectivity'
import Footer from '../components/footer'
import Cta from '../components/cta'

export default function Index({ allConn }) {
  const connections = allConn
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          <About />
          {connections.length > 0 && <Connect connect={connections} />}
          <Cta />
          <Footer />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  
  const allConn = getAllConn([
    'title',
    'excerpt',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])

  return {
    props: { allConn },
  }
}
