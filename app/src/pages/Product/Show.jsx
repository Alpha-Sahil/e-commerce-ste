import AppButton from '../../components/Button'
import Products from './Index'
import Review from './review/Index'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductQuery } from "../../Redux/Apis/product";

const Show = () => {
    const params = useParams()
    const { data, isError, isFetching, isSuccess, error} = useProductQuery(params.product)

    return <div className="product-item">
        <div className="product-item-container">
            <div className="product-item-box">
                <div className="product-item-box-container">
                    <div className="product-item-image">
                        <img src={ data?.product?.imageUrl } alt="" />
                    </div>
                    <div className="product-item-description">
                        <div className="produc-item-desc-contaniner">
                            <div className="product-item-header">
                                <div className="product-item-heading">
                                    <h1>{ data?.product?.name }</h1>
                                </div>
                                <div className="product-item-price">
                                    <h3>$200</h3>
                                </div>
                            </div>
                            <div className="product-item-main-description">
                                <p>
                                    { data?.product?.description }
                                </p>
                            </div>

                            <div className="stock-alert">
                                <p>
                                    <b>
                                        Hurry up! only two items are remaining
                                    </b>
                                </p>
                            </div>

                            <div className="product-item-actions">
                                <AppButton>Buy</AppButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Review product={ params.product }/>

            <Products />
        </div>
    </div>
}

export default Show