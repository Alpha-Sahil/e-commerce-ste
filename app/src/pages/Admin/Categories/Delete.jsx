import axios from "axios"

const Detete = (props) => {
    axios.delete(`http://localhost:3000/admin/categories/${props}/delete`)
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
}

export default Detete