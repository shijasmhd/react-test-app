import { restaurantList } from "./config";

const RestaurantCard = ({cloudinaryImageId, name, cuisines, avgRating}) => {
  return (
    <div className="resto-card">
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
        cloudinaryImageId} alt="card image" />
      <div className="details">
        <h3>{name}</h3>
        <h4>{cuisines.join(',')}</h4>
        <h4>{avgRating + "*"}</h4>
      </div>
    </div>
  );
}

const CategoriesList = () => {
  const placeHolder = "Search food or restaurant";

  return (
    <div className="categories-container">
      <input type="text" name="search" className="search-bar" placeholder={placeHolder}/>
    </div>
  );
}

const RestaurantList = () => {
  return (
    <div className="restaurant-container">
      {
        restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} {...restaurant.info}/>
        ))
      }
    </div>
  );
}

const Body = () => {
  return (
    <>
      <CategoriesList/>
      <RestaurantList/>
    </>
  );
}

const NavItems = () => {
  return (
    <div className="nav-container">
      <ul className="nav-items">
        <li className="home">Home</li>
        <li className="about">About Us</li>
        <li className="contact-us">Contact Us</li>
        <li className="cart">Cart</li>
      </ul>
    </div>
  )
}

const Header = () => {
  return (
    <div className="header">
      <img
        src="./src/assets/logo.png"
        alt="logo" className="logo" />
      <select name="location" id="location" className="location">
        <option value="delhi">Delhi</option>
        <option value="mumbai">Mumbai</option>
        <option value="bangalore">Bangalore</option>
      </select>
      <NavItems/>
    </div>
  )
}

const App = () => {
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  );
}

export default App;