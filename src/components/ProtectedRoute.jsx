import { useContext } from 'react';
import { Route } from 'react-router-dom';
import AuthContext from '../store/authContext';
import NotLoggedIn from './UI/NotLoggedIn/NotLoggedIn';

function ProtectedRoute({ children, ...rest }) {
  const authCtx = useContext(AuthContext);
  return (
    <Route {...rest}>{authCtx.isLoggedIn ? children : <NotLoggedIn />}</Route>
  );
}

export default ProtectedRoute;
