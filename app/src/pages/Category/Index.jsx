import Card from "../../components/Card"

const Index = () => {
    return (
        <section className="categories-section">
            <div className="categories">
                <div className="categories-container">
                    <div className="categories-inner-container">
                        <div className="categories-box">
                            <Card image='../assets/images/category-t-shirt.gif'>
                                <div className="category-infomation">
                                    <button><i className="fa-solid fa-shirt"></i> T-Shirts</button>
                                </div>
                            </Card>
                            <Card>
                                <div className="category-infomation">
                                    <button><i className="fa-brands fa-shirtsinbulk"></i> Shirts</button>
                                </div>
                            </Card>
                            <Card>
                                <div className="category-infomation">
                                    <button><i className="fa-brands fa-hashnode"></i> Jeans</button>
                                </div>
                            </Card>
                            <Card>
                                <div className="category-infomation">
                                    <button><i className="fa-solid fa-socks"></i> Shoes</button>
                                </div>
                            </Card>
                            <Card>
                                <div className="category-infomation">
                                    <button><i className="fa-solid fa-vest-patches"></i> Jackets</button>
                                </div>
                            </Card>
                            <Card>
                                <div className="category-infomation">
                                    <button><i className="fa-solid fa-hat-cowboy"></i> Caps</button>
                                </div>
                            </Card>
                            <Card>
                                <div className="category-infomation">
                                    <button><i className="fa-solid fa-face-rolling-eyes"></i> Underwear</button>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Index