import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function AdminPage() {
  const navigate = useNavigate(); // Initialize navigate function

  const handleGoBack = () => {
    navigate("/"); // Navigate to the front page
  };

  return (
    <div>
      <h1>ADMIN LOGIN</h1>
      <button onClick={handleGoBack}>Go Back to Frontpage</button>{" "}
      {/* Add a button to go back */}
    </div>
  );
}

export default AdminPage;
