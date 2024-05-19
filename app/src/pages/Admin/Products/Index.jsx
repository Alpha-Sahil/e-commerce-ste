import AppButton from '../../../components/Button'
import Create from './Create'
import { useState, useMemo } from 'react'
import List from './List'

const Index = (props) => {
    const [showModel, setShowModel] = useState(false)
    const [products, setProducts] = useState([])

    const list = useMemo(() => {
        return <List products={ products } />
    }, [products])

    return (
        <>
            {
                showModel
                &&
                <Create closed={() => setShowModel(false)}/>
            }

            <div className="products-sections">
                <div className="product-container">
                    <div className="product-up-container">
                        <div className="products-create-button">
                            <AppButton onClick={() => setShowModel(true)} >
                                Create
                            </AppButton>
                        </div>
                    </div>
                    { list }
                </div>
            </div>
        </>
    )
}

export default Index