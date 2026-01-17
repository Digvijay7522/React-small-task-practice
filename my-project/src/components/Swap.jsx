import React, { useState } from 'react'
import { swap } from '../utility'

function Swap() {

const [input1,setInput1]=useState('USD')
const [input2,setInput2]=useState('INR')


    function onchange_handler(e){

      setInput1(  e.target.value)
    }

    function onchange_handle(e){

      setInput2(  e.target.value)
    }

   function onclick_handle(e){
     const[new1,new2]= swap(input1,input2)
     setInput1(new1)
     setInput2(new2)
   }

  return (
    <>
    <>
  <select id="from" onChange={onchange_handler} value={input1} name='input1'>
    <option value="USD">USD</option>
    <option value="INR">INR</option>
    <option value="EUR">EUR</option>
  </select>
  <button id="swap-btn" onClick={onclick_handle}>
    <i className="fa-solid fa-arrow-right-arrow-left" />
  </button>
  <select id="to" onChange={onchange_handle} value={input2} name='input2'>
    <option value="EUR">EUR</option>
    <option value="INR">INR</option>
    <option value="USD">USD</option>
  </select>
</>

    
    </>
  )
}

export default Swap