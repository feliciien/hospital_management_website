import React from 'react';
import './App.css';
import GoogleLoginButton from './GoogleLoginButton'; // Import the GoogleLoginButton component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to HMW</h1>
      </header>
      <GoogleLoginButton /> {/* Render the GoogleLoginButton component */}
    </div>
  );
}

export default App;
