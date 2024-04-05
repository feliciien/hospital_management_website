import React, { useState } from 'react';
import GoogleLoginButton from './GoogleLoginButton'; // Import the GoogleLoginButton component

function AdminLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle administrator login
  const handleLogin = () => {
    // Perform administrator login logic here
    setIsLoggedIn(true);
  };

  return (
    <div className="login-container">
      <h2>Administrator Login</h2>
      {isLoggedIn ? (
        <div>
          <p>Welcome, Administrator!</p>
          {/* Add administrator dashboard components and features */}
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <GoogleLoginButton onLogin={handleLogin} />
      )}
    </div>
  );
}

export default AdminLogin;
