import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import axios from 'axios';

import PrivateRoute from './PrivateRoute';
import LoginPage from '../pages/LoginPage/LoginPage';
import HomePage from '../pages/HomePage/HomePage';
import EmployeePage from '../pages/EmployeePage/EmployeePage';

import '../styles.css';
import '../styles.less';
import { getAllTickets } from '../api';

axios.defaults.baseURL = 'http://localhost:3333/';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/login' element={<LoginPage />} />

      <Route
        path='/home'
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
        loader={async () => {
          return await getAllTickets();
        }}
      />

      <Route
        path='/employee'
        element={
          <PrivateRoute>
            <EmployeePage />
          </PrivateRoute>
        }
      />
    </>
  )
);

export default router;
