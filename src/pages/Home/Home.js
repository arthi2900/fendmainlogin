import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api";
export function Home() {
  const [data,setData]=useState([]);
  //const{id}=useParams();
  const [token,setToken]=useState(localStorage.getItem("x-auth-token"))
  const datamain=()=>{
  fetch(`${api}/user/`
    ,{ method: "GET",
    headers: {
        "x-auth-token": token,
            }
        }).then((res1)=>res1.json())
    .then((data1)=>{
      //console.log(data1)
      setData(data1)

    }).catch(err=>console.log("err",err))
  }
  useEffect(()=>datamain(), []);
  return (
<>
<h1>hi all</h1>

</>
     
   );
}

