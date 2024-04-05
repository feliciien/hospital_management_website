import React, { useState } from 'react';
import './App.css';
import GoogleLoginButton from './GoogleLoginButton'; // Import the GoogleLoginButton component

function App() {
  // State to track user authentication status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle user login
  const handleLogin = () => {
    // Perform login logic here
    setIsLoggedIn(true);
  };

  // Function to handle user logout
  const handleLogout = () => {
    // Perform logout logic here
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Hospital Management Website</h1>
        {/* Conditional rendering based on user authentication status */}
        {isLoggedIn ? (
          // If user is logged in, display logout button
          <button onClick={handleLogout}>Logout</button>
        ) : (
          // If user is not logged in, display Google login button
          <GoogleLoginButton onLogin={handleLogin} />
        )}
      </header>
      {/* Main content area */}
      <div className="content">
        {/* Conditional rendering based on user authentication status */}
        {isLoggedIn ? (
          // If user is logged in, display dashboard
          <div>
            <h2>Dashboard</h2>
            {/* Add components and features for the dashboard */}
          </div>
        ) : (
          // If user is not logged in, display login prompt
          <div>
            <p>Please log in to access the system.</p>
            {/* Add other login options or instructions */}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
