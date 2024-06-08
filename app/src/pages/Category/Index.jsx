import Card from "../../components/Card"
import useCategories from "../../hooks/useCategories"

const Index = () => {
    const { categories, loading } = useCategories()

    return (
        <section className="categories-section">
            <div className="categories">
                <div className="categories-container">
                    <h1>Choose from your favorite category</h1>
                    <div className="categories-inner-container">
                        <div className="categories-box">
                            { 
                                loading
                                ? <div className="loader"></div>
                                : categories.raw.map( (category, i) => {
                                    return(
                                        <Card image={ category.imageUrl } key={i}>
                                        <div className="category-infomation">
                                            <button><i className="fa-solid fa-shirt"></i>{ category.name }</button>
                                        </div>
                                    </Card>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Index