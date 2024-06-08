import { fetchCategories } from "../Redux/Slices/categories"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const useCategories = () => {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.category.categories)
    const loading = useSelector(state => state.category.loading)
    
    useEffect(() => { 
        const dispatchCategories = async () => {
            await dispatch(fetchCategories())
        }
        dispatchCategories()
    }, [])

    return { categories, loading }
}

export default useCategories