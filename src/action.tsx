


import axios from "axios";

export const getPosts=async()=>{
  let response=await axios.get("http://localhost:8080/posts")
  return response.data;
} 




export const sendPosts=async(message: string)=>{
  let response=await axios.post("http://localhost:8080/posts",{message})
  return response.data;
} 