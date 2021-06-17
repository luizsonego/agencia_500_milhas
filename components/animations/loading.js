import { useState } from 'react'
import Lottie from 'react-lottie'
import animationData from '../../public/assets/animations/loading.json'
import Container from '../container'
import Layout from '../layout'

const Loading = () => {
  const [animationState, setAnimationState] = useState({
    isStopped: false,
    isPaused: false
  })


  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <>
      <Container >
        <section className="pt-20 pb-15">
          <div className="container mx-auto my-auto px-4">
            <div className="flex flex-wrap justify-center text-center mt-24">
              <Lottie
                options={defaultOptions}
                height={400}
                width={400}
                isStopped={animationState.isStopped}
                isPaused={animationState.isPaused}
              />
            </div>
              <h1 className="text-center text-2xl animate-pulse">Carregando...</h1>
          </div>
        </section>
      </Container>
    </>
  )
}

export default Loading
