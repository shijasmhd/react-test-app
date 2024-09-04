import { Link } from "react-router-dom";
import { imgCdnUrl } from "../config";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating, id }) => {
  return (
    <Link to={"./menu/" + id} className="resto-card">
      <img src={imgCdnUrl + cloudinaryImageId} alt="card image" />
      <div className="details">
        <h3>{name}</h3>
        <h4>{cuisines?.join(',')}</h4>
        <h4>{avgRating && avgRating + "*"}</h4>
      </div>
    </Link>
  );
}

export default RestaurantCard;