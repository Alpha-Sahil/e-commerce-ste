const Index = () => {
    return (
        <section>
            <div className="admin-container">
                <div className="admin-table">
                    <div className="create-button" style={{float: 'right'}}>
                        <button className="app-button"> + Create</button>
                    </div>
                    <div className="admin-inner-table">
                        <table class="table" style={{ border: '1px solid black', borderRadius: '10px' }}>
                            <thead class="thead-dark admin-table-head">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Slug</th>
                                    <th scope="col">Parent Category</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Active</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>T shirts</td>
                                    <td>
                                        T-shirts are casual garments typically made of cotton, featuring short sleeves and a round neckline, commonly worn as everyday attire or for leisure activities.
                                    </td>
                                    <td>t-shirts</td>
                                    <td>Top wears</td>
                                    <td>-</td>
                                    <td>true</td>
                                    <td>
                                        <div className="category-action">
                                            <button className="app-button" style={{fontSize: '1em'}}>Edit</button>
                                            <button className="app-button" style={{fontSize: '1em'}}>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>  
        </section>
    )
}

export default Index