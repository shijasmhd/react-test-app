import RestaurantCard from './RestaurantCard';
import ShimmerCard from './ShimmerCard';
import { useEffect, useState } from 'react';
import { restaurantListUrl } from '../config';

function filterData(searchText, allRestaurants) {
  return allRestaurants.filter((restaurant) => {
    return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
  });
}

async function fetchData(setAllRestaurants, setRestaurants) {
  try {
    let resp = await fetch(restaurantListUrl);
    resp = await resp.json();

    let data =resp?.data?.success?.cards?.[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;

    if (!data) {
      return null;
    }

    setAllRestaurants(data);
    setRestaurants(data);
  } catch (error) {
    alert(error.message);
  }
}

const SearchContainer = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");
  const placeHolder = "Search food or restaurant...";

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = onSearch(searchText);
    if (!data.length)
      setSearchText("");
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

const NoMatch = ({ resetFilter }) => {
  return (
    <div className="no-match-container">
      <h1 className="no-match-heading"> Ohh No! </h1>
      <h1 className="no-match-desc"> Nothing matched your search! </h1>
      <button className="btn-home-err" onClick={resetFilter}> Reset filters </button>
    </div>
  );
}

const RestaurantContainer = ({ restaurantList, resetFilter }) => {
  return (
    <div className="restaurant-container">
      {
        restaurantList.length < 1 ? <NoMatch resetFilter={resetFilter} /> :
          restaurantList.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} { ...restaurant.info } />
          ))
      }
    </div>
  );
}

function getShimmer () {
  let arr = [];

  for (let i = 0; i < 10; i++) {
    arr.push(<ShimmerCard key={i} />);
  }
  return arr;
}

const ShimmerContainer = () => {
  return (
    <div className="restaurant-container">
      { getShimmer() }
    </div>
  );
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState(allRestaurants);

  useEffect(() => {
    fetchData(setAllRestaurants, setRestaurants);
  }, []);

  const onSearch = (searchText) => {
    const data = filterData(searchText, allRestaurants);
    setRestaurants(data);

    return data;
  };

  const resetFilter = () => {
    setRestaurants(allRestaurants);
  };

  return (
    <>
      <SearchContainer onSearch={onSearch} />
      {
        allRestaurants.length < 1 ?
          <ShimmerContainer /> :
          <RestaurantContainer
            restaurantList={restaurants}
            resetFilter={resetFilter}
          />
      }
    </>
  );
}

export default Body;