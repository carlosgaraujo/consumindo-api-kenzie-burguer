import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { ProtectRoutes } from './pages/ProtectRoutes';
import RegisterPage from './pages/RegisterPage';

const Router = () => (
  <Routes>
    <Route path='/' element={<LoginPage />} />
    <Route path='/register' element={<RegisterPage />} />
    <Route path='/shopPage' element={<ProtectRoutes />} />
  </Routes>
);


export default Router;