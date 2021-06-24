import Link from 'next/link'
import { useState } from "react";
import { ButtonPrimary } from '../styles/assets'

const Navbar = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav
        className={
          (props.transparent
            ? "top-0 z-50 w-full"
            : "shadow-lg bg-white shadow-lg") +
          " flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg fixed w-full z-50 navbar"
        }
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className={
                  (props.transparent ? "text-white" : "text-gray-800") +
                  " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
                }
              >
                Agência 500 Milhas
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i
                className={
                  (props.transparent ? "text-white" : "text-gray-800") +
                  " fas fa-bars"
                }
              ></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">

            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <Link href="/">
                  <a
                    className={
                      (props.transparent
                        ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                        : "text-gray-800 hover:text-gray-600") +
                      " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    }
                  >
                    Home
                  </a>
                </Link>
              </li>

              <li className="flex items-center">
                <Link href="/about">
                  <a
                    className={
                      (props.transparent
                        ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                        : "text-gray-800 hover:text-gray-600") +
                      " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    }
                  >
                    Sobre Nós
                  </a>
                </Link>
              </li>

              <li className="flex items-center">
                <Link href="/contact">
                  <a
                    className={
                      (props.transparent
                        ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                        : "text-gray-800 hover:text-gray-600") +
                      " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    }
                  >
                    Contato
                  </a>
                </Link>
              </li>

              <li className="flex items-center">
                <Link href="https://api.whatsapp.com/send?phone=554499803500&text=Gostaria%20de%20saber%20mais%20sobre%20o%20marketing%20para%20minha%20empresa" target="_blank">
                  <ButtonPrimary
                    className="px-9 py-4 lg:py-2 flex items-center text-xs uppercase font-bold rounded-full"
                  >
                    Fale conosco
                  </ButtonPrimary>
                </Link>
              </li>


            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
