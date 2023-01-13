import React from 'react'
import { Button } from '@mui/material'
import classes from "./Hero.module.css"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { NavLink } from 'react-router-dom';

function Hero() {
  return (
    <div className={classes.Hero}>
        <div className={classes.slogan}> 
        <span className={classes.sloganfirst}>SUNGLASSES
         FOR EVERYONE</span>
        <span className={classes.slogansecond}>Explore our new collection for this summer.
</span>
<NavLink to="/categories/men" className={classes.butto}  variant="contained">Explore <ArrowRightAltIcon style={{position:"absolute",}}/></NavLink>
        </div>
        <div className={classes.Picture}>

        </div>
    </div>
  )
}

export default Hero