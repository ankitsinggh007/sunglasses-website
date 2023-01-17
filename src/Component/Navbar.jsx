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
     <span className={classes.logo}><img src={tbc} height="98px" width="110px"/></span>
     

        <span className={classes.Name}> &nbsp;Spectack frames</span>
     </div></Link>
     <div className={classes.items}>
     
     <span className={classes}><Link to={"/categories/men"} style={{textDecoration:"none", color:"black"}}><span>Men</span></Link></span>
     <span className={classes}><Link to={"/categories/woman"} style={{textDecoration:"none", color:"black"}}><span>Woman</span></Link></span>
     <span className={classes}><Link to={"/categories/children"} style={{textDecoration:"none", color:"black"}}><span>Children</span></Link></span>
     <span className={classes.cart}><Link to={"/cart"} style={{textDecoration:"none", color:"black"}}><span><AddShoppingCartIcon style={{position:"relative",top:"5px",fontSize:"2rem"}} /></span></Link></span>
     <span className={classes.Quantity}>{LoggedInUserData.Cart.length?`${LoggedInUserData.Cart.length}`:``}</span>

     <div className={classes.navItem}>
{
  !LoggedInUserData.isAuthrized && 

<Link to={"/signup"}><Button variant="contained" style={{backgroundColor:"#2C3337",padding:"12px",fontSize:"1rem"}}>Log In</Button></Link>
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
    </div>

  )
}

export default Navbar