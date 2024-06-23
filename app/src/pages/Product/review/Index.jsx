import Create from './Create'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { fetchReviews, removeReview } from '../../../Redux/Slices/review'
import { useDispatch, useSelector } from 'react-redux'
import { useDeleteReviewMutation } from '../../../Redux/Apis/review'

const Index = (props) => {
    const dispatch = useDispatch()
    const [deleteReview, { isLoading }] = useDeleteReviewMutation()
    const reviews = useSelector((state) => state.review.reviews)
    const createReview = useMemo(() => {
        return <Create product={ props.product }/>
    }, [])
    const removeReviewFromServer = useCallback(async (review) => {
        if (!confirm('Are you sure ?')) return

        await deleteReview({review: review, product: props.product})

        dispatch(removeReview(review))
    }, [])
    const reviewList = useMemo(() => {
        return reviews.map((review, i) => {
            return <div className="review" key={ i }>
                <p>{ review.message }</p>
                <div className="ratings">
                    &#9734; &#9734; &#9734; &#9734; &#9734;
                </div>
                <div className="delete-review" onClick={() => removeReviewFromServer(review._id)}>
                    <i className="fa-solid fa-trash"></i>
                </div>
            </div>
        })
    }, [reviews])  

    useEffect(() => { dispatch(fetchReviews(props.product)) }, [])

    return <>
        <div className="product-item-reviews">
            <div className="product-item-reviews-container">
                { createReview }
                <div className="product-item-reviews-box">
                    { reviewList }
                </div>
            </div>
        </div>
    </>
}

export default Index