import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/Main';
import Quest from './pages/Quest';
import Header from './components/Header';
import {Container} from './globalStyled.js'

const App = () => {

  return (
    <Container>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Quest" element={<Quest />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
