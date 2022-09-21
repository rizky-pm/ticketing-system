import React from 'react';
import { Navigate } from 'react-router-dom';

import Navbar from '../features/Navbar/Navbar';

const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));

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
