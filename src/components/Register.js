import React from 'react';
import './RegistrationForm.css'; // Import your CSS file for styling
import {useNavigate } from 'react-router-dom';

function Register() {
  const navigation = useNavigate()
  return (
    <div className="centered-form">
      <form>
        <h2>Registration Form</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
       
        <button type="submit" onClick={()=>{navigation('/Login')}}>Register</button>
        

              </form>
    </div>
  );
}

export default Register;
