import { CMS_NAME } from '../lib/constants'
import Head from "next/head";
import Intro from "../components/intro";
import Footer from '../components/footer'
import Layout from "../components/layout";
import Container from '../components/container';

function pages() {
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          <section className="pt-20 pb-15">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center text-center mb-24">
                <div className="w-full lg:w-6/12 px-4">
                  <h2 className="text-4xl font-semibold">NÃO SOMOS UMA EMPRESA SÉRIA.</h2>
                  <p className="text-lg leading-relaxed m-4 text-gray-600">
                    Somos uma agência ousada, criativa e comprometida em alavancar
                    seus ganhos, e garantir que o seu concorrente queira te seguir
                    como exemplo.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </Container>
      </Layout>
    </>
  )
}

export default pages;