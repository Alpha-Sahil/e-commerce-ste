import logo from '../assets/images/logo.png'

const Header = () => {
    return (
        <header>
            <nav>
                <div className="navigation-container">
                    <div className="navigation">
                        <div className="navigation-logo">
                            <img src={logo} alt="Loading..." />
                        </div>
                        <div className="navigation-link">
                            <div className="navigation-link-container">
                                <ul type="none" className="navigation-ul">
                                    <li>
                                        <a href="/wishlist.html">    
                                            <i className="fa-solid fa-heart"></i>Wishlist
                                        </a>
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