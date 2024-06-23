import bannerImage from '../assets/images/t-banner3.png'
import Category from "./Category/Index"
import Products from './Product/Index'
import footerBannerImage from '../assets/images/footer-banner.jpg'
import '../css/index.css'

const Home = () => {
    return (
        <>
            <section className='banner-section-home'>
                <div className="banner-container">
                    <div className="banner">
                        <div className="banner-inner">
                            <div className="banner-two-parts">
                                <div className="banner-slogan">
                                    <div className="slogan">
                                        <h1 style={{ fontSize: '3em' }}>Fashion for Every Occasion, Just a Click Away!</h1>
                                        <h3>
                                            Discover fashion for every occasion, conveniently accessible with just a click. 
                                            Explore now for style that suits every moment.
                                        </h3>
                                        <div className="slogan-icons">
                                            <i className="fa-solid fa-cart-shopping"></i>
                                            <i className="fa-solid fa-truck"></i>
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                        <div className="slogan-button">
                                            <button>
                                                Start Shoping
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="banner-image">
                                    <img src={ bannerImage } alt="Loading..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Category />

            <Products />

            <section className="lower-banner-section">
                <div className="lower-banner-section">
                    <div className="lower-banner-section-container">
                        <div className="lower-banner-section-image">
                            <img src={ footerBannerImage } alt="Loading..." />
                            <span>Buy With Ease</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home