import { useState } from "react";
import {Link,useHistory} from"react-router-dom";
import { api } from "../../api";
export function Login({setToken,setUser}) {
  const history=useHistory();
  const [username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  const[email,setEmail]=useState("");
 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res =await fetch(`${api}/auth/login`,{method:"POST",
   body:JSON.stringify({username,password}),
    headers:{"Content-Type":"application/json"}
      })
  .then((res)=>res.json())
  .then(tok => {
    if (tok.message === "successful login") {
       const usernamemain=username;
      localStorage.setItem("x-auth-token",tok.token ,usernamemain)
    // localStorage.setItem("username",usernamemain)
      setToken(tok.token,usernamemain)
  //setUser(  localStorage.getItem("username"))
      console.log(usernamemain);
      history.push("/userpage/home")
    }})
}
 
    
  
catch(err){
  console.log("not data display")
}
 }
    return (
    <>
       <h1>Login form</h1>
         <form >
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
      <br/>
      <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
      <br/>
      <p><Link to="/auth/Login">Forget password</Link></p>
          <button type="submit" onClick={handleSubmit}> login</button>
      <p>create new account <Link to="/auth/register">Register</Link></p>
      </form>
    </>
  );
}
