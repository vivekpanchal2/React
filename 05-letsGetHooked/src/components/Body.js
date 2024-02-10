import { restuarantList } from "../contants";
import { RestaurantsCard } from "./RestaurantsCard";

const Body = () => {
  return (
    <div className="restuarantCards">
      {restuarantList.map((restaurant) => {
        return <RestaurantsCard {...restaurant.info} />;
      })}
    </div>
  );
};

export default Body;
