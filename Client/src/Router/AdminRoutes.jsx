import React from 'react'
import { Route } from 'react-router-dom'
import AdminLogin from '../Components/Admin/pages/AdminLogin/AdminLogin'

function AdminRoutes() {
  return (
   
      <Route path='/admin' element={<><AdminLogin/></>}></Route>

  )
}

export default AdminRoutes
