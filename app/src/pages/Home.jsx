import bannerImage from '../assets/images/t-banner1.png'
import shirt1 from '../assets/images/shirt-1.jpg'
import footerBannerImage from '../assets/images/footer-banner.jpg'
import Category from "./Category/Index"
import '../css/index.css'

const Home = () => {
    return (
        <>
            <section>
                <div className="banner-container">
                    <div className="banner">
                        <div className="banner-inner">
                            <div className="banner-two-parts">
                                <div className="banner-slogan">
                                    <div className="slogan">
                                        <h1 style={{fontSize: '3em'}}>Fashion for Every Occasion, Just a Click Away!</h1>
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
                                    <img src={bannerImage} alt="Loading..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Category />

            <section className="products-section">
                <div className="products">
                    <div className="products-container">
                        <div className="products-box">
                            <div className="product-box-container">
                                <div className="product-single">
                                    <div className="product-single-container">
                                        <div className="product-image">
                                            <img src={shirt1} alt="Loading..." />
                                        </div>
                                        <div className="product-info">
                                            <div className="product-title">cool tshirts</div>
                                            <div className="product-price">$200</div>
                                            <button>
                                                <i className="fa-solid fa-heart"></i> Wishlist
                                            </button>
                                            <button>
                                                <i className="fa-solid fa-cart-shopping"></i> Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="product-single">
                                    <div className="product-single-container">
                                        <div className="product-image">
                                            <img src="/images/shirt-2.jpg" alt="Loading..." />
                                        </div>
                                        <div className="product-info">
                                            <div className="product-title">cool tshirts</div>
                                            <div className="product-price">$200</div>
                                            <button>
                                                <i className="fa-solid fa-heart"></i> Wishlist
                                            </button>
                                            <button>
                                                <i className="fa-solid fa-cart-shopping"></i> Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="product-single">
                                    <div className="product-single-container">
                                        <div className="product-image">
                                            <img src="/images/shirt-3.jpg" alt="Loading..." />
                                        </div>
                                        <div className="product-info">
                                            <div className="product-title">cool tshirts</div>
                                            <div className="product-price">$200</div>
                                            <button>
                                                <i className="fa-solid fa-heart"></i> Wishlist
                                            </button>
                                            <button>
                                                <i className="fa-solid fa-cart-shopping"></i> Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="product-single">
                                    <div className="product-single-container">
                                        <div className="product-image">
                                            <img src="/images/shirt-4.jpg" alt="Loading..." />
                                        </div>
                                        <div className="product-info">
                                            <div className="product-title">cool tshirts</div>
                                            <div className="product-price">$200</div>
                                            <button>
                                                <i className="fa-solid fa-heart"></i> Wishlist
                                            </button>
                                            <button>
                                                <i className="fa-solid fa-cart-shopping"></i> Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="product-single">
                                    <div className="product-single-container">
                                        <div className="product-image">
                                            <img src="/images/shirt-5.jpg" alt="Loading..." />
                                        </div>
                                        <div className="product-info">
                                            <div className="product-title">cool tshirts</div>
                                            <div className="product-price">$200</div>
                                            <button>
                                                <i className="fa-solid fa-heart"></i> Wishlist
                                            </button>
                                            <button>
                                                <i className="fa-solid fa-cart-shopping"></i> Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- <div className="product-single">
                                    <div className="product-single-container">
                                        <div className="product-image">
                                            <img src="/images/shirt-6.jpg" alt="">
                                        </div>
                                        <div className="product-info">
                                            info
                                        </div>
                                    </div>
                                </div> --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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