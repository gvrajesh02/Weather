import React, { useState } from 'react';
import Weather from './components';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SignIn from './Auth/SignIn';

const App = () => {
  const [userData, setUserData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('userData') === 'true';
  });

  const handleAuthentication = (status) => {
    setIsAuthenticated(status);
    localStorage.setItem('userData', status);
  };

  const handleUserData = (data) => {
    setUserData(data);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Weather /> : <Navigate to="/signin" />}
          />
          <Route
            path="/signin"
            element={<SignIn onAuthenticate={handleAuthentication} userData={userData} onUserData={handleUserData} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
