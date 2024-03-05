import { IMG_CDN_LINK } from "../contants";

export const RestaurantsCard = (props) => {
  const { name, avgRating, cuisines, areaName, locality, cloudinaryImageId } =
    props;

  return (
    <div className="card">
      <img src={IMG_CDN_LINK + cloudinaryImageId}></img>
      <div className="cardDetails">
        <h2>{name}</h2>
        <h4>{avgRating}</h4>
        <p>{cuisines.join(", ")}</p>
        <p id="location">{areaName + ", " + locality}</p>
      </div>
    </div>
  );
};
