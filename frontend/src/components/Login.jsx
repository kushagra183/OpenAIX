import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import lg from "../assets/lg.png"
const Login = ({setReloadNav}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onChangeHandler = (e)=>{
   if(e.target.name == "email"){
    setEmail(e.target.value)
   }
    else if(e.target.name === "password"){

     setPassword(e.target.value)
   }
  }

  const submitHandler=(e)=>{

    e.preventDefault();
    axios.post("http://localhost:8080/api/login",{
       email, password
    }).then((res)=>{  localStorage.setItem("uId",res.data.uId);localStorage.setItem("user",res.data.data);localStorage.setItem("jwt",res.data.token);setReloadNav(true); navigate("/")}).catch((err)=>{if(err.response.status>399 && err.response.status<500){ console.log(err);alert("invalid credential")}alert(err)})
  }
  return (
    <section >
    <div className="flex flex-col items-center  mx-auto md:h-screen lg:py-0">
    
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        {/* <img className="w-8 h-8 mr-2" src={lg} alt="logo" /> */}
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
            <div>
              <label htmlFor="email"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="email" value={email} onChange={onChangeHandler} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input type="password" value={password} onChange={onChangeHandler} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            
            <button type="submit" className="w-full text-white bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet? <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Login
