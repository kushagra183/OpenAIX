import React from 'react'
import logo from "../assets/logo.svg"
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
const Navbar = ({reload}) => {
  reload;
  const handleClick = () =>{
localStorage.clear();
useEffect({

},[])

}

  return (
    <div className='w-full flex justify-between items-center bg-white sm:px-8 py-4 border-b border-b-[#e6ebf4]'>
      <Link to="/">
      <img src={logo} alt="" className='w-30 h-12 object-contain hover:w-28' />
      </Link>
{localStorage.getItem("jwt") ?<div>
      <Link to="/create-post" className="font-inter font-medium text-gray-500  px-4 py-2 rounded-md  hover:text-black">Create</Link>
      <Link to="/mypost" className="font-inter font-medium  text-gray-500  px-4 py-2 rounded-md hover:text-black ">My Posts</Link>
      <Link to="/" className="font-inter font-medium bg-gray-500 text-white px-4 py-2 rounded-2xl hover:bg-gray-700 ml-4 shadow-md" onClick={handleClick}>Logout</Link>
      </div>
      :<div>
      <Link to="/login" className="font-inter font-medium bg-gray-500 text-white mx-4 px-4 py-2 rounded-md shadow-md hover:bg-gray-700" >Login</Link>
      <Link to="/register" className="font-inter font-medium bg-yellow-400 text-black px-4 py-2 rounded-2xl shadow-md hover:bg-yellow-600">sign up</Link>
</div>}
    </div>

  )
}

export default Navbar
