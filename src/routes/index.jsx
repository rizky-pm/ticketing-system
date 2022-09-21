import { Routes, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import LoginPage from '../pages/LoginPage/LoginPage';
import HomePage from '../pages/HomePage/HomePage';

const Routers = () => {
  return (
    <Routes>
      <Route path='login' element={<LoginPage />} />

      <Route
        path='/'
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default Routers;
