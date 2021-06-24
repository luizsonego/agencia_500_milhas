import Head from "next/head";
import styled from 'styled-components';
import Intro from "../components/intro";
import Footer from '../components/footer'
import Layout from "../components/layout";
import { CMS_NAME } from '../lib/constants'
import Container from '../components/container';
import ContainerTopSmall from '../components/containerTopSmall';
import { useEffect } from 'react';
import HeadPage from "../components/headpages";


function About() {

  const StyledTitle = styled.h3`
    color: ${(props) => props.theme.colors.primary};
    text-transform: uppercase;
    background: linear-gradient(312deg, ${(props) => props.theme.colors.primary_light} 0%, ${(props) => props.theme.colors.secondary} 50%, ${(props) => props.theme.colors.secondary_light} 100%);
	  -webkit-background-clip: text;
	  -webkit-text-fill-color: transparent;
    background-attachment: fixed;
  `

  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <Container>
          <HeadPage />
          <ContainerTopSmall>

            <section className="pt-20 pb-15">


              <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center text-center mb-24">

                  <div className="w-full lg:w-10/12 px-4">
                    <StyledTitle className="font-passion-one  md:text-8xl text-7xl leading-none font-black">Sobre a 5M </StyledTitle>
                    <p className="subpixel-antialiased text-lg leading-relaxed m-4 text-gray-600 text-justify">
                      Na 500 Milhas, a forma como fazemos as coisas é tão importante quanto o que fazemos. Não fazemos apenas digital,  não fazemos apenas criativos e não fazemos apenas mídia. Fazemos o que for preciso para resolver os problemas comerciais e de marketing de nossos clientes. Cada solução de marketing é feita sob medida para atender às necessidades específicas de cada cliente. Nossa abordagem colaborativa inclui análises, um plano estratégico e uma execução eficiente de acordo com esse plano. Ao longo do caminho, construímos um conjunto de métricas personalizadas que dirão a nós, e aos nossos clientes, quão bem-sucedidos somos, em tempo real, com painéis e veículos de relatório fáceis de entender.
                  </p>
                    <p className="text-lg leading-relaxed m-4 text-gray-600 text-justify">
                      Embora nossas raízes criativas sejam profundas, aprendemos ao longo dos anos que criativos altamente eficazes precisam ser baseados em uma estratégia bem planejada.
                  </p>
                    <p className="text-lg leading-relaxed m-4 text-gray-600 text-justify">
                      Com isso em mente, temos um processo de marketing que começa com a obtenção de insights e conhecimento do produto ou serviço de nossos clientes, sua atual adequação ao mercado, juntamente com seu potencial. Em seguida, construímos um plano de marketing estratégico antes que qualquer outra coisa aconteça. Esse processo e o aprendizado que obtemos de nossos “mergulhos profundos” garantirão o sucesso final de todas as outras fases de nosso trabalho.
                  </p>
                  </div>

                  <div className="grid grid-cols-1 divide-y divide-yellow-900" ></div>

                  <div className="w-full lg:w-10/12 px-4">
                    <StyledTitle className="font-passion-one  md:text-8xl text-7xl leading-normal font-black">VISÃO</StyledTitle>

                    <p className="text-lg leading-relaxed m-4 text-gray-600 text-justify">
                      A 500 Milhas é impulsionada por pessoas que possuem uma ampla gama de conhecimentos e habilidades, pois direcionam para uma mudança ativa e positiva.
                      Temos uma visão ampla do mercado digital por isso, nosso intuito é nos posicionar globalmente como uma Agência/StartUP de referência, E estamos construindo essa reputação não só por meio do fornecimento de soluções eficientes e completas, mas também pelo forte relacionamento com os clientes.
                  </p>
                  </div>


                  <div className="w-full lg:w-10/12 px-4">
                    <StyledTitle className="font-passion-one  md:text-8xl text-7xl leading-normal font-black">MISSÃO</StyledTitle>

                    <p className="text-lg leading-relaxed m-4 text-gray-500 text-justify">
                      Tipos de desafios que ajudamos a resolver ...
                  </p>
                    <ul className="text-left list-disc text-gray-600 pl-9">
                      <li>Eu quero aumentar minha receita</li>
                      <li>Preciso de melhores ferramentas de gestão de negócios</li>
                      <li>Não tenho tempo para me concentrar no marketing</li>
                      <li>Quero uma estratégia de marketing que funcione para meu setor</li>
                      <li>Eu preciso de um site moderno ou loja online</li>
                      <li>Eu quero mais leads qualificados</li>
                      <li>Preciso de um sistema para gerenciar meus leads e clientes</li>
                      <li>Preciso de uma melhor reputação online e presença social</li>
                      <li>Preciso de ajuda com marketing por e-mail</li>
                      <li>Preciso de ajuda com branding, design, vídeo, conteúdo</li>
                    </ul>
                  </div>


                  <div className="w-full lg:w-10/12 px-4 my-10">
                    <StyledTitle className="font-passion-one  md:text-8xl text-7xl leading-normal font-black">VALORES</StyledTitle>
                    <ul className="text-left flex flex-wrap text-gray-600 list-disc pl-9">
                      <li className="w-full md:w-1/4">Criatividade</li>
                      <li className="w-full md:w-1/4">Sonhos</li>
                      <li className="w-full md:w-1/4">Imaginação</li>
                      <li className="w-full md:w-1/4">Integridade</li>
                      <li className="w-full md:w-1/4">Honestidade</li>
                      <li className="w-full md:w-1/4">Respeito</li>
                      <li className="w-full md:w-1/4">Liderança</li>
                      <li className="w-full md:w-1/4">Atitude Crítica</li>
                      <li className="w-full md:w-1/4">Responsabilidade</li>
                      <li className="w-full md:w-1/4">Paixão por tecnologia</li>
                      <li className="w-full md:w-1/4">Paixão automotiva</li>
                    </ul>
                  </div>
                  <p className="text-lg leading-relaxed m-4 text-gray-600 text-justify">
                    E muito mais - o seu sucesso é o nosso sucesso!
                </p>
                </div>



                <StyledTitle className="text-center font-passion-one md:text-8xl text-7xl leading-none font-black">VÁ MAIS LONGE COM 500 MILHAS</StyledTitle>

              </div>

            </section>
          </ContainerTopSmall>
          <Footer />
        </Container>
      </Layout>
    </>
  )
}

export default About;