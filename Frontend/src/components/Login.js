import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';  

const Login = () => {
  const [credentials, setCredentials] = useState({
    emailId: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:9091/api/customers/login', credentials);
      alert('Login successful');
      navigate('/view-loans');  
    } catch (error) {
      console.error('Login failed', error);
      alert('Invalid credentials or network issue');
    }
  };

  return (
    <div className="login-container">  
    <center><h2>Login</h2></center>
      <form onSubmit={handleSubmit} className="login-form">  
        <div className="mb-3">  
          <label htmlFor="emailId" className="form-label">Email</label>  
          <input
            type="email"
            id="emailId"
            name="emailId"
            placeholder="Enter your email"
            value={credentials.emailId}
            onChange={handleChange}
            className="form-control" 
            required
          />
        </div>

        <div className="mb-3">  
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={credentials.password}
            onChange={handleChange}
            className="form-control"  
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Login</button>  
      </form>
    </div>
  );
};

export default Login;
