import shirt1 from '../assets/images/category-t-shirt.gif'

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-container">
                <div className="card-image">
                    <img src={ props.image } alt="Loading..." temp={props.image}/>
                    {/* <img src={ image } alt="Loading..." /> */}
                </div>
                { props.children }
                {/* <div className="product-info">
                    <div className="product-title">cool tshirts</div>
                    <div className="product-price">$200</div>
                    <button>
                        <i className="fa-solid fa-heart"></i> Wishlist
                    </button>
                    <button>
                        <i className="fa-solid fa-cart-shopping"></i> Cart
                    </button>
                </div> */}
            </div>
        </div>
    )
}

export default Card