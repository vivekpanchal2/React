export function filterData(searchText, restaurants) {
  const filteredRestaurantList = restaurants.filter((restaurant) => {
    return restaurant.info.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });
  return filteredRestaurantList;
}

export const handleSearch = (
  searchText,
  setSearchNotFound,
  restaurantList,
  setRestaurantList
) => {
  const data = filterData(searchText, restaurantList);

  if (data.length === 0) {
    setSearchNotFound(true);
  } else {
    setSearchNotFound(false);
    setRestaurantList(data);
  }
};
