import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

function Search(props) {
   
  return (
   <>
    <div className=''>
    <div className='w-full md:w-3/4 lg:w-1/2 mx-auto mt-8 mb-33 '>
       <Table className='bg-red-200 border roundend-md overflow-hidden '>
  <TableCaption>A list of your product.</TableCaption>
  <TableHeader className=''>
    <TableRow>
      <TableHead className="">Id</TableHead>
      <TableHead>NAME</TableHead>
      <TableHead>PRICE</TableHead>
      
    </TableRow>
  </TableHeader>
  <TableBody>
    {props.products.map((item,key)=>(<TableRow>
      <TableCell className="font-medium">{item.id}</TableCell>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.price}</TableCell>
     
    </TableRow>))}
  </TableBody>
</Table>
    </div>
  </div>
   </>
  )
}

export default Search
