import React from 'react';
import LoginViewStyle from './LoginView.module.scss';

const LoginView = () => {
  return (
    <>
      <button className={LoginViewStyle['btn-login']}>login</button>
    </>
  );
};

export default LoginView;
