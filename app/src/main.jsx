import AdminPanel from './pages/Admin/Index.jsx'
import AdminLayout from "./layouts/AdminLayout"
import AppLayout from "./layouts/AppLayout"
import Home from './pages/Home.jsx'
import ProductShow from './pages/Product/Show.jsx'
import ReactDOM from 'react-dom/client'
import React from 'react'
import Store from './Redux/Index.jsx' 
import Wishlist from './pages/Wishlist/Index'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import './index.css'
import './css/admin.css'
import './css/wishlist.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ Store() }>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={ <AppLayout /> }>
              <Route index element={<Home />} />
              <Route path='/wishlist' element={ <Wishlist /> } />
              <Route path='/products/:product' element={ <ProductShow /> } />
            </Route>
            <Route path="/admin" element={ <AdminLayout /> }>
              <Route index element={ <AdminPanel /> } />
            </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
