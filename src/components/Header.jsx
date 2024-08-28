import { locations } from '../config';
import NavItems from './NavItems';

const Header = () => {
  return (
    <div className="header">
      <img
        src="../src/assets/logo.png"
        alt="logo" className="logo" />
      <select name="location" id="location" className="location">
        {
          locations.map((location) => (
            <option value={location} key={location}>{location}</option>
          ))
        }
      </select>
      <NavItems/>
    </div>
  )
}

export default Header;
