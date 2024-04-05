import React, { useState } from 'react';
import GoogleLoginButton from './GoogleLoginButton'; // Import the GoogleLoginButton component

function PatientLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle patient login
  const handleLogin = () => {
    // Perform patient login logic here
    setIsLoggedIn(true);
  };

  return (
    <div className="login-container">
      <h2>Patient Login</h2>
      {isLoggedIn ? (
        <div>
          <p>Welcome, Patient!</p>
          {/* Add patient dashboard components and features */}
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <GoogleLoginButton onLogin={handleLogin} />
      )}
    </div>
  );
}

export default PatientLogin;
