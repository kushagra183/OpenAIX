import React, { useEffect } from 'react'
import { download } from '../assets'
import FileSaver from "file-saver";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import axios from 'axios';


const Card = ({ _id, name, prompt, photo,likes,setAllPosts,data,del }) => {

 async function downloadImage(_id, photo) {
    FileSaver.saveAs(photo, `download-${_id}.jpg`);
  }

  const handleLike = (id)=>{
    axios.put("http://localhost:8080/api/post/like",{postId:id},{headers:{"Authorization":`Bearer ${localStorage.getItem("jwt")}`}}).then((res)=>{const newData = data.map(item=>{if(item._id == res.data.data._id ){return res.data.data}else return item});setAllPosts(newData)}).catch(err=>console.log(err))
  }
  const handleUnlike = (id)=>{
    axios.put("http://localhost:8080/api/post/unlike",{postId:id},{headers:{"Authorization":`Bearer ${localStorage.getItem("jwt")}`}}).then((res)=>{{const newData = data.map(item=>{if(item._id == res.data.data._id ){return res.data.data}else return item});setAllPosts(newData)}}).catch(err=>console.log(err))
  }


  const deleteImg=(id)=>{
  axios.delete(`http://localhost:8080/api/post/deletepost/${id}`,{headers:{"Authorization":`Bearer ${localStorage.getItem("jwt")}`}}).then((res)=>{setAllPosts(res.data)}).catch(err=>console.log(err))
  }
  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
    <img
      className="w-full h-auto object-cover rounded-xl"
      src={photo}
      alt={prompt}
    />
    <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
      <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p>
      <div className='text-white mt-2'>
      
      {likes.includes(localStorage.getItem("uId"))?  <AiFillHeart onClick={()=>handleUnlike(_id)} style={{display:"inline-block",marginRight:"4px"}}/>:<AiOutlineHeart onClick={()=>handleLike(_id)} style={{display:"inline-block",marginRight:"4px"}}/>}
          {likes.length} Likes</div>
      <div className="mt-5 flex justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">{name[0]}</div>
          <p className="text-white text-sm">{name}</p>
        </div>
        <div>
        <button type="button" onClick={() => downloadImage(_id, photo)} className="outline-none bg-transparent border-none">
          <img src={download} alt="download" className="w-6 h-6 object-contain invert" />
        </button>
        {del&&<button type="button" onClick={()=>deleteImg(_id)} className="outline-none bg-transparent border-none ml-4">
         <img className='h-6 w-6 object-contain' src={del} />
        </button>}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card
