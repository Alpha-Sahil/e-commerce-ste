import axios from "axios"

const useProducts = async (categoryId) => {
    if (!categoryId) return []

    let response = []

    try {
        response = await axios.get(`http://localhost:3000/admin//products`, {
            category: categoryId
        })

        response = response.data.products
    } catch (error) {
        console.log(error)
    }

    return response
}

export default useProducts