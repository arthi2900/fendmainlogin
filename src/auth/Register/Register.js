import { useState} from "react";
import {Link} from"react-router-dom";
import { api } from "../../api";
import { useHistory } from "react-router-dom";

export function Register() {
  const [username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  const[email,setEmail]=useState("");
  const[error,setError]=useState(false);
  const history=useHistory();
const handlesubmit=async (e)=>{
  e.preventDefault();
  const newuser={
    username:username,
    email:email,
    password:password,
   }
   setError(false);
  try{
      const res = await fetch(`${api}/auth/register`,{method:"POST",
    body:JSON.stringify(newuser),
    headers:{"Content-Type":"application/json"
    },})
    .then(()=>history.push("/auth/login"));
    }
  catch(err){
  setError(true);
 }
};
  return (
    <>
     <h1>Register form </h1>
               <form onSubmit={handlesubmit}>
            <label>Username</label>
            <br/>
            <input type="text" onChange={e=>setUsername(e.target.value)}/>
      <br/>
      <label>Email</label>
            <br/>
      <input type="text" onChange={e=>setEmail(e.target.value)}/>
      <br/>
      <label>Password</label>
            <br/>
      <input type="password" onChange={e=>setPassword(e.target.value)}/>
      <br/>
      <button type="submit">Register</button>
      <p>already have a account <Link to="/auth/Login">Login</Link></p>
      {error && <span>Something went wrong! </span>
      }
      </form>
    </>
  
   
  );
}
