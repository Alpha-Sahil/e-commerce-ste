import logo from '../assets/images/logo.png'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
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
                                        Categories
                                    </li>
                                    <li>
                                        Products
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