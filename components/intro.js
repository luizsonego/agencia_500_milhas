import { CMS_NAME } from '../lib/constants'
import imageMaringa from "../public/assets/maringa.jpg"

export default function Intro() {
  return (
    <>
      <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{
          minHeight: "75vh",
        }}
      >
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              `url(${imageMaringa})`,
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                  500 Milhas
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  O caminho mais curto para encontrar sua empresa!
                </p>
              </div>
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
              className="text-gray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
    </>
    // <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
    //   <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
    //     Bloag.
    //   </h1>
    //   <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
    //     A statically generated blog example using{' '}
    //     <a
    //       href="https://nextjs.org/"
    //       className="underline hover:text-success duration-200 transition-colors"
    //     >
    //       Next.js
    //     </a>{' '}
    //     and {CMS_NAME}.
    //   </h4>
    // </section>
  )
}
