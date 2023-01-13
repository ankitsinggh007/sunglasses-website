import React from 'react'
import Hero from './Hero'
import ProductList from '../Component/ProductList'
function MainBody() {
  return (
    <div><Hero/>
    <ProductList title="Popular Product" start="0" end="4"/>
    <ProductList title="Trending Product" start="5" end="9"/>
    </div>
  )
}

export default MainBody