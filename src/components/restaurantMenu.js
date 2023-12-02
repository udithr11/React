import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import imageUrl from '../config'
import {ShimmerRestaurant} from './shimmer'

const RestaurantMenu = () => {
    const {id}=useParams()
    const [restaurant,setRestaurant]=useState(null)

    useEffect(() => {
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo() {

         const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER");
         const json= await data.json();
         console.warn(json)
         setRestaurant(json.data?.cards[0]?.card?.card?.info)

    }
  return (!restaurant)?<ShimmerRestaurant/>:(
    <div className="hotel">
        <div className='hotel-img-name'>
        {/* <h1>id={restaurant.id}</h1> */}
        <h1 style={{textDecoration : 'underline'}}> {restaurant.name}</h1>
        <img src={imageUrl+restaurant.cloudinaryImageId}/>
        </div>
        <div className="hotel-other"><h1>Rating: {restaurant.avgRating}</h1> 
        
        <h1>CUISINES: {restaurant?.cuisines?.join(" , ")}  </h1>
         
        <h1> {restaurant?.costForTwoMessage} </h1></div>
        
        
    </div>
  )
}

export default RestaurantMenu