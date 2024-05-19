import AppButton from '../../../components/Button'
import { useState } from 'react'

const Form = (props) => {
    const [form, setForm] = useState({
        name: props.product?.name || '',
        description: props.product?.description || '',
        slug: props.product?.slug || '',
        image: props.product?.image || '',
        active: props.product?.active || '',
    })

    const [image, setImage] = useState()

    const changeState = (e) => {
        const { name, value } = e.target

        setForm((form) => ({...form, [name]: value}))
    }

    const changeImage = (e) => {
        setImage(e.target.files[0])
    } 

    const handleClick = async (e) => {
        e.preventDefault()

        let dataform =  new FormData();

        dataform.append('name', form.name);
        dataform.append('description', form.description);
        dataform.append('slug', form.slug);
        dataform.append('parent', props.parentCategory?._id || '');
        dataform.append('image', image);
        dataform.append('active', form.active);

        console.log(dataform)

        await props.submitted(dataform)
    }

    return(
        <form encType="multipart/form-data">
            <div className="catefory-form">
                <div className="category-form-container">
                    <div className="app-form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            onChange={changeState}
                            value={ form.name }
                            className="app-input"
                            name='name'
                            type="text"
                            id='name' />
                    </div>
                    <div className="app-form-group">
                        <label htmlFor="description">Description:</label>
                        <textarea
                            onChange={ changeState }
                            value={ form.description }
                            className="app-input"
                            name='description'
                            type="text"
                            id='description' />
                    </div>
                    <div className="app-form-group">
                        <label htmlFor="slug">Slug:</label>
                        <input
                            onChange={ changeState }
                            value={ form.slug }
                            className="app-input"
                            name="slug"
                            type="text"
                            id='slug' />
                    </div>
                    <div className="radio-form-group">
                        <div className="radio-group">
                            <input
                                onChange={ changeState }
                                value={true}
                                className="app-input"
                                type="radio"
                                name='active'
                                id='active' />
                            &nbsp;
                            <label htmlFor="slugActive">Active</label>
                        </div>
                        <div className="radio-group">
                            <input
                                onChange={ changeState }
                                value={ false }
                                className="app-input"
                                type="radio"
                                name="active"
                                id='active' />
                            &nbsp;
                            <label htmlFor="slugInActive">InActive</label>
                        </div>
                    </div>
                    <div className="app-form-group">
                        <label htmlFor="categoryfile">Image:</label>
                        <input
                            onChange={ changeImage }
                            type="file"
                            name="image"
                            id="categoryfile" />
                    </div>
                    <div className="submit-category-from">
                        <AppButton className="app-button" onClick={ handleClick }>Submit</AppButton>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Form