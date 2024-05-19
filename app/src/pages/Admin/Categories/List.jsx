import { useState, useCallback } from "react"
import Create from './Create'
import Edit from './Edit'
import Detete from "./Delete"

const List = (props) => {
    let activeCategory = (new URL(window.location.href)).searchParams.get("category");
    const [childrenArray, setChildrenArray] = useState([])
    const [parentCategory, setParentCategory] = useState('')
    const [editCategory, setEditCategory] = useState('')

    const showChildrenListing = (e, i) => {
        $(e.target).toggleClass('down')

        if (childrenArray.includes(i)) setChildrenArray(childrenArray.filter(child => child !== i))

        else setChildrenArray([...childrenArray, i])
    }

    const addCategory = (value) => {
        setCategories([...categories, value])

        setParentCategory(false)
    }

    const removeCategory = (value) => {
        let allCategories = categories.filter((category) => category._id !== value)

        setCategories(allCategories)

        setShowModel(false)
    }

    const deleteCategory = (event, id) => {
        event.preventDefault()

        if(!confirm('Are you sure ?')) return

        Detete(id)

        // props.deleted(id)
    }

    const fetchProducts = useCallback((category) => props.fetchProducts(category), [])

    return <section>
        {
            parentCategory
            && 
            <Create
                parentCategory={parentCategory}
                created={addCategory}
                categories={ props.originalCategories }
                closed={ () => setParentCategory( '' ) } />
        }
        {
            editCategory
            && 
            <Edit
                category={editCategory}
                created={addCategory}
                categories={ props.originalCategories }
                closed={ () => setEditCategory( '' ) } />
        }
        <div className="list" onClick={ () => fetchProducts() }>
            <span className={`list-element ${ !activeCategory && "active-category"}`}>All Products</span>
        </div>
        {props.categories.map((category, i) => {
                return(
                    <div
                        className='list'
                        key={i}
                        onClick={ () => fetchProducts(category) }>
                        {
                            (category.children)
                            &&
                            <i
                                onClick={(e) => showChildrenListing(e, i)}
                                className="fa-solid fa-angle-right category-icon">
                            </i>
                        }
                        <span className={`list-element ${ activeCategory === category._id && "active-category"}`}>
                            { category.name } {Boolean(childrenArray.includes(i))}
                            <span id="crud-category">
                                <i className="fa-regular fa-trash-can"  onClick={(event) => deleteCategory(event, category._id)}></i>
                                &nbsp; &nbsp;
                                <i className="fa-solid fa-pen-to-square" onClick={() => setEditCategory(category)}></i>
                                &nbsp; &nbsp;
                                <i className="fa-solid fa-circle-plus" onClick={() => setParentCategory(category)}></i>
                            </span>
                        </span>
                        {(category.children && childrenArray.includes(i))
                        && 
                        <List id={i} categories={category.children}/>}
                    </div>
                )
            })
        }
    </section>
}

export default List