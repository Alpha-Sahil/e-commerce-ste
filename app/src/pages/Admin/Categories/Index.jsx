import List from "./List"

const Index = () => {
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
                        <List />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index