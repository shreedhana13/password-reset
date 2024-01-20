import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');

  const handleResetPassword = async () => {
    try {
      const response = await axios.post('/api/reset-password', { token, password });
      console.log(response.data); // Handle response from server
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <label>New Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleResetPassword}>Reset Password</button>
    </div>
  );
};

export default ResetPassword;
