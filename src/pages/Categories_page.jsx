import React from 'react'
import { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { product } from '../Component/ProductList'
import classes from "./Categories_page.module.css"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
function Categories_page() {
    const [Data, setData] = useState([]);
    const {value} =useParams();
    let Array=[];
    if(value==="men"){
        Array=product.filter((obj)=>obj.gender!=="female");
    }
    else if(value==="woman"){
        Array=product.filter((obj)=>obj.gender==="female");

    }
    else{
        Array=product.filter((obj)=>obj.gender!=="female"&&obj.gender!=="Male");

    }


console.log(Array)
    return (
       <div className={classes.ProductList}>
        {
            Array. map((Obj,index)=>{
                console.log(Obj)
                return(
                    <NavLink to={`/products/${Obj.id}`} key={index} className={classes.card}>
                    <img src={Obj.image}/>
                    <span className={classes.label}>{Obj.title}</span>
                    <span className={classes.buy}>₹ {Obj.price}</span>
                    <span className={classes.label}>To buy<ArrowRightAltIcon className={classes.right}/></span>
                    <span className={classes.disc}>- {Obj.discount} %</span>
                    
                </NavLink>
                )
            })
        }
    </div>


  )
}

export default Categories_page