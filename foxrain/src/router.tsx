import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Main } from './componetns';

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
