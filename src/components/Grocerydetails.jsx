import React from "react"
import data from '../data.json'
import GroceryItem from "./GroceryItem"
import { useState } from "react"





const GroceryDetails = ()=>{

   console.log(data)





// "mrp": "₹ 185.00",
// "sellingPrice": "₹ 92.00",
// "discount": "50%"
    return(
        
        <>
  
        <h1>Groceries</h1>
        <div className="container">
            {/* map through the data and display the cards */}
            {data.map((item)=>{
        
             <GroceryItem {...item}/>
          
            })
}
            
        </div>
        </>
    )
}


export default GroceryDetails