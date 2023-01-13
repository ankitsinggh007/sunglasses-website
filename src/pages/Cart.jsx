import React,{useContext} from 'react'
import { product } from '../Component/ProductList';
import { User } from '../App';
import { ContactlessOutlined } from '@mui/icons-material';
import classes from "./Cart.module.css";
import db from '../Component/Firbase';
import {doc,updateDoc} from "firebase/firestore"
function Cart() {
const {LoggedInUserData, setLoggedInUserData,createUser,setMessage}=useContext(User);
  let Array=[];
  let price=0;
    for(let i=0;i<LoggedInUserData.Cart.length;i++){
            let a=product.filter((obj)=>obj.id==LoggedInUserData.Cart[i]);
            price=a[0].price+price;
            Array.push(a[0]);
    }
   const Purcahse=async()=>{
    setLoggedInUserData({
        ...LoggedInUserData,Cart:[]
    });
    const washingtonRef = doc(db, "User", LoggedInUserData.id);

    await updateDoc(washingtonRef, {
    Cart:[]
    });
    setMessage("Product purchased");


   }

    return (
    <div className={classes.box}>
        <span className={classes.headingh}>Will buy:</span>
<div>
            <ul className={classes.table}>
                <li style={{marginRight:"200px",fontWeight:"600",width:"250px"}}>Product</li>
                <li style={{fontWeight:"600"}}>Quantity</li>
                <li style={{fontWeight:"600"}}>Price</li>
                
                
                </ul>        
                <hr/>

{
    Array?.map((obj)=>{
        return(
            <ul className={classes.table}>
                <li style={{marginRight:"200px",fontWeight:"600",width:"250px"}}><div className={classes.Product}>
                    <img src={obj.image} width="40px"/>
                    <span>{obj.title}</span>
                    
                    </div></li>
                <li style={{fontWeight:"600"}}>1</li>
                <li style={{fontWeight:"600"}}>{obj.price}</li>
                
                
                </ul>        
        )
    })
}




<hr/>

                <ul className={classes.table}>
                <li style={{marginRight:"200px",fontWeight:"600",width:"250px"}}>Total</li>
                <li style={{fontWeight:"600"}}>{Array.length}</li>
                <li style={{fontWeight:"600"}}>{price}</li>
                <li style={{fontWeight:"600",backgroundColor:"#2C3337",padding:"10px 20px",color:"white",borderRadius:"4px"}} onClick={Purcahse}>Purchase</li>
                
                
                </ul> 
                </div>
    </div>
  )
}

export default Cart