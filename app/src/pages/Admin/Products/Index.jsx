import AppButton from '../../../components/Button'
import Create from './Create'
import List from './List'
import { useState, useMemo } from 'react'

const Index = () => {
    const [showModel, setShowModel] = useState(false)
    const list = useMemo(() => { return <List /> })

    return (
        <>
            { showModel && <Create closed={() => setShowModel(false)}/> }
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