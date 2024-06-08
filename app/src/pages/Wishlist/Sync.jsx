import AppButton from '../../components/Button'
import { useCreateWishlistMutation, useDestroyWishlistMutation } from '../../Redux/Apis/wishlist'
import { showToast } from '../../Redux/Slices/toast'
import { useDispatch } from 'react-redux'

const Sync = (props) => {
    const dispatch = useDispatch()
    const [createWishlist, { isLoading }] = useCreateWishlistMutation()
    const addWishlist = async () => {
        let response = await createWishlist({product: props.product})
        
        dispatch(showToast(response.data.errors[0].msg ?? response.data?.errors[0].msg))
    }

    return <AppButton loading={ isLoading } onClick={ addWishlist }>
        <i className="fa-solid fa-heart"></i> Wishlist
    </AppButton>
}

export default Sync