import axios from "axios"
import Detete from "./Delete"

const List = (props) => {
    const deleteCategory = (event, id) => {
        event.preventDefault()

        if(!confirm('Are you sure ?')) return

        Detete(id)

        props.deleted(id)
    }

    return(
        <div className="admin-inner-table" style={{overflowX: 'scroll'}}>
            <table className="table" style={{ border: '1px solid black', borderRadius: '10px' }}>
                <thead className="thead-dark admin-table-head">
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
                    {props.categories.map((category, i) => {
                        return (
                            <tr key={i}>
                                <th scope="row"> { i+1 } </th>
                                <td>{ category.name }</td>
                                <td>
                                { category.description }
                                </td>
                                <td>{ category.slug }</td>
                                <td></td>
                                <td>{ category.image ? category.imageURL : '-' }</td>
                                <td>{ category.active ? 'true' : 'false' }</td>
                                <td>
                                    <div className="category-action">
                                        <button
                                            className="app-button"
                                            style={{fontSize: '1em'}}>
                                            Edit
                                        </button>
                                        <button
                                            onClick={(event) => deleteCategory(event, category._id)} 
                                            className="app-button"
                                            style={{fontSize: '1em'}}>
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default List