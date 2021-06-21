import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative bg-blue-900 ">

      <Container>

        <div className="container mx-auto px-4 pt-20">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl text-gray-50 font-semibold">Agência 500 Milhas</h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-50">O caminho mais curto para o sucesso da sua empresa!</h5>
              <div className="mt-6 lg:mb-0 mb-6">

                <button
                  className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-facebook-square"></i>
                </button>
                <button
                  className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                ><i className="fab fa-instagram"></i></button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">

                  <ul className="list-unstyled">
                    <li>
                      <Link href="/about">
                        <a
                          className="text-gray-100 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          target="_parent"
                        >
                          Sobre nós
                      </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="" >
                        <a
                          className="text-gray-100 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          target="_parent"
                        >
                          Blog
                      </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <a
                          className="text-gray-100 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          target="_parent"
                        >
                          Contato
                      </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="">
                        <a
                          className="text-gray-100 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          target="_parent"
                        >
                          Produtos
                      </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-100 font-semibold py-1">
                Agência 500 Milhas. 2019 - {new Date().getFullYear()}.
              </div>
            </div>
          </div>
        </div>


      </Container>
    </footer>
  )
}
