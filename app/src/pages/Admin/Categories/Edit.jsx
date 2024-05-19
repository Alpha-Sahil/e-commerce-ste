import axios from 'axios'
import Form from './Form'
import Model from '../../../components/Model'
import { useState } from 'react'

const Edit = (props) => {
    const [errors, setErrors] = useState([])

    const submit = async (dataform) => {
        let {data} = await axios.put(`http://localhost:3000/admin/categories/${props.category._id}/edit`, dataform, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

        setErrors(data.errors)

        props.closed()
    }

    return (
        <Model heading="Edit Category" closed={ props.closed }>
            {
                errors.length > 0
                &&
                <div className="errors">
                    <div className="erros-container">
                        {errors.map((error, j) => {
                            return(
                                <div key={j}>{j + 1}. { error.msg } </div>
                            )
                        })}
                    </div>
                </div>
            }
            <Form
                category={props.category}
                submitted={submit} />
        </Model>
    )
}

export default Edit