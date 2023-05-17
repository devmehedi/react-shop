import './Header.css'
import logo from '../images/Logo.svg'
const Header = () => {
    return (
        <div className='header-container'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <nav>
                    <a href="/order">Order</a>
                    <a href="/review">Order Review</a>
                    <a href="/inventory">Manage Inventory</a>
                    <a href="/login">login</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;