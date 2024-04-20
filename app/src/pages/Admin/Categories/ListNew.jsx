import { useState } from "react"
import AppButton from '../../../components/Button'
import Create from './Create'

const ListNew = (props) => {
    const [childrenArray, setChildrenArray] = useState([])
    const [showModel, setShowModel] = useState(false)
    const [parentCategory, setParentCategory] = useState('')
    const style = {
        fontSize: '.7em',
        width: '100%',
        marginTop: '1em'
    };

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

        {props.categories.map((category, i) => {
                return(
                    <div className="list" key={i}>
                        {
                            (category.children)
                            &&
                            <i
                                onClick={(e) => showChildrenListing(e, i)}
                                className="fa-solid fa-angle-right category-icon">
                            </i>
                        }
                        <span className='list-element'>
                            { category.name } {Boolean(childrenArray.includes(i))}
                            <span id="crud-category">
                                <i className="fa-solid fa-pen-to-square"></i>
                                &nbsp; &nbsp;
                                <i className="fa-solid fa-circle-plus" onClick={() => setParentCategory(category)}></i>
                            </span>
                        </span>
                        {(category.children && childrenArray.includes(i))
                        && 
                        <ListNew id={i} categories={category.children}/>}
                    </div>
                )
            })
        }
    </section>
}

export default ListNew