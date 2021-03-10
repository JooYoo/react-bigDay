import React from 'react';
import LoginViewStyle from './LoginView.module.scss';
import { useAuth0 } from '@auth0/auth0-react';

const LoginView = () => {
  // click event handler: after click redirect to login page
  const { loginWithRedirect, logout } = useAuth0();

  return (
    <>
      <button
        className={LoginViewStyle['btn-login']}
        onClick={() => loginWithRedirect()}
      >
        login
      </button>

      <button className={LoginViewStyle['btn-logout']} onClick={() => logout()}>
        logout
      </button>
    </>
  );
};

export default LoginView;
