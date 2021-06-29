import { useState } from 'react'
import Lottie from 'react-lottie'
import animationData from '../../public/assets/animations/marketing.json'

const Marketing = () => {
  const [animationState, setAnimationState] = useState({
    isStopped: false,
    isPaused: false
  })


  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <Lottie
      options={defaultOptions}
      height='auto'
      width={350}
      isStopped={animationState.isStopped}
      isPaused={animationState.isPaused}
    />
  )
}

export default Marketing
