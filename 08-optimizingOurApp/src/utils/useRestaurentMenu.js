import { useState, useEffect } from "react";

export const useRestaurentMenu = (resId) => {
  const [restaurant, setRestaurant] = useState([]);
  const [listItem, setListItem] = useState([]);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
        resId
    );

    const json = await data.json();
    setRestaurant(json.data?.cards[0]?.card?.card?.info);
    setListItem(
      json.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
  }

  return { restaurant, listItem };
};
