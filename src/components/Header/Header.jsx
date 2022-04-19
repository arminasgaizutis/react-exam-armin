import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../store/authContext';
import css from './Header.module.css';

function Header() {
  const authCtx = useContext(AuthContext);

  function logoutHandler(e) {
    localStorage.removeItem('token');
    authCtx.logout();
  }

  return (
    <header className={css.header}>
      <img
        className={css.img}
        src='https://upload.wikimedia.org/wikipedia/commons/c/c0/Skillshare_logo_2020.svg'
        alt='logo'
      />
      <nav className={css.navLinks}>
        {authCtx.isLoggedIn && <NavLink to='/home'>Home</NavLink>}
        {!authCtx.isLoggedIn && <NavLink to='/register'>Register</NavLink>}
        {!authCtx.isLoggedIn && <NavLink to='/login'>Login</NavLink>}
        {authCtx.isLoggedIn && <NavLink to='/add'>Add</NavLink>}
        {authCtx.isLoggedIn && (
          <NavLink onClick={logoutHandler} to='/Login'>
            Logout
          </NavLink>
        )}
      </nav>
    </header>
  );
}

export default Header;
