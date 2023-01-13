import React from 'react'
import classes from "./ProductList.module.css"
import prod1 from "../Media/prod1.png"
import prod2 from "../Media/prod2.png"
import prod3 from "../Media/prod3.png"
import prod4 from "../Media/prod4.png"
import prod5 from "../Media/prod5.png"
import prod6 from "../Media/prod6.png"
import prod7 from "../Media/prod7.png"
import prod8 from "../Media/prod8.png"
import { NavLink } from 'react-router-dom'
export  const product=[
    
    {
        "id": 1,
        "gender": "male",
        image: prod1,
        "price": 1500,
        "description": "Classic black wayfarer sunglasses with UV protection",
        "title": "Wayfarer Sunglasses",
        "discount": 70
        },
        
        {
        "id": 2,
        "gender": "female",
        "image": prod2,
    
        "price": 1200,
        "description": "Stylish red cat eye sunglasses with mirrored lenses",
        "title": "Cat Eye Sunglasses",
        "discount": 80
        },
        
        {
        "id": 3,
        "gender": "Kids",
        "image": prod3,
    
        "price": 1800,
        "description": "Trendy round sunglasses with gradient lenses",
        "title": "Round Sunglasses",
        "discount": 20
        },
        
        {
        "id": 4,
        "gender": "male",
        "image": prod4,
    
        "price": 1000,
        "description": "Sporty wrap around sunglasses with polarized lenses",
        "title": "Wrap Around Sunglasses",
        "discount": 90
        }
        ,
        {
        "id": 5,
        "gender": "female",
        "image": prod5,
    
        "price": 1300,
        "description": "Elegant aviator sunglasses with gold frames",
        "title": "Aviator Sunglasses",
        "discount": 20
        }
        ,
        {
        "id": 6,
        "gender": "Kids",
        "image": prod6,
    
        "price": 2000,
        "description": "Luxurious oversized square sunglasses with brown lenses",
        "title": "Oversized Square Sunglasses",
        "discount": 20
        }
        ,
        {
        "id": 7,
        "gender": "male",
        "image": prod7,
    
        "price": 1700,
        "description": "Sleek rectangular sunglasses with blue lenses",
        "title": "Rectangular Sunglasses",
        "discount": 30
        }
        ,
        {
        "id": 8,
        "gender": "female",
        "image": prod8,
        "price": 1500,
        "description": "Glamorous butterfly sunglasses with purple frames",
        "title": "Butterfly Sunglasses",
        "discount": 30
        },
        {
            "id": 9,
            "gender": "male",
            image: prod1,
            "price": 1500,
            "description": "Classic black wayfarer sunglasses with UV protection",
            "title": "Wayfarer Sunglasses",
            "discount": 20
            },
            
            {
            "id": 10,
            "gender": "female",
            "image": prod2,
        
            "price": 1200,
            "description": "Stylish red cat eye sunglasses with mirrored lenses",
            "title": "Cat Eye Sunglasses",
            "discount": 20
            },
            
            {
            "id": 11,
            "gender": "Kids",
            "image": prod3,
        
            "price": 1800,
            "description": "Trendy round sunglasses with gradient lenses",
            "title": "Round Sunglasses",
            "discount": 10
            },
            
            {
            "id": 12,
            "gender": "male",
            "image": prod4,
        
            "price": 1000,
            "description": "Sporty wrap around sunglasses with polarized lenses",
            "title": "Wrap Around Sunglasses",
            "discount": 70
            }
            ,
            {
            "id": 13,
            "gender": "female",
            "image": prod5,
        
            "price": 1300,
            "description": "Elegant aviator sunglasses with gold frames",
            "title": "Aviator Sunglasses",
            "discount": 90
            }
            ,
            {
            "id": 14,
            "gender": "Kids",
            "image": prod6,
        
            "price": 2000,
            "description": "Luxurious oversized square sunglasses with brown lenses",
            "title": "Oversized Square Sunglasses",
            "discount": 20
            }
            ,
            {
            "id": 15,
            "gender": "male",
            "image": prod7,
        
            "price": 1700,
            "description": "Sleek rectangular sunglasses with blue lenses",
            "title": "Rectangular Sunglasses",
            "discount": 5
            }
            ,
            {
            "id": 16,
            "gender": "female",
            "image": prod8,
            "price": 1500,
            "description": "Glamorous butterfly sunglasses with purple frames",
            "title": "Butterfly Sunglasses",
            "discount":10
            },
            
    ]
function ProductList(props) {
 
  return (
<div className={classes.main}>
        <div className={classes.title}>{props.title}</div>

<div className={classes.ProductList}>
        {
            product.slice(props.start,props.end). map((Obj,index)=>{
                console.log(Obj)
                return(
                    <NavLink to={`/products/${Obj.id}`}  activClassName={classes.active} key={index} className={classes.card}>
                    <img src={Obj.image}/>
                    <span className={classes.label}>{Obj.title}</span>
                    <span className={classes.buy}>₹ {Obj.price}</span>
                    <span className={classes.label}>To buy</span>
                    <span className={classes.disc}>- {Obj.discount} %</span>
                    
                </NavLink>
                )
            })
        }
    </div>
    </div>
  )
}

export default ProductList;
