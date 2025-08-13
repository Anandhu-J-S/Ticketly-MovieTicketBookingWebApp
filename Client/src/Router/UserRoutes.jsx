import { Route } from 'react-router-dom';
import UserLogin from '../Components/User/pages/UserLogin/UserLogin';
import UserReg from '../Components/User/pages/UserRegistration/UserReg';
import PublicNavbar from '../Components/Public/components/PublicNavbar/PublicNavbar';
import PublicFooter from "../Components/Public/components/PublicFooter/PublicFooter.jsx"
import UserHomePage from '../Components/User/pages/userHomePage/UserHomePage.jsx';
import UserNavbar from '../Components/User/components/userNavbar/UserNavbar.jsx';

function UserRoutes() {
  return (
    <>
      <Route
        path="/user-login"
        element={<> <PublicNavbar /> <UserLogin /><PublicFooter /></>}
      />
      <Route
        path='/user-register'
        element={<><PublicNavbar /><UserReg /><PublicFooter /> </>}>
      </Route>

      <Route path='user-home' element={<><UserNavbar/>
        <UserHomePage /></>}></Route>
    </>
  );
}

export default UserRoutes;