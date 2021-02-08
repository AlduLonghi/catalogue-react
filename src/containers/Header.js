import SelectFilter from '../components/SelectFilter';
import gallery from '../assets/gallery.svg';

const Header = () => (
  <header className="d-flex justify-content-between align-items-center">
    <div className="d-flex align-items-center">
      <img className="logo" src={gallery} alt="logo" />
      <p data-testid="website_name">Online Museum</p>
    </div>
    <SelectFilter />
  </header>
);

export default Header;
