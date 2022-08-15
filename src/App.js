import { useEffect,useState } from 'react';

import './App.css';
import { Login } from './auth/Login/Login';
import { Register } from './auth/Register/Register';
import { Home } from './pages/Home/Home';
import {Switch,Link,Route,useHistory} from "react-router-dom";

function App() {
  const history=useHistory();
  const [data,setData]=useState(null);
  const [token,setToken]=useState(localStorage.getItem("x-auth-token"))
  const [user,setUser]=useState(null);    
  const logout=()=>{
    localStorage.removeItem("x-auth-token");
    setToken(null)
    history.push("/login")
  }
  const movieview = () => {
    if (!token) {
        history.push("/login");
    }
 const res=fetch(`https://appmain1.herokuapp.com/user/`
,{ method: "GET",
headers: {
    "x-auth-token": token,
        }

}).then((res)=>res.json())
.then((a)=>{
   setData(res.data)
}).catch(err=>console.log("err",err))
};

useEffect(movieview, []);
  return (
    <div className="App">
  {
!token ? (
  <>
  <Link to="/auth/login">Login
             </Link>
             <Link to="/auth/register">Register
             </Link>
  </>
) :(
  <>
  <Link to="/user/:id">home
             </Link>
            <button onClick={logout}>logout</button>
  </>
)
  }  
           
             

      <Switch>

      <Route path="/auth/register"><Register/> </Route>
      <Route path="/auth/login"><Login setToken={setToken} setUser={setUser}/> </Route>
      <Route path="/userpage/home"><Home /></Route>
     
      </Switch>
   
   
    <></>
    </div>
  );
}


export default App;

