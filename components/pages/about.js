import styled from 'styled-components';

const About = () => {
  const StyledTitle = styled.h3`
    color: ${(props) => props.theme.colors.primary};
    text-transform: uppercase;
    background: linear-gradient(312deg, ${(props) => props.theme.colors.primary_light} 0%, ${(props) => props.theme.colors.secondary} 50%, ${(props) => props.theme.colors.secondary_light} 100%);
	  -webkit-background-clip: text;
	  -webkit-text-fill-color: transparent;
    background-attachment: fixed;
  `

  const StyledSubTitle = styled.span`
    color: ${(props) => props.theme.colors.primary};
    background: linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
	  -webkit-background-clip: text;
	  -webkit-text-fill-color: transparent;
    background-attachment: fixed;
  `

  return (
    <section className="pt-20 pb-15">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-9/12 px-4">
            <StyledTitle className="font-passion-one mb-10 md:text-6xl text-4xl leading-none font-black">NÃO SOMOS UMA EMPRESA SÉRIA.</StyledTitle>

            <p className="text-lg leading-relaxed m-4 text-gray-600 text-justify my-7 leading-loose">
              Somos uma agência <StyledSubTitle className="text-4xl font-barrio">ousada</StyledSubTitle>, criativa e comprometida em alavancar seus ganhos, e garantir que o seu concorrente queira te seguir como exemplo. 
              Uma campanha de marketing bem construída pode aumentar o fluxo de leads, multiplicar a receita e espalhar o conhecimento da marca.
              </p>
            <p className="text-lg leading-relaxed m-4 text-gray-600 text-justify my-7 leading-loose">
              É por isso que aqui na 500 Milhas, temos uma abordagem dinâmica de marketing, e uma <StyledSubTitle className="text-4xl font-bangers">Power criatividade </StyledSubTitle>,  tudo isso adaptado às necessidades específicas de cada cliente para branding, design de logotipo, marketing digital, web design, desenvolvomento de aplicativos e sistemas, promoção e publicidade. Cuidamos de tudo para que você continue inovando.
            </p>
            <p className="text-lg leading-relaxed m-4 text-gray-600 text-justify my-7 leading-loose">
              Como parte de nossos recursos de consultoria, podemos ajudá-lo a definir seus objetivos de negócios e criar os melhores processos e <StyledSubTitle className="text-3xl md:text-4xl font-bungee-shade align-middle">estratégias </StyledSubTitle> para atingir esses objetivos. Trabalharemos com você para encontrar a solução ideal para sua empresa.
              </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
