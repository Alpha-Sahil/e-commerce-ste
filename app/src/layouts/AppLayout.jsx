import Header from "../components/Header"
import Footer from "../components/Footer"
import Toast from '../components/Toast'
import { Outlet } from "react-router-dom";

const AppLayout = (props) => {
    return (
        <>  
            <Toast />
            <Header />
                <Outlet />
            <Footer />
        </>
    )
}

export default AppLayout