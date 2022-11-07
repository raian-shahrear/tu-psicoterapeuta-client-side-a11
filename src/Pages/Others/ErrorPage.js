import React from 'react';
import {useRouteError} from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h2>{error.statusText || error.message}</h2>
      <h4>{error.status}</h4>
    </div>
  );
};

export default ErrorPage;