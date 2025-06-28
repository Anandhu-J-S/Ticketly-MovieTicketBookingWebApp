import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AdminRoutes from './AdminRoutes'
import UserRoutes from './UserRoutes'
import TheaterRoutes from './TheaterRoutes'
import NotFound from '../Components/NotFound/NotFound'
import LandingPage from '../Components/Public/pages/LandingPage/LandingPage'
import PublicNavbar from '../Components/Public/components/PublicNavbar/PublicNavbar'
import PublicFooter from '../Components/Public/components/PublicFooter/PublicFooter'

function AppRoutes() {
    return (
    <>
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<><PublicNavbar/><LandingPage/><PublicFooter/></>} />
            <Route path="/footer" element={<PublicFooter />} />

            {/* Role-Based Routes */}
            {AdminRoutes()}
            {UserRoutes()}
            {TheaterRoutes()}
      

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    </>
    )
}

export default AppRoutes
