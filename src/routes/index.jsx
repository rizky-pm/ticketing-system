import { createBrowserRouter } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import '../styles.css';
import '../styles.less';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PrivateRoute>
        <HomePage />
      </PrivateRoute>
    ),
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

export default router;
