// src/components/SignIn.js
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

function SignIn({ onSignIn }) {
  const handleLoginSuccess = (response) => {
    console.log("Login Successful: ", response);
    onSignIn(); // Simulate login success and set auth state
  };

  const handleLoginFailure = (error) => {
    console.log("Login Failed: ", error);
  };

  return (
    <div className="sign-in">
      <h2>sign In IN IN IN </h2>
      <form>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
          theme="filled_blue"
        />
      </form>
    </div>
  );
}

export default SignIn;
