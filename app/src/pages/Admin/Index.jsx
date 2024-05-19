import AppButton from '../../components/Button'
import Create from './Categories/Create'
import List from './Categories/List'
import Products from './Products/Index'
import useCategories from '../../hooks/useCategories'
import useProducts from '../../hooks/useProducts'
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useMemo, useCallback } from 'react'

const Index = () => {
    const [showModel, setShowModel] = useState(false)
    const [products, setProducts] = useState([])
    const addCategory = (value) => setShowModel(false)
    const navigateTo = useNavigate();


    useEffect(() => {
        const currentProducts = async () => {
            let response = await useProducts((new URLSearchParams(window.location.search)).get('category'))
            
            if (response.length) setProducts(response)
        }

        currentProducts()
    }, [])

    const {
        categories,
        setCategories,
        groupedCategories,
        loading
    } = useCategories()

    const style = {
        fontSize: '.7em',
        width: '100%',
        marginTop: '1em'
    };

    const productComponent = useMemo(() => {
        return <Products products={ products } />
    }, [products])

    const categoryProducts = useCallback(async (category) => {
        let activeCategoryProducts = await useProducts(category?._id)

        setProducts(activeCategoryProducts)

        category
            ? window.history.pushState({}, '', `/admin/?category=${category._id}`)
            : navigateTo('/admin') 
    }, [products])

    return(
        <>
            {
                showModel
                && 
                <Create
                    created={ addCategory }
                    closed={ () => setShowModel( false ) } />
            }
            <div className="admin-panel">
                <div className="admin-panel-container">
                    <div className="admin-panel-box">
                        <div className="admin-panel-categories">
                            <div className="main-container">
                                <div className="inner-main-container">
                                    <div className="categories-search">
                                        <i className="fa-solid fa-magnifying-glass search-icon"></i>
                                        <input
                                            placeholder='Search Category...'
                                            type="text"
                                            name="search"
                                            id="search"
                                            className='search-input' />
                                    </div>
                                    <div className="categories-list">
                                        <div className="inner-categories-list">
                                            <div
                                                style={style}
                                                onClick={() => setShowModel(true)}>
                                                <AppButton style={{float: 'right'}}>
                                                    Create Category
                                                </AppButton>
                                            </div>
                                            <div className="categories-list-box">
                                                <List fetchProducts={ categoryProducts } categories={ groupedCategories } />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="admin-panel-content">
                            <div className="content-main">
                                { productComponent }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index