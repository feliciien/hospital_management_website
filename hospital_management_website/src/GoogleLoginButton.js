import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginButton = () => {
  const responseGoogle = (response) => {
    console.log(response);
    // Handle successful login response
  }

  const onFailure = (error) => {
    console.error(error);
    // Handle login failure
  }

  return (
    <div>
      <h1>Google OAuth Login Example</h1>
      <GoogleLogin
        clientId="YOUR_GOOGLE_CLIENT_ID"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default GoogleLoginButton;
