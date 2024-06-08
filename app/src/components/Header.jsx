import logo from '../assets/images/logo.png'
import ProgressBar from './ProgressBar';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchWishlist } from '../Redux/Slices/wishlist';
import { useEffect } from 'react';
const Header = () => {
    const dispatch = useDispatch()
    const wishlists = useSelector((state) => state.wishlist.wishlists)

    useEffect(() => { dispatch(fetchWishlist()) }, [])

    return (
        <header>
            <ProgressBar />
            <nav>
                <div className="navigation-container">
                    <div className="navigation">
                        <Link to="/" className="navigation-logo">
                            <img src={logo} alt="Loading..." />
                        </Link>
                        <div className="navigation-link">
                            <div className="navigation-link-container">
                                <ul type="none" className="navigation-ul">
                                    <li>
                                        <Link to="wishlist">
                                            <i className="fa-solid fa-heart"></i>Wishlist { wishlists.length && wishlists.length }
                                        </Link>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-cart-shopping"></i>
                                        Cart
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-truck"></i>
                                        Orders
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header