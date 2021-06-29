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
      name: 'Web Design e Desenvolvimento',
      description:
        '48% das pessoas afirmam que o fator número 1 que determina a credibilidade de uma empresa é o seu site. O que seu site diz sobre sua empresa?',
      icon: 'fas fa-laptop'
    },
    {
      name: 'Publicidade no Google e no YouTube',
      description:
        'Se você não está anunciando no Google Ads, lamento informar que você está perdendo dinheiro . Nossos clientes estão recebendo mais de 20 novos clientes todos os dias. O que está esperando?',
      icon: 'fab fa-youtube'
    },
    {
      name: 'Publicidade no Facebook e Instagram',
      description:
        'Seus produtos e serviços, acompanhados por nossas campanhas publicitárias hiper-segmentadas, são a combinação perfeita para expandir seus negócios.',
      icon: 'fab fa-instagram'
    },
    {
      name: 'Gerenciamento de mídia social',
      description:
        'Seus clientes em potencial passam milhares de horas usando as redes sociais, e uma gestão excelente é a diferença entre escolher sua empresa ou seus concorrentes.',
      icon: 'fas fa-mobile-alt'
    },
    {
      name: 'Design e Branding',
      description:
        'Todos nós sabemos o quanto é importante ser diferente em um mundo repleto de concorrentes. A decisão de construir uma marca única e inesquecível é sua! Você está pronto para começar?',
      icon: 'fas fa-hat-wizard'
    },
    {
      name: 'Marketing de email',
      description:
        'Existem duas maneiras de multiplicar a receita do seu negócio. Atraia novos clientes ou faça com que seus clientes atuais comprem de você repetidamente . Venda mais com Email Marketing!',
      icon: 'far fa-envelope-open'
    },
    // {
    //   name: 'Motion effects',
    //   description:
    //     'Existem duas maneiras de multiplicar a receita do seu negócio. Atraia novos clientes ou faça com que seus clientes atuais comprem de você repetidamente . Venda mais com Email Marketing!',
    //   icon: 'fas fa-video'
    // },
    // {
    //   name: 'Aplicativos',
    //   description:
    //     'Existem duas maneiras de multiplicar a receita do seu negócio. Atraia novos clientes ou faça com que seus clientes atuais comprem de você repetidamente . Venda mais com Email Marketing!',
    //   icon: 'fab fa-app-store'
    // },
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

                    <div className="pb-10 px-5 md:px-5 flex flex-col lg:flex-row items-center md:mx-auto mt-10 ">
                      <a href="https://api.whatsapp.com/send?phone=554499803500&text=Gostaria%20de%20agendar%20uma%20visita%20para%20saber%20mais%20sobre%20o%20marketing%20para%20minha%20empresa"
                        className="text-gray-50 bg-purple-700 hover:bg-purple-500 hover:ring-2 transform hover:scale-105 px-5 sm:px-28 py-2 sm:py-5 rounded-full  mx-auto transition-cubic text-center w-full md:w-full lg:w-full text-2xl"
                        target="_blank">Agendar uma visita</a>
                    </div>

                  </div>
                  <div className="h-auto">
                    <Marketing />
                  </div>
                </div>



                <div className="my-24">
                  <h1 className="text-5xl text-center mb-10 ">Nossos Serviços</h1>
                  
                  <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative">
                        <dt>
                          <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <i className={`${feature.icon} fa-2x`}></i>
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