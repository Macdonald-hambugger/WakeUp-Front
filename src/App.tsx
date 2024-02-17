import AlarmAdd from 'pages/AlarmAdd';
import AlarmDetail from 'pages/AlarmDetail';
import Login from 'pages/Login';
import Main from 'pages/Main';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={null} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/alarm">
          <Route path="add" element={<AlarmAdd />} />
          <Route path="detail" element={<AlarmDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
