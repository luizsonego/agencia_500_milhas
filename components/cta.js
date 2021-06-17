import Container from './container'

export default function Cta() {
  return (
    <div className="relative bg-blue-900 ">
      
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
        style={{ transform: "translateZ(0)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-blue-900 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <Container>
        <div className="pt-16 pb-10 px-9 md:px-28 flex flex-col lg:flex-row items-center mx-auto">
          <h3 className="text-gray-50 text-4xl lg:text-7xl font-bold tracking-tighter leading-tight text-center mb-10 lg:mb-0 lg:pr-4 lg:w-full">
            Vamos começar <br />
            um projeto juntos?
          </h3>
        </div>

        <div className="pb-10 px-16 md:px-28 flex flex-col lg:flex-row items-center mx-auto">
          <p className="text-gray-50 text-1xl lg:text-2xl font-normal tracking-tighter leading-tight text-center mb-10 lg:mb-0 lg:pr-4 lg:w-full">
            Seu projeto merece ficar em boas mãos, conte com a nossa agência para isso. <br /> Tem todas informações e está preparado? Então vamos começar!
          </p>
        </div>

        <div className="pb-10 px-5 md:px-28 flex flex-col lg:flex-row items-center md:mx-auto ">
          <a href="https://api.whatsapp.com/send?phone=554499803500&text=Gostaria%20de%20saber%20mais%20sobre%20o%20marketing%20para%20minha%20empresa" 
          className="text-gray-50 bg-purple-700 hover:bg-purple-500 hover:ring-2 transform hover:scale-105 px-5 sm:px-28 py-2 sm:py-5 rounded-full  mx-auto transition-cubic text-center w-full md:w-32 lg:w-3/6" 
          target="_blank">Quero começar agora mesmo</a>
        </div>

        <hr className="divide-y divide-fuchsia-300 divide-opacity-80 mt-20" />


      </Container>
    </div>
  )
}
