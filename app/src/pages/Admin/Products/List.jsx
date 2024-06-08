import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../../../Redux/Slices/products"

const List = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.product.products)
    const loading = useSelector(state => state.product.loading)

    useEffect(() => { dispatch(fetchProducts()) }, [])

    return (
        <div className="product-box">
            { loading && <div className="loader" style={{width: '3em', margin: '5px 0 5px 0'}}></div>}
            {
                Boolean(products.length)
                ? <div className="products-main">
                    <table className='product-table'>
                        <thead className='product-table-heading'>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Slug</th>
                                <th>Stock</th>
                                <th>images</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, i) => {
                                    return(
                                        <tr key={i}>
                                            <td>{ i+1 }</td>
                                            <td>{ product.name }</td>
                                            <td>{ product.description }</td>
                                            <td>{ product.slug }</td>
                                            <td>{ product.stocks }</td>
                                            <td>
                                                {
                                                    product.image
                                                    ? <a href={product.imageUrl}>open</a>
                                                    : '-' 
                                                }
                                                </td>
                                            <td>{ product.active ? 'Active' : 'Inactive' }</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                : <div>
                    <h1>
                        <center>
                            No Products
                        </center>
                    </h1>
                </div>
            }
        </div>
    )
}

export default List