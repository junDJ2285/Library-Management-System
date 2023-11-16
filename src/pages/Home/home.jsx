import { useSelector } from "react-redux";
import Login from "./login/login"
import Books from "../books/Books";




const Home = ()=>{
    const user = useSelector((s)=>s.user)
return(
    <div>
     {user ? <Books/> :  <Login/>}
       
    </div>
)
}

export default Home;