import Image from 'next/image'
import imageMaringa from "../public/assets/14.jpg"
import imageMaringaMobile from "../public/assets/capa_site_mobile_2.jpg"

export default function Intro() {
  return (
    <>
      <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{
          minHeight: "65vh",
        }}
      >

        <div className="hidden md:block" >
          <Image
            src={imageMaringa}
            alt="O caminho mais curto para o sucesso da sua empresa!"
            layout="fill"
            objectFit="cover"
            quality={75}
            placeholder='blur'
            priority="eager"
          />
        </div>
        <div className="block md:hidden" >
          <Image
            src={imageMaringaMobile}
            alt="O caminho mais curto para o sucesso da sua empresa!"
            layout="fill"
            objectFit="cover"
            quality={75}
            placeholder='blur'
            priority="eager"
          />
        </div>

        <div className="container relative mx-auto">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
              <h1 className="text-white font-semibold text-8xl intro-title leading-none">
                <span className="text-9xl md:text-8xl">500</span> Milhas
              </h1>
              <p className="text-gray-50 font-semibold py-1 text-5xl text-lg text-gray-50">
                O caminho mais curto para o sucesso da sua empresa!
              </p>
            </div>
          </div>
        </div>

        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: "70px", transform: "translateZ(0)" }}
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
              className="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
    </>
  )
}
