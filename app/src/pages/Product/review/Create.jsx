import AppButton from '../../../components/Button'
import { useCreateReviewMutation } from '../../../Redux/Apis/review'
import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { showToast } from '../../../Redux/Slices/toast'
import { toggleProgressBar } from '../../../Redux/Slices/progressBar'

const Create = (props) => {
    const dispatch = useDispatch()
    const [review, setReview] = useState('')
    const [errors, setErrors] = useState([])
    const [createReview, { isLoading }] = useCreateReviewMutation()
    const changeValue = useCallback((e) => {
        setReview(e.target.value)
    })
    const submit = useCallback(async () => {
        let data = { message: review }

        dispatch(toggleProgressBar('show'))

        let response = await createReview({ product: props.product, data: data })

        dispatch(toggleProgressBar('hide'))

        if (response.data.errors.length) setErrors(response.data.errors)
        
        else dispatch(showToast(response.data?.message))
    }, [review])

    return <>
        <div className="write-review">
            <div className="create-review-textarea">
                <textarea
                    onChange={ changeValue }
                    rows="5"
                    cols="50"
                    placeholder="Write a review..." >
                </textarea>
                <br />
                {
                    errors.map((error, i) => {
                        return <small style={{color: 'red'}} key={ i }>{ error.msg }</small>
                    })
                }
            </div>
            <div>
                <AppButton onClick={ submit } >Submit</AppButton>
            </div>
        </div>
    </>
}

export default Create