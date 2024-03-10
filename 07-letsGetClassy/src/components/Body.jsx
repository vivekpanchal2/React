import { RestaurantsCard } from "./RestaurantsCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredrestaurants, setFilteredRestaurants] = useState([]); // at first We need to render the all restaurant list so we set it as default
  const [searchText, setSearchText] = useState();

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    if (!data.ok) {
      throw new Error(`HTTP error! Status: ${data.status}`);
    }

    const json = await data.json();
    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  function filterData(searchText, restaurants) {
    const filteredRestaurantList = restaurants.filter((restaurant) => {
      return restaurant.info.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
    return filteredRestaurantList;
  }

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search Your Favourite Restaurents"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants); // Filter the restaurants List
            setFilteredRestaurants(data); // set new filtered list
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurantCards">
        {filteredrestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantsCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
