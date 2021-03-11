import React from 'react';
import LoginViewStyle from './LoginView.module.scss';
import { useAuth0 } from '@auth0/auth0-react';

const LoginView = () => {
  // click event handler: after click redirect to login page
  const { loginWithRedirect } = useAuth0();

  return (
    <div className={LoginViewStyle['wrapper']}>
      <div className={LoginViewStyle['title']}>Log in to edit BigDay</div>
      <button
        className={LoginViewStyle['btn-login']}
        onClick={() => loginWithRedirect()}
      >
        login
      </button>
    </div>
  );
};

export default LoginView;
