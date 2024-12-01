import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../components/Banner';

function Auth() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === '123') {
      navigate('/admin'); 
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  return (
    <div className='auth'>
        <Banner mainMessage="MRK Airport Managment" subMessage="Administration" sideBar={false} />
    <div className='logInBox'style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Login (Hint: Try 123)</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '10px', fontSize: '16px' }}
        />
        <br />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            marginTop: '10px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
    </div>
    </div>
  );
}

export default Auth;
