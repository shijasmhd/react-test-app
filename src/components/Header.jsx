import { locations } from '../config';
import NavItems from './NavItems';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className="header">
      <img
        src={logo}
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
