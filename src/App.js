import { useState } from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import ProtectedRoute from './components/ProtectedRoute';
import AddPage from './pages/AddPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import NotFound from './pages/NotFound';
import AuthContext from './store/authContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function logout() {
    setIsLoggedIn(false);
  }
  function login() {
    setIsLoggedIn(true);
  }

  const currentContextValue = {
    isLoggedIn,
    logout,
    login,
  };
  return (
    <AuthContext.Provider value={currentContextValue}>
      <div className='App'>
        <Header />
        <Switch>
          <ProtectedRoute path={'/'} exact>
            <HomePage />
          </ProtectedRoute>
          <Route path={'/register'}>
            <RegisterPage />
          </Route>
          <Route path={'/login'}>
            <LoginPage />
          </Route>
          <ProtectedRoute path={'/home'} exact>
            <HomePage />
          </ProtectedRoute>
          <ProtectedRoute path={'/add'}>
            <AddPage />
          </ProtectedRoute>
          <Route path={'*'}>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
