import { createContext, useState } from "react";

export const AddCartContext = createContext(null);

export const AddCartProvider = ({children})=>{
  const [cart, setCart] = useState(0)
  return(
    <AddCartContext.Provider value={{cart, setCart}}>
      {children}
    </AddCartContext.Provider>
  )
}