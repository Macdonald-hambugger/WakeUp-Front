import Home from 'pages/Home';
import AlarmAdd from 'pages/AlarmAdd';
import AlarmDetail from 'pages/AlarmDetail';
import Login from 'pages/Login';
import Main from 'pages/Main';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OAuth from 'pages/OAuth';
import FriendList from 'pages/FriendList';
import AlarmRing from 'pages/AlarmRing';
import Onboarding from 'pages/Onboarding';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<FriendList />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/oauth" element={<OAuth />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/alarm">
          <Route path="ring" element={<AlarmRing />} />
          <Route path="add" element={<AlarmAdd />} />
          <Route path="detail" element={<AlarmDetail />} />
          <Route path="friend-list" element={<FriendList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
