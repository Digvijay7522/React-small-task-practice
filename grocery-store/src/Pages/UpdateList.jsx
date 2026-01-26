import React, { useState } from 'react'

function UpdateList(props) {

     const [formData,setFormData]=useState({
            id:'',
            name:'',
            price:''
        })
    
   function findData(){
    return props.products.find(item=>item.id ==formData.id)
  
    }
   function onchangehandler(e){
     setFormData({...formData,[ e.target.name]:e.target.value})
   }
   function findonclick(e){
    e.preventDefault();
  let obj=  findData()
  setFormData({
    id:obj.id,
    name:obj.name,
    price:obj.price
  })
   }

   function updateonclick(e){
    e.preventDefault()
    props.updateData(formData)
   }
  return (
   <>
   
    <form  className='mt-2 flex justify-center mb-4 mt-4'>
  <div className=' p-5 bg-emerald-50 rounded-md shadow-2xl'>
   <div className=" ">
    <label htmlFor="id" className='block'>Id</label>
    <input
      type="text"
      name='id'
      value={formData.id}
       onChange={onchangehandler}
     className=' border-1 border-gray-500 w-full rounded-md p-2'
    />
   
  </div>
   <div className="form-group">
    <label htmlFor="name" className='block'>name</label>
    <input
      type="text" name='name'
      value={formData.name}
       onChange={onchangehandler}
        className=' border-1 border-gray-500 w-full rounded-md p-2'
    />
   
  </div>
   <div className="form-group">
    <label htmlFor="price"  className='block'>price</label>
    <input
      type="text"
      name='price'
      value={formData.price}
      onChange={onchangehandler}
      className=' border-1 border-gray-500 w-full rounded-md p-2'
    />
   
  </div>
  
 <div className='flex justify-center'> <button onClick={findonclick} type="submit" className="mt-2  cursor-pointer p-2 hover:bg-white  bg-amber-100 shadow-2xl rounded-md">
    Find
  </button>
   <button onClick={updateonclick} type="submit" className="mt-2 ml-2 cursor-pointer p-2 hover:bg-white  bg-amber-100 shadow-2xl rounded-md">
    Update
  </button>
  </div>
  </div>
</form></>
  )
}

export default UpdateList
