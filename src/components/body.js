import imageUrl from "../config";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import {Link} from "react-router-dom";

const RestrauntCard = ({ cloudinaryImageId, name, cuisines, avgRating, id }) => {
  // we can also give const RestrauntCard=({restraunt})  this is destructuring the parameter on the go
  return (
    <Link to={"/restaurant/"+id} style={{ textDecoration: 'none', width: '18%', margin: '10px' }}>
      <div className="card">
        <img
          src={
            imageUrl +cloudinaryImageId
          }
        />
        <h2>{name}</h2>
        <div>
        <h3>{cuisines.join(" , ")}</h3>
        <h4>{avgRating} Stars</h4>
        {/* <h4>Id= {id}</h4> */}
        </div>
        
      </div>
    </Link>
  );
};

function filterData(searchTxt, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchTxt.toLowerCase())
  );

  return filterData;
}

const Body = function () {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");

  // empty dependecy array => after render
  // deendency array[searchTxt]=> after initial rendering + everytime after searchTxt changes

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(
         //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"      
       );
      const json = await data.json();
      setAllRestaurants(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("error in fetching the api");
    }
  }

  // conditional rendering
  // if(!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchTxt, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restrauntList">
        {filteredRestaurants?.length === 0 ? (
          <h1>NO match found , try again</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return(
            
            // <Link to= { "/restaurant/"+ restaurant.info.id} 
            // key={restaurant.info.id} 
            // style={{ textDecoration: 'none' ,width: '15%', margin: '10px'}}>
            //   <RestrauntCard {...restaurant.info} />
            //   </Link>
            
             <RestrauntCard {...restaurant.info} key={restaurant.info.id} />
          )})
        )}
      </div>
    </>
  );
};

export default Body;
