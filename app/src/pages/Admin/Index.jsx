import Categories from './Categories/Index'
import useCategories from '../../hooks/useCategories'
import ListNew from './Categories/ListNew'
import AppButton from '../../components/Button'
import Create from './Categories/Create'
import { useState } from 'react'

const Index = () => {
    const [showChildren, setShowChildren] = useState(false)
    const [showModel, setShowModel] = useState(false)
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

    const addCategory = (value) => {
        setCategories([...categories, value])

        setShowModel(false)
    }

    const removeCategory = (value) => {
        let allCategories = categories.filter((category) => category._id !== value)

        setCategories(allCategories)

        setShowModel(false)
    }

    return(
        <>
            {
                showModel
                && 
                <Create
                    created={addCategory}
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
                                                <ListNew categories={ groupedCategories } />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="admin-panel-content">
                            <div className="content-main">
                                <Categories />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index