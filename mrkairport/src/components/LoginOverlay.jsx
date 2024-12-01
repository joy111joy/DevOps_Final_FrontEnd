import React, { useState } from 'react';

function LoginOverlay({ isVisible, onClose, onSuccess }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (password === '123') {
      onSuccess(); 
      onClose();  
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  if (!isVisible) return null; 

  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="logInBox"
        onClick={(e) => e.stopPropagation()} 
      >
        <h2>Login</h2>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={onClose} className="cancel">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default LoginOverlay;
