import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_LINK, restaurantList } from "../contants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  let { resId } = useParams();
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

  return restaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="restaurentmenu-container">
      <div className="resinfo">
        <div className="resinfo-text">
          <h1>{restaurant?.name}</h1>
          <p>locality : {restaurant?.locality}</p>
          <p>Area Name : {restaurant?.areaName}</p>
          <p>Rating : {restaurant?.avgRating}/5 ⭐</p>
        </div>
        <div className="img">
          <img src={IMG_CDN_LINK + restaurant?.cloudinaryImageId} alt="img" />
        </div>
      </div>

      <div className="itemList">
        <h1>Menu:</h1>
        <table className="res-item-table">
          <tr>
            <th>Item Name</th>
            <th>Price</th>
          </tr>
          {listItem.map((item) => {
            return (
              <tr key={item.card.info.id}>
                <td>{item.card.info.name}</td>
                <td>&#8377;{item.card.info.price / 100}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default RestaurantMenu;
