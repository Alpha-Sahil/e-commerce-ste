const List = (props) => {

    return (
        <div className="product-box">
            {
                props.products.length
                ? <div className="products-main">
                    <table className='product-table'>
                        <thead className='product-table-heading'>
                            <th>#</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Slug</th>
                            <th>Stock</th>
                            <th>images</th>
                            <th>Status</th>
                        </thead>
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