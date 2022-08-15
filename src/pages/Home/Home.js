import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api";

export function Home() {
  const{id}=useParams();
  const[data,setData]=useState({});
useEffect(()=>{
  fetch(`${api}/auth/${id}`,{method:"GET"})
.then((data1)=>data1.json())
.then((mvs)=>setData(mvs))
.catch((err)=>console.log(err))
},[])
   
  return (
<>
<h1>hi all <b>{data.username}</b></h1>

</>
     
   );
}
