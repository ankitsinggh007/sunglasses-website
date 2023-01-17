import React,{useContext, useState} from 'react'
import { product } from '../Component/ProductList';
import { User } from '../App';
import { ContactlessOutlined } from '@mui/icons-material';
import classes from "./Cart.module.css";
import db from '../Component/Firbase';
import {doc,updateDoc} from "firebase/firestore"
import Swal from 'sweetalert2';
function Cart() {
const {LoggedInUserData, setLoggedInUserData,createUser,setMessage}=useContext(User);
const [Address, setAddress] = useState("")
  let Array=[];
  let price=0;
    for(let i=0;i<LoggedInUserData.Cart.length;i++){
            let a=product.filter((obj)=>obj.id==LoggedInUserData.Cart[i]);
            price=a[0].price+price;
            Array.push(a[0]);
    }
   const Purcahse=async()=>{
if(Address){
    if(LoggedInUserData.Cart.length!=0){
        await Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Your product has been Deliverd to ${Address}`,
            showConfirmButton: true,
          })
        
        setLoggedInUserData({
            ...LoggedInUserData,Cart:[]
        });
        const washingtonRef = doc(db, "User", LoggedInUserData.id);
    
        await updateDoc(washingtonRef, {
        Cart:[]
        });
        setLoggedInUserData({...LoggedInUserData,Cart:[]})
    }
    else{
        await Swal.fire({
            position: 'center',
            icon: 'info',
            title: `Add product to your Cart`,
            showConfirmButton: true,
          })
    }
}
else{
    await Swal.fire({
        position: 'center',
        icon: 'info',
        title: `Please Provide address`,
        showConfirmButton: true,
      })
}
    
    


   }

    return (
    <div className={classes.box}>
          <span style={{marginTop:"50px",marginLeft:"10px"}}><label>Address:</label><br/><textarea 
          onChange={(e)=>setAddress(e.target.value)}
          style={{height:"30px",width:"200px",borderRadius:"5px",marginLeft:"10px"}} type="text" placeholder="Address"
    
    >{Address}</textarea></span>
<br/>
        <span className={classes.headingh}>Cart</span>
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