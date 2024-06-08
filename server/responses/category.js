require('dotenv').config()

const collection = (categories) => {
    const categoriesCollection = categories.map((category) => document(category))

    const parents = categoriesCollection.filter(category => !category.parent)

    return {
        grouped: groupedCategoriesWithChildren(parents, categoriesCollection),
        raw: categoriesCollection, 
    }
}

const document = (category) => {
    return ({
        ...category.toObject(),
        imageUrl: `${process.env.BASE_URL}/assets/${category.image}`
    })
}

const groupedCategoriesWithChildren = (parentCatgories, categories) => {
    for(let i = 0; i < parentCatgories.length; i++) {
        let children = categories.filter(category => category.parent == parentCatgories[i]._id.toString())

        if (children.length) parentCatgories[i].children = groupedCategoriesWithChildren(children, categories)
    }

    return parentCatgories
}

module.exports = { collection, document }