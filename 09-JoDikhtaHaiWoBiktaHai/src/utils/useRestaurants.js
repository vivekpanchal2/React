import { useState, useEffect } from "react";
import { RESTAURENT_LIST } from "../contants";

export const useRestaurants = (restaurantList, setRestaurantList) => {
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(RESTAURENT_LIST);

    if (!data.ok) {
      throw new Error(`HTTP error! Status: ${data.status}`);
    }
    const json = await data.json();
    setRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
};
