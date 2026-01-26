import React, { useState } from 'react'

  import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { NavLink } from 'react-router-dom'



function Header(props) {
    const [input, setInput]=useState('')

    function onchangehandler(e){
        setInput(e.target.value)
    }

    function onclickhandler(e){
  props.filterData(input)
    }
  return (

    <>
    {/* 1. Grid layout: Mobile pe 1 column, Desktop pe 2. Height auto rakhi hai padding ke saath */}
<div className='bg-[color-mix(in_srgb,var(--color-blue-500),white)] grid grid-cols-1 md:grid-cols-2 min-h-[40vh] py-25 px-6 gap-10'>
    
    {/* Left Side: Search & Buttons */}
    <div className='flex flex-col items-center justify-center w-full'>
        {/* Search Field: Mobile pe full width, Desktop pe max-width taaki bahut bada na dikhe */}
        <div className='w-full max-w-md'>
            <Field orientation="horizontal" className="flex gap-2">
                <Input type="search"  value={input} onChange={onchangehandler} placeholder="Search..." className="bg-white" />
                <NavLink to='/search'><Button onClick={onclickhandler} className='cursor-pointer hover:bg-blue-700 transition-colors'>Search</Button></NavLink>
            </Field>
        </div>

        {/* Buttons Row: 'flex-wrap' zaroori hai taaki mobile pe buttons niche aa jayein */}
        <div className='flex flex-wrap justify-center mt-12 gap-4 '>
            <NavLink to='/add'><Button className='cursor-pointer hover:bg-blue-600 transition-colors p-3'>ADD</Button></NavLink>
            <NavLink to='/delete'><Button className='cursor-pointer hover:bg-blue-600 transition-colors p-3'>DELETE</Button></NavLink>
           <NavLink to='/update'> <Button className='cursor-pointer hover:bg-blue-600 transition-colors p-3'>UPDATE</Button></NavLink>
            <NavLink to='/getallproduct'><Button className='cursor-pointer hover:bg-blue-600 transition-colors p-3 whitespace-nowrap'>GET ALL PRODUCT</Button></NavLink>
        </div>
    </div>

    {/* Right Side: Text Content */}
    <div className='flex flex-col items-center justify-center text-center'>
        <h1 className='text-3xl md:text-5xl font-extrabold tracking-tighter text-blue-900'>
            Manage Your Store
        </h1>
        <p className='mt-4 text-slate-700 max-w-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Molestias perspiciatis eligendi aliquid, nostrum exercitationem harum.
        </p>
    </div>

</div>
    </>
  )
}

export default Header
