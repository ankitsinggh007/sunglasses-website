import React from 'react'
import { useState,useContext } from 'react';
import { useParams } from 'react-router-dom'
import { Button } from 'reactstrap';
import { product } from '../Component/ProductList';
import classes from "./Details_page.module.css"
import { User } from '../App';
import db from '../Component/Firbase';
import {doc,updateDoc} from "firebase/firestore"
function Details_page() {
const {LoggedInUserData, setLoggedInUserData,createUser,Message,setMessage}=useContext(User);

    const {id}=useParams();
    const Array=product.filter((obj)=>obj.id==id);
    const AddToCart=async(e)=>{
        if(LoggedInUserData.isAuthrized){
        console.log(e.target.id)
            setLoggedInUserData({
                ...LoggedInUserData,Cart:[...LoggedInUserData.Cart,e.target.id]
            })
            const washingtonRef = doc(db, "User", LoggedInUserData.id);

                await updateDoc(washingtonRef, {
                Cart:LoggedInUserData.Cart
                });
                setMessage("Added To You Cart")
            }
            else{
                setMessage("Logged in to add in cart")
                
                
            }
    }

    return (
    <div className={classes.box}>
<img src={Array[0].image} height="400px" />
<div className={classes.details}>
    <span className={classes.title}>{Array[0].title}</span>
    <span className={classes.description}>{Array[0].description}</span>
<span><label>Price:</label>₹ {Array[0].price}</span>
    <span className={classes.frames}><label>Frame color:</label><span className={classes.color}> <span className={classes.grey} style={{backgroundColor:"#C97F7F"}}></span>
        <span className={classes.silver} style={{backgroundColor:"silver"}}></span>
        <span className={classes.violet} style={{backgroundColor:"grey"}}></span>
        <span className={classes.pink} style={{backgroundColor:"#6666FF"}}></span>
        </span></span>
    <span className={classes.Action}>
        <span className={classes.counter}>
        </span>
        <span>
            <Button className={classes.button} id={Array[0].id} onClick={AddToCart}>Add</Button>
        </span>
       
    </span>
</div>





    </div>
  )
}

export default Details_page