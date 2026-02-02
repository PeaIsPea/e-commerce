import { createContext, useState } from "react";

export const SideBarContext = createContext()

export const SideBarProvider = ({ children }) => {

  const [isopen, setIsOpen] = useState(false)
  const [type, setType] = useState('')
  return (
    <SideBarContext.Provider value={{ isopen, setIsOpen, type, setType }}>
      {children}
    </SideBarContext.Provider>
  )
  
}