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
      <h1>Please log in to access the system.</h1>
      <GoogleLogin
        clientId="717130739079-24jd8oagudcp5uv3pgrpddafpgiujqoa.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default GoogleLoginButton;
