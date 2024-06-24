import Card from "../../components/Card"
import WishlistSync from '../Wishlist/Sync'
import { fetchProducts } from '../../Redux/Slices/products'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useMemo } from "react"

const Index = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.product.products)
    
    useEffect(() => {dispatch(fetchProducts()) }, [])

    const productList = useMemo(() => {
        return <div className="product-box-container">
            {products.map((product, i) => {
                return  <Card image={ product.imageUrl } key={ i }>
                        <div className="product-info">
                            <Link to={`/products/${product._id}`}>
                                <div className="product-title">{ product.name }</div>
                                <div className="product-price">$200</div>
                            </Link>
                                <WishlistSync product={ product._id }></WishlistSync>
                            {/* <button>
                                <i className="fa-solid fa-cart-shopping"></i> Cart
                                </button> */}
                        </div>
                    </Card>
            })}
        </div>
    }, [products])

    return <section className="products-section">
        <div className="products">
            <div className="products-heading">
                <h1>Exclusive Products</h1>
            </div>
            <div className="products-container">
                <div className="products-box">
                    { productList }
                </div>
            </div>
        </div>
    </section>
}

export default Index