import React, { useState } from 'react'
import { Menu, X, User } from 'lucide-react' // Icons ke liye
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-amber-500 p-4 shadow-md'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        
        {/* 1. Logo Section */}
        <div className='flex items-center font-extrabold text-2xl md:text-3xl'>
          Grocery<span className='ml-1 text-white'>Store</span>
        </div>

        {/* 2. Desktop Links (Mobile pe hidden) */}
        <div className='hidden md:block'>
          <ul className='flex gap-8 lg:gap-11 font-medium'>
            <NavLink to='/' className='cursor-pointer hover:text-white transition-colors'>Home</NavLink>
            <NavLink to='/about' className='cursor-pointer hover:text-white transition-colors'>About</NavLink>
            <NavLink to='/contact' className='cursor-pointer hover:text-white transition-colors'>Contact</NavLink>
          </ul>
        </div>

        {/* 3. Profile & Mobile Menu Toggle */}
        <div className='flex items-center gap-4'>
          <div className='hidden md:block cursor-pointer border-2 border-black p-1 rounded-full'>
            <User size={20} />
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className='md:hidden cursor-pointer'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* 4. Mobile Menu Dropdown */}
      {isOpen && (
        <div className='md:hidden mt-4 pb-4 border-t border-amber-600 animate-in slide-in-from-top'>
          <ul className='flex flex-col gap-4 mt-4 font-semibold'>
            <NavLink to='/' className='hover:bg-amber-600 p-2 rounded'>Home</NavLink>
            <NavLink to='/about' className='hover:bg-amber-600 p-2 rounded'>About</NavLink>
            <NavLink to='/contact' className='hover:bg-amber-600 p-2 rounded'>Contact</NavLink>
            <NavLink className='hover:bg-amber-600 p-2 rounded flex items-center gap-2'>
              <User size={18} /> Profile
            </NavLink>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar