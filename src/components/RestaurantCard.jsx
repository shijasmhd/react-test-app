import { imgCdnUrl } from "../config";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="resto-card">
      <img src={imgCdnUrl + cloudinaryImageId} alt="card image" />
      <div className="details">
        <h3>{name}</h3>
        <h4>{cuisines.join(',')}</h4>
        <h4>{avgRating + "*"}</h4>
      </div>
    </div>
  );
}

export default RestaurantCard;