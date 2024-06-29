import Form from './Form'
import Model from '../../../components/Model'
import { toggleProgressBar } from '../../../Redux/Slices/progressBar'
import { useState } from 'react'
import { useCreateCategoryMutation } from '../../../Redux/Apis/category'
import { useDispatch } from 'react-redux'
import { fetchCategories } from '../../../Redux/Slices/categories'

const Create = (props) => {
    const dispatch = useDispatch()
    const [createCategory, { isLoading }] = useCreateCategoryMutation()
    const [errors, setErrors] = useState([])

    const submit = async (dataform) => {
        dispatch(toggleProgressBar('show'))

        let response = await createCategory(dataform)

        dispatch(toggleProgressBar('hide'))

        if (response.data?.errors) setErrors(response.data?.errors)

        else {
            dispatch(fetchCategories())

            props.closed()
        }
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