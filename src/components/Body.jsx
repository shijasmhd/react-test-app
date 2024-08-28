import RestaurantCard from './RestaurantCard';
import { restaurantList } from '../config';
import { useState } from 'react';

function filterData(searchText) {
  return restaurantList.filter((restaurant) => {
    return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
  });
}

const SearchContainer = ({ cb }) => {
  const [searchText, setSearchText] = useState("");
  const placeHolder = "Search food or restaurant";

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = filterData(searchText);
    cb(data);
  }

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <input type="text"
        name="search"
        className="search-bar"
        placeholder={placeHolder}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}/>
    </form>
  );
}

const RestaurantContainer = ({ restaurantList }) => {
  return (
    <div className="restaurant-container">
      {
        restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} { ...restaurant.info } />
        ))
      }
    </div>
  );
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);

  return (
    <>
      <SearchContainer cb={setRestaurants} />
      <RestaurantContainer restaurantList={restaurants}/>
    </>
  );
}

export default Body;