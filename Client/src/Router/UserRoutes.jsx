import { Route } from 'react-router-dom';
import UserLogin from '../Components/User/pages/UserLogin/UserLogin';
import UserReg from '../Components/User/pages/UserRegistration/UserReg';
import PublicNavbar from '../Components/Public/components/PublicNavbar/PublicNavbar';
import PublicFooter from "../Components/Public/components/PublicFooter/PublicFooter.jsx"

function UserRoutes() {
  return (
    <>
      <Route
        path="/user-login"
        element={<> <PublicNavbar /> <UserLogin /> </>}
      />
      <Route
        path='/user-register'
        element={<><PublicNavbar /><UserReg /> </>}>
      </Route>
    </>
  );
}

export default UserRoutes;