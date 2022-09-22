import React from 'react';
import jwt_decode from 'jwt-decode';
import { Navigate } from 'react-router-dom';

import Navbar from '../features/Navbar/Navbar';

const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  // const tokenExp = jwt_decode(user.data.token).exp * 1000;

  if (!user) {
    return <Navigate to='login' replace />;
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default PrivateRoute;
