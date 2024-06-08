import axios from "axios"

const useProducts = async (categoryId) => {
    let response = []

    try {
        response = await axios.get(`http://localhost:3000/admin/products`, {
            params: {
                category: categoryId
            }
        })

        response = response.data.products
    } catch (error) {
        console.log(error)
    }

    return response
}

export default useProducts