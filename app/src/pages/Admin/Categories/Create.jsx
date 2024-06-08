import axios from 'axios'
import Form from './Form'
import Model from '../../../components/Model'
import { useState } from 'react'
import { toggleProgressBar } from '../../../Redux/Slices/progressBar'
import { useDispatch } from 'react-redux'

const Create = (props) => {
    const [errors, setErrors] = useState([])
    const dispatch = useDispatch()

    const submit = async (dataform) => {
        dispatch(toggleProgressBar('show'))

        let {data} = await axios.post('http://localhost:3000/admin/categories/create', dataform, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

        dispatch(toggleProgressBar('hide'))

        if (data.errors) setErrors(data.errors)

        else props.closed()
    }

    return (
        <Model heading="Create Category" closed={ props.closed }>
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
                parentCategory={ props.parentCategory }
                submitted={ submit } />
        </Model>
    )
}

export default Create