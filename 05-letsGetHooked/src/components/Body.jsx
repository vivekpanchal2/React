import { restaurantList } from "../contants";
import { RestaurantsCard } from "./RestaurantsCard";
import { useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList); // at first We need to render the all restaurant list so we set it as default
  const [searchText, setSearchText] = useState();

  return (
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
            const data = filterData(searchText, restaurantList); // Filter the restaurants List
            setRestaurants(data); // set new filtered list
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurantCards">
        {restaurants.map((restaurant) => {
          return <RestaurantsCard {...restaurant.info} />;
        })}
      </div>
    </>
  );
};

function filterData(searchText, restaurants) {
  const filteredRestaurantList = restaurants.filter((restaurant) => {
    return restaurant.info.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });

  return filteredRestaurantList;
}

export default Body;
