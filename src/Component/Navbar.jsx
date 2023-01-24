import { Button } from '@mui/material'
import React,{useState,useContext} from 'react'
import {Avatar} from '@mui/material';
import { User } from '../App';
import {TextField} from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {SearchIcon} from '@mui/icons-material';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import classes from "./Navbar.module.css"
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import tbc from "../Media/TBC.png"
import { Link } from 'react-router-dom';
import { pink } from '@mui/material/colors';
import { display } from '@mui/system';
import {FcBusinessman} from "react-icons/fc"
import {FcBusinesswoman} from "react-icons/fc"
import {FaChild} from "react-icons/fa"
import man from "../Media/man.png"
import woman from "../Media/woman.png"
import children from "../Media/children.png"
import login from "../Media/login.png"

function Navbar() {
const {LoggedInUserData, setLoggedInUserData,createUser}=useContext(User);
  console.log(LoggedInUserData)
  const [Style, setStyle] = useState("none");

  const Toggle=()=>{
    if(LoggedInUserData?.isAuthrized){
      
      setStyle("");
    }
    else{
      setStyle("none")
    }
  }
  const Logout=()=>{
      setLoggedInUserData(
        {id:"",firstName:"",lastName:"",email:"",Gender:"",isAuthrized:false,Liked:[],Cart:[],isbpn:[],isbpn_Cart:[]}
      ) 
  }





  return (
    <div className={classes.container}>
     <Link to="/" style={{color:"black",textDecoration:"none"}}><div className={classes.Logo} >
     <span className={classes.logo}><img src={tbc} height="98px" className={classes.image}  width="110px"/></span>
     

        <span className={classes.Name}> &nbsp;Spectack frames</span>
     </div></Link>
     <div className={classes.items}>
     
     <span className={classes}><Link to={"/categories/men"} style={{textDecoration:"none", color:"black"}}><span className={classes.man_text}>Men</span><img src={man} className={classes.man_icon}/></Link></span>
     <span className={classes}><Link to={"/categories/woman"} style={{textDecoration:"none", color:"black"}}><span className={classes.women_text} >Woman</span><img src={woman} className={classes.women_icon}/></Link></span>
     <span className={classes}><Link to={"/categories/children"} style={{textDecoration:"none", color:"black"}}><span className={classes.child_text}>Children</span><img src={children} className={classes.child_icon}/></Link></span>
     <span className={classes.cart}><Link to={"/cart"} style={{textDecoration:"none", color:"black"}}><span><AddShoppingCartIcon className={classes.cart_icon}  /></span></Link></span>
     <span className={classes.Quantity}>{LoggedInUserData.Cart.length?`${LoggedInUserData.Cart.length}`:``}</span>

     
{
  !LoggedInUserData.isAuthrized && 

<Link to={"/signup"}><Button variant="contained"className={classes.login_text} >Register</Button><img src={login} className={classes.login_icon}/></Link>
}
{
  LoggedInUserData.isAuthrized && 
<div style={{positon:"relative"}}>
<Avatar
  onClick={Toggle}
  sx={{ bgcolor:pink[400] }}
  alt={LoggedInUserData.firstName}
  src="/broken-image.jpg"
></Avatar>
<div className={classes.impForm} style={{display:`${Style}`}}>
  <ul className={classes.line}>
    <li>hi, {LoggedInUserData.firstName}</li>
    <hr style={{width:"100%",margin:"auto"}}/>
    <li onClick={Logout} style={{cursor:"pointer"}}>Logout</li>
  </ul>
  </div>
</div>
}

    </div>
    </div>

  )
}

export default Navbar