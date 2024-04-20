import axios from "axios"
import { useEffect, useState } from "react"

const groupedCategoriesWithChildren = (parentCatgories, categories) => {
    for(let i = 0; i < parentCatgories.length; i++) {
        let children = categories.filter(category => category.parent === parentCatgories[i]._id)

        if (children.length) parentCatgories[i].children = groupedCategoriesWithChildren(children, categories)
    }

    return parentCatgories
}

const useCategories = () => {
    const [categories, setCategories] = useState([]);
    const [groupedCategories, setGroupedCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function allCategories () {
            axios.get('http://localhost:3000/admin/categories')
                .then((response) => {
                    setCategories(response.data.categories)

                    let parents = response.data.categories.filter(category => !category.parent)

                    setGroupedCategories(
                        groupedCategoriesWithChildren(parents, response.data.categories)
                    )

                    setTimeout(() => {setLoading(false)}, 500)
                })
        }

        allCategories()
    }, [])

    return {
        categories,
        setCategories,
        groupedCategories,
        loading
    }
}

export default useCategories