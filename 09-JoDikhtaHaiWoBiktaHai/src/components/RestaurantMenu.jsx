import { useParams } from "react-router-dom";
import { IMG_CDN_LINK, restaurantList } from "../contants";
import Shimmer from "./Shimmer";
import { useRestaurentMenu } from "../utils/useRestaurentMenu";

const RestaurantMenu = () => {
  let { resId } = useParams();

  const { restaurant, listItem } = useRestaurentMenu(resId);

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

          {listItem?.map((item) => {
            return (
              <tr key={item.card.info.id}>
                <td>{item.card.info.name}</td>
                <td>
                  &#8377;
                  {item.card.info.price ? `${item.card.info.price / 100}` : "-"}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default RestaurantMenu;
