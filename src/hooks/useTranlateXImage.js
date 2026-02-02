import useScollHandling from "./useScollHandling"
import { useState } from "react"
import { useEffect } from "react"
import { useRef } from "react"


const useTranlateXImage = () => {

  const {scollPos, scoll} = useScollHandling()

  const [translateXpos, setTranslateXpos] = useState(80)
  
  
  const handleTranslateX = () => {
    if(scoll === 'down' && scollPos >= 1500) {
      setTranslateXpos(translateXpos <= 0 ? 0 :translateXpos - 1)
    }
    else if (scoll === 'up') {
      setTranslateXpos(translateXpos >= 10 ? 10: translateXpos + 1)
    }
  }

  

  useEffect(() => {
    handleTranslateX()
  },[scollPos])


  return {
    translateXpos
  }



}

export default useTranlateXImage