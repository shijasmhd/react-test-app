import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imgCdnUrl, menuUrl } from "../config";
import ShimmerCard from "./ShimmerCard";

const MenuRestaurantCard = ({
  name,
  city,
  locality,
  cuisines,
  avgRating,
  totalRatingsString,
  costForTwoMessage,
  cloudinaryImageId
  }) => {
  return (
    <div className="menu-rd-card-content">
      <div className="menu-rd-left-side">
      <p className="menu-rd-name">{name}</p>
        <p className="menu-rd-location">{city}, {locality}</p>
        <p className="menu-rd-cuisines">{cuisines.join(", ")}</p>
        <div className="menu-rd-footer">
          <h1 className="menu-rd-stars">
            {
              avgRating && (avgRating + " " +
              "★".repeat(Math.floor(avgRating)) +
              "☆".repeat(5 - Math.floor(avgRating)))
            }
          </h1>
          <h1 className="menu-rd-rating">{totalRatingsString}</h1>
        </div>
        <h1 className="menu-rd-cost">{costForTwoMessage}</h1>
      </div>
      <div className="menu-rd-right-side">
        <img
          src={imgCdnUrl + cloudinaryImageId}
          alt="Restaurant Image" className="restaurant-image"
        />
      </div>
    </div>
  );
}

const MenuCategory = ({ title, itemCards }) => {
  return (
    <div className="menu-category">
      <h1 className="category-title">{title}</h1>
      {
        itemCards?.map(({card: {info: {id, name, price}, info}}) => {
          return info &&
            <div className="item" key={id}>
              <h1 className="item-name">{name}</h1>
              <h1 className="item-price">{price / 100 || ''}</h1>
            </div>
        })
      }
    </div>
  );
}

const Menu = () => {
  const { id } = useParams();
  const [restaurantInfo, setRestaurantInfo] = useState();
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    // Fetch data from server
    (async () => {
      try {
        const resp = await fetch(menuUrl + id);
        const respJson = await resp.json();

        setRestaurantInfo(respJson?.data?.cards?.[2]?.card?.card?.info);
        setMenu(respJson?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
      } catch (error) {
        alert(error);
      }
    })();
  }, []);

  if (!restaurantInfo) {
    return (
      <div className="menu-page">
        <ShimmerCard />
      </div>
    );
  }

  return (
    <div className="menu-page">
      <MenuRestaurantCard {...restaurantInfo} />
      <div className="menu-title-container">
        <h1 className="menu-title"><span>MENU</span></h1>
      </div>
      <div className="menu-container">
        {
          menu.map((category) => {
            const { title, itemCards } = category?.card?.card || {};

            return title && itemCards &&
              <MenuCategory key={title} {...{title, itemCards}} />;
          })
        }
      </div>
    </div>
  );
};

export default Menu;