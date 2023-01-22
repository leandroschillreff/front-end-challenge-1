import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';

export const RoutesMain = () => (
  <Routes>
    <Route path='*' element={<Navigate replace to='/' />} />
    <Route path='/' element={<HomePage />} />
  </Routes>
);
