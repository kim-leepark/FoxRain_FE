import React from 'react';
import GlobalStyle from './GlobalStyle';
import { Global } from '@emotion/react';
import Router from './router';

function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <Router />
    </>
  );
}

export default App;
