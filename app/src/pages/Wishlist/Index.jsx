import AppButton from '../../components/Button'
import Card from "../../components/Card"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchWishlist } from '../../Redux/Slices/wishlist'

const Index = (props) => {
    const wishlists = useSelector((state) => state.wishlist.wishlists)

    return <>
        <section className="wishlist-section">
            <div className="wislist">
                <div className="wishlist-container">
                    <div className="wishlist-box">
                        <div className="wishlist-filter">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </div>
                        <div className="wishlist-listing">
                            <div className="listing-container">
                                <div className="listing-box">
                                    <div className="wish-list">
                                        {
                                            wishlists.map((wishlist, i) => {
                                                return <Card key={ i } image={ wishlist.product.imageUrl }>
                                                    <div className="product-info">
                                                        <div className="product-title">cool tshirts</div>
                                                        <div className="product-price">$200</div>
                                                        <AppButton>Remove</AppButton>
                                                        <AppButton>Cart</AppButton>
                                                    </div>
                                                </Card>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Index