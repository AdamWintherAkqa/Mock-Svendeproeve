import React, { useState } from "react";
import "./FrontPage.css";
import LoginForm from "./LoginForm"; // Make sure this path is correct

function FrontPage() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  return (
    <div className="front-page">
      <div className="login-text" onClick={() => setShowLoginForm(true)}>
        Log in
      </div>
      <div className="search-container">
        <span className="magnifying-glass">🔍</span>
        <input
          type="text"
          placeholder="Search for a colleague"
          className="search-input"
        />
      </div>
      {showLoginForm && <LoginForm />}
    </div>
  );
}

export default FrontPage;
