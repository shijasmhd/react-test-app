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

const SearchContainer = ({ setRestaurants, allRestaurants }) => {
  const [searchText, setSearchText] = useState("");
  const placeHolder = "Search food or restaurant...";

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = filterData(searchText, allRestaurants);
    setRestaurants(data);
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
        restaurantList.length < 1 ? <h1>Uhh ohh! Nothing matched your search!</h1> :
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
      {
        getShimmer()
      }
    </div>
  );
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState(allRestaurants);

  useEffect(() => {
    fetchData(setAllRestaurants, setRestaurants);
  }, []);

  return (
    <>
      <SearchContainer
        setRestaurants={setRestaurants}
        allRestaurants={allRestaurants} />

      {
        allRestaurants.length < 1 ?
          <ShimmerContainer /> :
          <RestaurantContainer restaurantList={restaurants}/>
      }
    </>
  );
}

export default Body;