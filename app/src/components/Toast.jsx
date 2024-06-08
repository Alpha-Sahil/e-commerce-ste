import { useDispatch, useSelector } from "react-redux"
import { hideToast } from '../Redux/Slices/toast'
import { useCallback } from "react"

const Toast = (props) => {
    const dispatch = useDispatch()
    const message = useSelector(state => state.toast.message)
    const closeToast = useCallback(() => {
        dispatch(hideToast())
    })

    return <>
        {message && <div className="toast">
            <div className="toast-container">
                <div className="clost-toast" onClick={closeToast}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <div>
                    { message }
                </div>
            </div>
        </div>}
    </>
}

export default Toast