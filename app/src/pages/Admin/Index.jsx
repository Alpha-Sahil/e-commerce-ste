import AppButton from '../../components/Button'
import Create from './Categories/Create'
import List from './Categories/List'
import Products from './Products/Index'
import useCategories from '../../hooks/useCategories'
import { useState, useMemo } from 'react'

const Index = () => {
    const { categories, loading } = useCategories()
    const [showModel, setShowModel] = useState(false)
    const productComponent = useMemo(() => { return <Products /> }, [])
    const style = {
        fontSize: '.7em',
        width: '100%',
        marginTop: '1em'
    };

    return(
        <>
            {
                showModel
                && 
                <Create closed={ () => setShowModel( false ) } />
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
                                                <List categories={ categories.grouped } loading={ loading } />
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