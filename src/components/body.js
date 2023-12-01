import restrauntList from "../config";
import { useState,useEffect } from "react";
import Shimmer from "./shimmer";



const RestrauntCard = ({
  cloudinaryImageId,name,cuisines,avgRating
}) => {
    // we can also give const RestrauntCard=({restraunt})  this is destructuring the parameter on the go
  return (
    <div className="card">

      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
      <h2>{name}</h2>
      <h3>{cuisines.join(" , ")}</h3> 
      <h4>{avgRating} Stars</h4>
  
    </div>
  );
};

function filterData(searchTxt,restaurants){
  const filterData= restaurants.filter((restaurant)=>
  restaurant?.info?.name?.toLowerCase()?.includes(searchTxt.toLowerCase()))

  return filterData;
}

const Body = function () {
  const [allRestaurants,setAllRestaurants]=useState([]);
  const [filteredRestaurants,setFilteredRestaurants]=useState([]);
  const [searchTxt,setSearchTxt]=useState("");
   
// empty dependecy array => after render
// deendency array[searchTxt]=> after initial rendering + everytime after searchTxt changes

  useEffect(() => {
    getRestaurants();
  },[]);

  async function getRestaurants(){
    try{
    const data= await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING');
    const json= await data.json();
    setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }catch(error){
      console.error("error in fetching the api");
    }
  
  }

// conditional rendering
  // if(!allRestaurants) return null;


  return allRestaurants?.length===0 ?( <Shimmer/>) :(
    <>
    <div className="search-container">
      <input type="text" className="search"
      placeholder="Search"
      value={searchTxt}
      onChange={(e)=>{
        setSearchTxt(e.target.value)}
        }>
      
      </input>
      <button className="search-btn" 
        onClick={()=>{ const data=filterData(searchTxt,allRestaurants);
          setFilteredRestaurants(data);}}
        >Search</button>
    </div>

    <div className="restrauntList">     
      {
      filteredRestaurants?.length===0
        ? <h1>NO match found , try again</h1>
        : filteredRestaurants.map((restaurant) => (
           <RestrauntCard {...restaurant.info } key={restaurant.info.id} />
        )
        
      )}

    </div>


    </>
  );
};


export default Body;

