// App.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import Admin from './Admin';
import Home from './Home';

const App = () => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);

    const storedUser = JSON.parse(localStorage.getItem('currentUser'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = (username, password) => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = storedUsers.find(u => u.username === username && u.password === password);
    
    if (existingUser) {
      setUser(existingUser);
      localStorage.setItem('currentUser', JSON.stringify(existingUser));
      if (existingUser.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/home'); // Redirect to home page after successful login
      }
    } else if (storedUsers.length === 0) {
      const newUser = { username, password, role: 'admin' };
      storedUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(storedUsers));
      setUser(newUser);
      setUsers(storedUsers);
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      navigate('/admin');
    } else {
      const newUser = { username, password, role: 'user' };
      storedUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(storedUsers));
      setUser(newUser);
      setUsers(storedUsers);
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      navigate('/home'); // Redirect to home page after successful signup
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <>
      {/* Your header and hero section */}
      
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Navigate to={user ? (user.role === 'admin' ? "/admin" : "/home") : "/login"} />} />
          <Route path="/login/*" element={<Login login={login} />} />
          <Route path="/home" element={<Home user={user} />} />
          <Route path="/admin" element={
            user && user.role === 'admin' ? <Admin user={user} users={users} setUsers={setUsers} logout={logout} /> : <Navigate to="/login" />
          } />
        </Routes>
      </div>
    </>
  );
};

export default App;
