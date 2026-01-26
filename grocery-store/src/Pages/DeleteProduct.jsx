import React, { useState } from 'react'

function DeleteProduct(props) {
  const [id, setId]=useState('')

 

  function onchangehandler(e){
    setId(e.target.value)
  }

  function onclickhandler(e){
   props.deleteprod(id)

   setId('')
  }

  return (
    <>
   <div className='flex justify-center border border-red-600 '>
     <div className='mb-8 mt-8  p-17 bg-emerald-100 shadow-2xl rounded-sm' >
      {/* <label className='block'>Id</label> */}
      <input type='text' value={id} onChange={onchangehandler} className='border-1 border-gray-400 rounded-md p-2 ' placeholder='Enter Id'/>
      <button onClick={onclickhandler} className='ml-2 rounded-md cursor-pointer hover:bg-gray-400 p-2'>DELETE</button>
    </div>
   </div>
    </>
  )
}

export default DeleteProduct
