import './Header.css'
import logo from '../images/Logo.svg'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='header-container'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <nav>
                    <Link to="/">Shop</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/review">Order Review</Link>
                    <Link to="/inventory">Manage Inventory</Link>
                    <Link to="/login">login</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;