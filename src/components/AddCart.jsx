import React, { useContext, useState } from 'react'
import { AddCartContext } from '../Context/AddCart'

function AddCart() {
  const [num, setNum ]= useState(1)
  const {setCart} = useContext(AddCartContext)

  console.log();

  return (
    <div className='flex flex-col justify-between w-80 h-96 rounded-md bg-slate-400'>
      <h1 className='text-center p-4 text-3xl font-bold'>Add Products</h1>
      <h1>product detail</h1>
      <div className='flex justify-center items-center gap-2 bg-slate-500 py-6 text-xl rounded-md'>
        <button 
          className='hover:bg-slate-200 py-[4] px-[7px]'
          onClick={()=>setNum(num + 1)}
        >
          +
        </button>
        <h2 className='font-semibold bg-slate-100 py-1 px-[7px]'>{num}</h2>
        <button className='hover:bg-slate-200 py-[4] px-[7px]'
        onClick={()=>setNum(num - 1)}
        >-</button>
        <button className='bg-slate-950 text-slate-100 py-2 px-4 rounded-lg' onClick={()=> setCart(num)}>Add To Cart</button>
      </div>
    </div>
  )
}

export default AddCart