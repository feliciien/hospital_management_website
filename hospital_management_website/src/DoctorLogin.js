import React, { useState } from 'react';
import GoogleLoginButton from './GoogleLoginButton'; // Import the GoogleLoginButton component

function DoctorLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle doctor login
  const handleLogin = () => {
    // Perform doctor login logic here
    setIsLoggedIn(true);
  };

  return (
    <div className="login-container">
      <h2>Doctor Login</h2>
      {isLoggedIn ? (
        <div>
          <p>Welcome, Doctor!</p>
          {/* Add doctor dashboard components and features */}
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <GoogleLoginButton onLogin={handleLogin} />
      )}
    </div>
  );
}

export default DoctorLogin;
