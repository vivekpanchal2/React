import { IMG_CDN_LINK } from "../contants";

export const RestaurantsCard = (props) => {
  const { name, avgRating, cuisines, areaName, locality, cloudinaryImageId } =
    props;

  return (
    <div className="w-80 p-3 m-3 flex flex-col hover:scale-105 transition duration-500 ">
      <img
        src={IMG_CDN_LINK + cloudinaryImageId}
        className="h-60 w-full object-cover rounded-xl grayscale-[50%] hover:grayscale-0 transition duration-500"
      ></img>
      <div className="flex flex-col">
        <h2 className="font-bold text-2xl py-1">{name}</h2>
        <h4 className="py-1 font-semibold">{avgRating}/5⭐</h4>
        <p className="py-1 opacity-80 font-semibold">{cuisines.join(", ")}</p>
        <p className="text-wrap py-1 opacity-50 font-semibold">
          {areaName + ", " + locality}
        </p>
      </div>
    </div>
  );
};
