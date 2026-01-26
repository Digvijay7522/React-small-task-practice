import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import AddProduct from "./Pages/AddProduct"
import { useState } from "react"
import GetAllProduct from "./Pages/GetAllProduct"
import DeleteProduct from "./Pages/DeleteProduct"
import UpdateList from "./Pages/UpdateList"
import Search from "./Pages/Search"




function App() {
  
  const [products,setProducts]=useState([])
  const [searchData,setSearchData]=useState([])
  console.log(products)
  let productStore=(newproduct)=>{
    setProducts([...products,newproduct])
  
     }

      function deleteprod(id){
   let newData=  products.filter(item=>item.id !=id)
   setProducts(newData)
  }

  const updateData=(newdata)=>{
   const newList= products.map(item=>{
   return  item.id==newdata.id ?newdata:item})

   setProducts(newList)
  }
  const filterData=(inputdata)=>{
   const matchData= products.filter(item=>(item.name.includes(inputdata)))
   setSearchData(matchData)
  }
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home filterData={filterData}/>} />
      <Route path="/about" element={<About/>} />
       <Route path="/add" element={<AddProduct productStore={productStore}/>} />
       <Route path="/getallproduct" element={<GetAllProduct products={products}/>} />
        <Route path="/delete" element={<DeleteProduct deleteprod={deleteprod}/>} />
          <Route path="/update" element={<UpdateList products={products} updateData={updateData}/>} />
          <Route path="/search" element={<Search products={searchData}/>} />

    </Routes>
    <Footer/>
    </>
  )
}

export default App
