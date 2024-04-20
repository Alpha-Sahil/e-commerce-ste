import { useState, useMemo } from 'react'
import AppButton from '../../../components/Button'
import Create from './Create'
import List from './List'
import useCategories from '../../../hooks/useCategories'

const Index = () => {
    const [showModel, setShowModel] = useState(false)
    const {categories, setCategories, loading} = useCategories()
    
    const addCategory = (value) => {
        setCategories([...categories, value])

        setShowModel(false)
    }

    const removeCategory = (value) => {
        let allCategories = categories.filter((category) => category._id !== value)

        setCategories(allCategories)

        setShowModel(false)
    }

    const memorizedList = useMemo(() => {
        return loading
                ? <div className="loader"></div>
                : <List categories={categories} deleted={removeCategory}/>
    }, [categories, loading])

    return (
        <section className='admin-categories-section'>
            {
                showModel
                && 
                <Create
                    created={addCategory}
                    categories={ categories }
                    closed={ () => setShowModel( false ) } />
            }

            <div className="admin-container">
                <div className="admin-table">
                    <div
                        className="create-button"
                        style={{float: 'right'}}
                        onClick={() => setShowModel(true)}>
                        <AppButton className="app-button">Create</AppButton>
                    </div>
                    { memorizedList }
                </div>
            </div>  
        </section>
    )
}

export default Index