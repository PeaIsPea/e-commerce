import { useState } from "react"
import { useEffect } from "react"
import { useRef } from "react"


const useScollHandling = () => {
  const [scoll, setScoll] = useState(null)
  const prevScoll = useRef(0)
  
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

  useEffect(()=> {
      window.addEventListener("scroll", scollTracking)
      return () => window.removeEventListener('scroll', scollTracking)
  }, [])

  return {
    scoll,
    scollPos
  }

}


export default useScollHandling