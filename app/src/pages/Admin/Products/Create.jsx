import axios from 'axios'
import Form from './Form'
import Model from '../../../components/Model'
import { useState } from 'react'

const Create = (props) => {
    const [errors, setErrors] = useState([])
    
    const submit = async (dataform) => {
        let {data} = await axios.post('http://localhost:3000/admin/categories/create', dataform, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        if (data.errors) setErrors(data.errors)

        else props.closed()
    }

    return (
        <>
            <Model heading="Create Product" closed={ props.closed }>
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
                <Form submitted={ submit } />
            </Model>
        </>
    )
}

export default Create