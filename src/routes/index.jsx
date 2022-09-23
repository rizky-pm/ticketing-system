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
import DetailTicket from '../features/DetailTicket/DetailTicket';
import AllTicket from '../features/AllTicket/AllTicket';

axios.defaults.baseURL = 'http://localhost:3333/';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/login' element={<LoginPage />} />

      <Route
        path='/tickets'
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
        loader={async () => {
          return await getAllTickets();
        }}
        children={[
          <Route index key={<AllTicket />} path='' element={<AllTicket />} />,
          <Route
            key={<DetailTicket />}
            path=':ticketCode'
            element={<DetailTicket />}
          />,
        ]}
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
