import { Link } from 'react-router-dom';
import Username from '../features/user/Username';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        The Mozzarella Express Co.
      </Link>

      <SearchOrder />

      <Username />
    </header>
  );
}

export default Header;
