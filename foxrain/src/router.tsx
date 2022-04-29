import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<></>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
