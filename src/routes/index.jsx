import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import axios from 'axios';

import PrivateRoute from './PrivateRoute';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import '../styles.css';
import '../styles.less';
import { getAllTickets } from '../api';

axios.defaults.baseURL = 'http://localhost:3333/';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path='/'
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
        loader={async () => {
          return await getAllTickets();
        }}
      />

      <Route path='/login' element={<LoginPage />} />
    </>
  )
);

export default router;
