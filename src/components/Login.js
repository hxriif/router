import React from 'react';

import './indexx.css'; // You can create a CSS file for styling
import { useNavigate } from 'react-router';


function Login() {
  const navigation = useNavigate();
  return (
    <div className="container">
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>

         
          <button onClick={()=>{navigation('/Home')}} >Login</button>
        
        </form>
      </div>
    </div>
  );
}


export default Login