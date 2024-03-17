import { RestaurantsCard } from "./RestaurantsCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { handleSearch } from "../utils/helper";
import { useRestaurants } from "../utils/useRestaurants";
import useIsOnline from "../utils/useIsOnline";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchNotFound, setSearchNotFound] = useState(false);

  useRestaurants(restaurantList, setRestaurantList);

  const isOnline = useIsOnline();

  if (!isOnline) {
    return <h1>You Are Offline</h1>;
  }

  if (!restaurantList) return null;

  const handleSearchClick = () => {
    handleSearch(
      searchText,
      setSearchNotFound,
      restaurantList,
      setRestaurantList
    );
  };

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="flex justify-center p-10">
        <input
          type="text"
          className="p-2 w-1/4 text-ellipsis border-2 rounded-s-lg border-black border-collapse"
          placeholder="Search Your Favourite Restaurants"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="p-3 text-ellipsis rounded-e-lg bg-red-600"
          onClick={handleSearchClick} // set new filtered list
        >
          Search
        </button>
      </div>

      {searchNotFound ? (
        <div className="not-found-message">
          <p>Restaurant not found. Please try a different search.</p>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center">
          {restaurantList.map((restaurant) => {
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
      )}
    </div>
  );
};

export default Body;
