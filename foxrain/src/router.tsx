import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Main, Admin, Mypage } from './componetns';
import Details from './componetns/Details';

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/mypage' element={<Mypage />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
