import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router-dom'; // Import Redirect from React Router
import './doctor.css';

const Doctor = () => {
  const [username, setUsername] = useState(''); // Initialize username with 'admin'
  const [password, setPassword] = useState(''); // Initialize password as empty string
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility
  const [loginSuccess, setLoginSuccess] = useState(false); // State to track login success

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate login check (Replace with actual authentication logic)
    if (username === 'admin' && password === 'admin') {
      setLoginSuccess(true);
      setShowPopup(true); // Show popup if login is successful
    } else {
      setLoginSuccess(false);
      setShowPopup(true); // Show popup for failed login attempt
    }
    // Reset the form fields if needed
    setUsername('');
    setPassword('');
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  // Redirect to /login if loginSuccess is true
  if (loginSuccess) {
    return <Redirect to="/doctor" />;
  }

  return (
    <div className="home-container">
      <Helmet>
        <title>SDG 3</title>
        <meta property="og:title" content="Medica template" />
      </Helmet>
      <section className="home-hero">
        <header data-thq="thq-navbar" className="home-navbar">
          <img
            alt="image"
            src="/Branding/logo-1500h.png"
            className="home-image06"
          />
        </header>

        <div className="form-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>

        {/* Popup message */}
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={closePopup}>&times;</span>
              {loginSuccess ? (
                <p>Login successful!</p>
              ) : (
                <p>Incorrect username or password. Please try again.</p>
              )}
            </div>
          </div>
        )}

      </section>
    </div>
  );
};

export default Doctor;
