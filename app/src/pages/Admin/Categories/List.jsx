import Create from './Create'
import Edit from './Edit'
import { fetchProducts } from '../../../Redux/Slices/products'
import { useDestroyCategoryMutation } from '../../../Redux/Apis/category'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { useState, useCallback } from "react"

const List = (props) => {
    let activeCategory = (new URL(window.location.href)).searchParams.get("category");
    const dispatch = useDispatch()
    const [destroyCategory, { isLoading }] = useDestroyCategoryMutation()
    const [childrenArray, setChildrenArray] = useState([])
    const [parentCategory, setParentCategory] = useState('')
    const [editCategory, setEditCategory] = useState('')
    const navigateTo = useNavigate();

    const showChildrenListing = useCallback((e, i) => {
        $(e.target).toggleClass('down')

        if (childrenArray.includes(i)) setChildrenArray(childrenArray.filter(child => child !== i))

        else setChildrenArray([...childrenArray, i])
    })

    const deleteCategory = async (event, category) => {
        event.preventDefault()

        if (category.children) return alert('Delete childs of this category first')

        if (confirm('Are you sure ?')) await dispatch(destroyCategory(category._id))
    }

    const fetchProductsOfCategory = useCallback((categoryId = null) => {
        categoryId
            ? window.history.pushState({}, '', `/admin?category=${categoryId}`)
            : navigateTo('/admin') 

        dispatch(fetchProducts(categoryId))
    }, [])

    return <section>
        { parentCategory && 
            <Create
                parentCategory={ parentCategory }
                categories={ props.categories }
                closed={ () => setParentCategory( '' ) } /> }
        { editCategory && 
            <Edit
                category={editCategory}
                categories={ props.categories }
                closed={ () => setEditCategory( '' ) } /> }

        { props.id === undefined && <div className="list" onClick={ () => fetchProductsOfCategory() }>
                <span className={`list-element ${ !activeCategory && "active-category"}`}>All Products</span>
            </div> }
        
        { props.loading
            ? 'loading...'
            : props.categories.map((category, i) => {
                return(
                    <div
                        className='list'
                        key={i}
                        onClick={ () => fetchProductsOfCategory(category._id) }>
                        {
                            (category.children)
                            &&
                            <i
                                onClick={(e) => showChildrenListing(e, i)}
                                className="fa-solid fa-angle-right category-icon">
                            </i>
                        }
                        <span className={`list-element ${ activeCategory == category._id && "active-category"}`}>
                            { category.name } { Boolean(childrenArray.includes(i)) }
                            <span id="crud-category">
                                <i className="fa-regular fa-trash-can"  onClick={(event) => deleteCategory(event, category)}></i>
                                &nbsp; &nbsp;
                                <i className="fa-solid fa-pen-to-square" onClick={() => setEditCategory(category)}></i>
                                &nbsp; &nbsp;
                                <i className="fa-solid fa-circle-plus" onClick={() => setParentCategory(category)}></i>
                            </span>
                        </span>
                        {(category.children && childrenArray.includes(i))
                        && 
                        <List id={ i } categories={ category.children } loading={ props.loading } />}
                    </div>
                )
            })
        }
    </section>
}

export default List