import React from 'react';
import ErrorStyle from './ErrorMessage.module.scss';

const RequiredError = (props) => {
  return <div className={ErrorStyle['error-required']}>{props.children}</div>;
};

export default RequiredError;
