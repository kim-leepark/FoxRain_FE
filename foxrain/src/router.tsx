import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Admin } from './componetns';

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<Admin />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
