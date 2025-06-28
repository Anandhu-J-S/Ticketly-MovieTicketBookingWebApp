import { Route } from 'react-router-dom';
import UserLogin from '../Components/User/pages/UserLogin/UserLogin';
import UserReg from '../Components/User/pages/UserRegistration/UserReg';

function UserRoutes() {
  return (
<>
    
    <Route
      path="/user-login"
      element={<UserLogin />}
    />
    <Route path='/user-register' element={<UserReg/>}></Route>
</>
  );
}

export default UserRoutes;