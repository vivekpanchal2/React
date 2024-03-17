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
    <div className="py-10">
      <div className="flex flex-wrap justify-evenly px-32">
        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-3xl p-2">{restaurant?.name}</h1>
          <p className="font-semibold text-xl p-2">
            locality : {restaurant?.locality}
          </p>
          <p className="font-semibold text-xl p-2">
            Area Name : {restaurant?.areaName}
          </p>
          <p className="font-semibold text-xl p-2">
            Rating : {restaurant?.avgRating}/5 ⭐
          </p>
        </div>
        <div className="h-72 border-4 object-">
          <img
            className="h-full object-cover"
            src={IMG_CDN_LINK + restaurant?.cloudinaryImageId}
            alt="img"
          />
        </div>
      </div>

      <div className="flex flex-col m-10">
        <h1 className="font-semibold text-2xl content-center my-5">Menu:</h1>
        <table className="table-auto border-2 ">
          <tr className="border-2">
            <th className="border-2 text-center p-2">Item Name</th>
            <th className="border-2 p-2">Price</th>
          </tr>

          {listItem?.map((item) => {
            return (
              <tr key={item.card.info.id} className="border-2">
                <td className="border-2 text-left p-2">
                  {item.card.info.name}
                </td>
                <td className="border-2">
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
