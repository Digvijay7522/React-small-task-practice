import React, { useState } from 'react'

function AddProduct(props) {

    const [formData,setFormData]=useState({
        id:'',
        name:'',
        price:''
    })

    // function onchangehandler(e){
    //     setFormData({...formData, [e.target.name]:e.target.value})
    // }

    function onchangehandler(e){
    // 'prev' ka matlab: "React bhai, jo bhi sabse LATEST data hai, wo mujhe do"
    const { name, value } = e.target; // Values pehle nikal lo (Safe side)
    
    setFormData((prev) => ({
        ...prev,        // Purane (Latest) data ki copy
        [name]: value   // Naya data update
    }))
}

    function handlesubmit(e){
        e.preventDefault();
        const newItem={
            ...formData
        }
        console.log(newItem)
        props.productStore(newItem)

        setFormData({
        id: "",
        name: "",
        price: ""
    });
    }

  return (
    <>
     <form onSubmit={handlesubmit} className='mt-2 flex justify-center mb-4 mt-4'>
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
  
 <div className='flex justify-center'> <button type="submit" className="mt-2  cursor-pointer p-2 hover:bg-white  bg-amber-100 shadow-2xl rounded-md">
    Submit
  </button></div>
  </div>
</form>

    </>
  )
}

export default AddProduct
