import ListNew from "./ListNew"
import useCategories from "../../../hooks/useCategories"

const IndexNew = () => {
    const {
        categories,
        setCategories,
        groupedCategories,
        loading
    } = useCategories()

    console.log(categories)

    return (
        <div className="inner-main-container">
            <div className="categories-search">
                <i className="fa-solid fa-magnifying-glass search-icon"></i>
                <input
                    placeholder='Search Category...'
                    type="text"
                    name="search"
                    id="search"
                    className='search-input' />
            </div>
            <div className="categories-list">
                <div className="inner-categories-list">
                    <div className="categories-list-box">
                        <ListNew
                            categories={groupedCategories}
                            originalCategories={categories} />
                    </div>
                </div>
            </div>
        </div>
    )
}