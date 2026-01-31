import { useEffect, useRef, useState } from "react";

const useEffectImage = () => {
  const [scoll, setScoll] = useState(null)
  const prevScoll = useRef(0)
  const [translateXpos, setTranslateXpos] = useState(80)
  const [scollPos, setScollPos] = useState(0)



  const scollTracking = () => {
    const currentPos = window.pageYOffset

    if(currentPos > prevScoll.current){
      setScoll('down')
    }
    else if(currentPos < prevScoll.current){
      setScoll('up')
    }

    prevScoll.current = currentPos <= 0 ? 0 : currentPos

    setScollPos(currentPos)
  }

  const handleTranslateX = () => {
    if(scoll === 'down' && scollPos >= 1500) {
      setTranslateXpos(translateXpos <= 0 ? 0 :translateXpos - 1)
    }
    else if (scoll === 'up') {
      setTranslateXpos(translateXpos >= 10 ? 10: translateXpos + 1)
    }
  }

  useEffect(()=> {
    window.addEventListener("scroll", scollTracking)
    return () => window.removeEventListener('scroll', scollTracking)
  }, [])

  useEffect(() => {
    handleTranslateX()
  },[scollPos])


  return {
    translateXpos
  }
}

export default useEffectImage