// Login.jsx
import React from 'react';

const Login = ({ login }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-16">
      <h2 className="text-2xl font-bold text-center mb-6">Login / Sign Up</h2>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Login / Sign Up
        </button>
      </form>
    </div>
  );
};

export default Login;
