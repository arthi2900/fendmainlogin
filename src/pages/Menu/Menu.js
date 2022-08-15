import { Link } from "react-router-dom"
export function Menu(){
    const user=false;
    return(
        <>
        {user?(

<>
<Link to="/userpage/home">Home
      </Link>
      <Link to="/userpage/home">logout
      </Link>  
      </>

        ):(
            <>
             <Link to="/auth/login">Login
             </Link>
             <Link to="/auth/register">Register
             </Link>
             </>
        )}
          
     

        </>
    )
}