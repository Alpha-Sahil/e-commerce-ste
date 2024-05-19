import List from "./List"
import useCategories from "../../../hooks/useCategories"

const Index = () => {
    const {
        categories,
        setCategories,
        groupedCategories,
        loading
    } = useCategories()

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
                        <List
                            categories={groupedCategories}
                            originalCategories={categories} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index