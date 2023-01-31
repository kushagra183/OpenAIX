import React from 'react'
import { useState } from 'react'
import { BrowserRouter,Link, Routes,Route } from 'react-router-dom'
import CreatePost from './components/CreatePost'
import Home from './components/Home'
import Login from './components/Login'
import Mypost from './components/Mypost'
import Navbar from './components/Navbar'
import Registeration from './components/Registeration'
const App = () => {
const [reLoadNav,setReloadNav] = useState(false);
  return (
   <BrowserRouter>
   <header>
      <Navbar reload={reLoadNav}/>
   </header>

   <main className='sm:p-8 px-4 py-8 w-full bg-white min-h-[calc(100vh-73px)]'>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/create-post" element={localStorage.getItem("jwt")&&<CreatePost />}/>
    <Route path="/register" element={<Registeration/>}/>
    <Route path="/login" element={<Login setReloadNav={setReloadNav} />}/>
    <Route path="/mypost" element={<Mypost/>}/>
    </Routes>
   </main>

   </BrowserRouter>
  )
}

export default App

