import React, { useState } from 'react'
import Logo from '../assets/logo/logo.jpg'
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setmMobileMenuOpen] = useState(false)

  const closeMenu = () => {
    setmMobileMenuOpen(false);
  };


  return (
    <header className='fixed opacity-75 top-0 z-50 w-full bg-gradient-to-r from-[#b91c1c] to-[#7f1d1d] hover:from-[#7f1d1d] hover:to-[#b91c1c] px-4 lg:px-0 text-white'>
      <div className=' max-w-7xl mx-auto flex h-14 items-center'>
        <div className='md:mr-4 flex justify-between w-full'>
          <Link to="/" className='mr-6 flex items-center space-x-2'>
            <img src={Logo} alt="" className='w-14 rounded-full' />
          </Link>

          <nav className='md:flex hidden items-center space-x-2 text-lg font-medium'>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'bg-white text-red-700 hover:bg-white transition duration-700 h-full px-3 content-center hover:text-red-700'
                  : 'hover:bg-white transition duration-700 h-full  px-3 content-center hover:text-red-700'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'bg-white text-red-700 hover:bg-white transition duration-700 h-full px-3 content-center hover:text-red-700'
                  : 'hover:bg-white transition duration-700 h-full px-3 content-center hover:text-red-700'
              }
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? 'bg-white text-red-700 hover:bg-white transition duration-700 h-full px-3 content-center hover:text-red-700'
                  : 'hover:bg-white transition duration-700 h-full px-3 content-center hover:text-red-700'
              }
            >
              Projects
            </NavLink>

          </nav>

          {/* <nav className='md:flex hidden  items-center space-x-2 text-lg font-medium'>
            <NavLink to="/" className='hover:bg-white transition duration-700 h-full px-3 content-center hover:text-red-700'>Home</NavLink>
            <NavLink to="/about" className='hover:bg-white transition duration-700 h-full px-3 content-center hover:text-red-700'>About</NavLink>
            <NavLink to="/projects" className='hover:bg-white transition duration-700 h-full px-3 content-center hover:text-red-700'>Projects</NavLink>
          </nav> */}

          <Link to="/contact" className='bg-red-500 md:flex hidden font-medium text-lg hover:bg-white hover:text-red-700 transition duration-700 my-auto py-1 px-4 rounded-lg cursor-pointer text-white'>Contact</Link>

        </div>
        <button className='inline-flex items-center justify-center rounded-md md:hidden' onClick={() => setmMobileMenuOpen(!mobileMenuOpen)}>
          <span className='sr-only'>Open main menu</span>
          {mobileMenuOpen ? (
            <RxCross2 className='h-6 w-6' aria-hidden="true" />
          ) : (
            <IoMdMenu className='h-6 w-6' aria-hidden="true" />
          )}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className='md:hidden'>
          <div className='space-y-1 bg-gradient-to-r from-[#b91c1c] to-[#7f1d1d] px-2 pb-3 pt-2 h-screen absolute right-0 w-2/3 rounded-bl-2xl'>
            <Link to="/" onClick={closeMenu} className='block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-50 hover:text-red-700'>Home</Link>
            <Link to="/about" onClick={closeMenu} className='block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-50 hover:text-red-700'>About</Link>
            <Link to="/projects" onClick={closeMenu} className='block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-50 hover:text-red-700'>Project</Link>
            <Link to="/contact" onClick={closeMenu} className='block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-50 hover:text-red-700'>Contact</Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
