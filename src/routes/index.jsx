import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';

const Routers = () => {
  return (
    <Routes>
      <Route path='login' element={<LoginPage />} />
    </Routes>
  );
};

export default Routers;
