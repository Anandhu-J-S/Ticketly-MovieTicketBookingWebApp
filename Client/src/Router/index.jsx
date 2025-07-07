import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AdminRoutes from './AdminRoutes'
import UserRoutes from './UserRoutes'
import TheaterRoutes from './TheaterRoutes'
import NotFound from '../Components/NotFound/NotFound'
import LandingPage from '../Components/Public/pages/LandingPage/LandingPage'
import PublicNavbar from '../Components/Public/components/PublicNavbar/PublicNavbar'
import PublicFooter from '../Components/Public/components/PublicFooter/PublicFooter'
import ContactUS from '../Components/Public/pages/ContactUS/ContactUS'
import AboutUS from '../Components/Public/pages/AboutUS/AboutUS'
import TermsOfConditions from '../Components/Public/pages/TermsOfConditions/TermsOfConditions'
import PrivacyData from '../Components/Public/pages/PrivacyPolicy/PrivacyData'
import FQ from '../Components/Public/pages/f&q/FQ'


function AppRoutes() {
    return (
        <>
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<><PublicNavbar /><LandingPage /><PublicFooter /></>} />
                <Route path="/footer" element={<PublicFooter />} />
                <Route path="/contact" element={<><PublicNavbar /><ContactUS /><PublicFooter /></>}></Route>
                <Route path='/about' element={<><PublicNavbar /><AboutUS /><PublicFooter /></>}></Route>
                <Route path='/terms-of-conditions' element={<><PublicNavbar /><TermsOfConditions /><PublicFooter /></>}></Route>
                <Route path='/privacy-policy' element={<><PublicNavbar /><PrivacyData /><PublicFooter /></>}></Route>
                <Route path='/fq' element={
                    <><PublicNavbar /><FQ /><PublicFooter /></>
                }></Route>


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
