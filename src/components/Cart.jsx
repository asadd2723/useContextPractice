import React, { useContext } from 'react'
import { AddCartContext } from '../Context/AddCart'
import { RiShoppingCart2Fill } from '@remixicon/react'
function Cart() {
  const {cart} = useContext(AddCartContext) 
  return (
    <div className='absolute top-9 right-9'>
      <RiShoppingCart2Fill color='lightgrey' size={40}/>
      <h1 className='absolute top-6 right-[-8px] z-10 text-black font-semibold px-2 py-0 align-text-top rounded-full bg-slate-300 text-sm'> {cart} </h1>
    </div>
  )
}

export default Cart