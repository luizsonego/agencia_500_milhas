import Head from "next/head";
import Cta from "../components/cta";
import Layout from "../components/layout";
import Footer from "../components/footer";
import { CMS_NAME } from "../lib/constants";
import HeadPage from "../components/headpages";
import Container from "../components/container";
import Marketing from "../components/animations/marketing";

export default function Services() {

  const features = [
    {
      name: 'Competitive exchange rates',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    },
    {
      name: 'No hidden fees',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    },
    {
      name: 'Transfers are instant',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    },
    {
      name: 'Mobile notifications',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    },
  ]

  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <Container>
          <HeadPage />

          <section className="pt-8 pb-24">
            <div className="bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 items-center">
                  <div className="">
                    <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-7xl leading-none text-left">Serviços de Marketing Digital</p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Ajudamos empresas, profissionais e empreendedores a conquistar novos clientes, multiplicar suas receitas, construir marcas inesquecíveis e impactar milhares de pessoas com nossos serviços personalizados de marketing online.</p>

                    <div className="pb-10 px-5 md:px-28 flex flex-col lg:flex-row items-center md:mx-auto ">
                      <a href="https://api.whatsapp.com/send?phone=554499803500&text=Gostaria%20de%20saber%20mais%20sobre%20o%20marketing%20para%20minha%20empresa"
                        className="text-gray-50 bg-purple-700 hover:bg-purple-500 hover:ring-2 transform hover:scale-105 px-5 sm:px-28 py-2 sm:py-5 rounded-full  mx-auto transition-cubic text-center w-full md:w-32 lg:w-3/6"
                        target="_blank">Quero começar agora mesmo</a>
                    </div>

                  </div>
                  <div className="h-auto">
                    <Marketing />
                  </div>
                </div>



                <div className="mt-24">
                  <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative">
                        <dt>
                          <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                          </div>
                          <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </section>

          <Cta />
          <Footer />
        </Container>
      </Layout>
    </>
  )
}