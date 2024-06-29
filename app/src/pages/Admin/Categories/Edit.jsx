import Form from './Form'
import Model from '../../../components/Model'
import { toggleProgressBar } from '../../../Redux/Slices/progressBar'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useUpdateCategoryMutation } from '../../../Redux/Apis/category'

const Edit = (props) => {
    const dispatch = useDispatch()
    const [updateCategory, {}] = useUpdateCategoryMutation()
    const [errors, setErrors] = useState([])

    const submit = async (dataform) => {
        dispatch(toggleProgressBar('show'))
        
        let response = await updateCategory({category: props.category._id, body: dataform})
        
        dispatch(toggleProgressBar('hide'))
        
        setErrors(response.data.errors)
        
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