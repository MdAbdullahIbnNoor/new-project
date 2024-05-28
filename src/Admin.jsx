// Admin.jsx
import React, { useState, useEffect } from 'react';

const Admin = ({ user, users, setUsers, logout }) => {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const addUser = (e) => {
    e.preventDefault();
    const newUser = { username: newUsername, password: newPassword, role: 'user' };
    setUsers([...users, newUser]);
    setNewUsername('');
    setNewPassword('');
  };

  const deleteUser = (username) => {
    setUsers(users.filter(u => u.username !== username));
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-16">
      <h1 className="text-2xl font-bold text-center mb-6">Welcome, {user.username}</h1>
      <button onClick={logout} className="w-full bg-red-500 text-white py-2 rounded mb-6">
        Logout
      </button>
      <h2 className="text-xl font-semibold mb-4">Manage Users</h2>
      <form onSubmit={addUser} className="bg-white p-6 rounded shadow-md mb-6">
        <div className="mb-4">
          <label className="block text-gray-700">Username:</label>
          <input
            type="text"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">
          Add User
        </button>
      </form>
      <h2 className="text-xl font-semibold mb-4">Current Users</h2>
      <ul className="bg-white p-6 rounded shadow-md">
        {users.map((u, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span>{u.username} ({u.role})</span>
            {u.role !== 'admin' && (
              <button onClick={() => deleteUser(u.username)} className="bg-red-500 text-white px-3 py-1 rounded">
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
