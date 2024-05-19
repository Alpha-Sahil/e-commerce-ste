import Admin from './pages/Admin/Categories/Index.jsx'
import AdminPanel from './pages/Admin/Index.jsx'
import AdminLayout from "./layouts/AdminLayout"
import AppLayout from "./layouts/AppLayout"
import Home from './pages/Home.jsx'
import ReactDOM from 'react-dom/client'
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import './css/admin.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminPanel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
