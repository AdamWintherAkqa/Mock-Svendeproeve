import React, { useState } from "react";
import "./FrontPage.css";
import LoginForm from "./LoginForm"; // Make sure this path is correct
import "./Global.css";
import "./LoginForm";

const mockPeopleData = [
  {
    name: "Alice Johnson",
    studios: "Copenhagen",
    jobTitle: "Software Engineer",
    projects: ["Project Alpha"],
    expertise: ["Java", "React"],
    image: "/images/MockPhoto2.jpg",
  },
  {
    name: "Bob Smith",
    studios: "Copenhagen",
    jobTitle: "Network Engineer",
    projects: ["Project Delta"],
    expertise: ["Cybersecurity"],
    image: "/images/MockPhoto1.jpg",
  },
  {
    name: "Carol White",
    studios: "Aarhus",
    jobTitle: "QA Specialist",
    projects: ["Project Gamma"],
    expertise: ["Automated Testing", "Manual Testing"],
    image: "/images/MockPhoto3.jpg",
  },
  {
    name: "David Brown",
    studios: "Aarhus",
    jobTitle: "Data Scientist",
    projects: ["Project Beta"],
    expertise: ["Python", "Machine Learning"],
    image: "/images/MockPhoto4.jpg",
  },
];

function FrontPage() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const handleToggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleClearFilters = () => {
    // Logic to clear selected filters (to be implemented)
  };

  return (
    <div className="front-page">
      <div className="login-form-container">
        <div className="login-area">
          <div
            className="login-text"
            onClick={() => setShowLoginForm(!showLoginForm)}
          >
            Admin login
          </div>
          {showLoginForm && <LoginForm />}
        </div>
      </div>
      <div className="search-container">
        <span className="magnifying-glass">🔍</span>
        <input
          type="text"
          placeholder="Search for a colleague"
          className="search-input"
        />
      </div>
      <div className="filters-actions">
        <div className="filters-button" onClick={handleToggleFilters}>
          Filters
        </div>
        <div className="clear-filters-button" onClick={handleClearFilters}>
          Clear filters
        </div>
      </div>

      {showFilters && (
        <div className="filters-panels">
          <div className="filter-panel">
            <h3>Studios</h3>
            <div>Copenhagen</div>
            <div>Aarhus</div>
          </div>
          <div className="filter-panel">
            <h3>Job Titles</h3>
            <div>Software Engineer</div>
            <div>Network Engineer</div>
            <div>QA Specialist</div>
            <div>Data Scientist</div>
          </div>
          <div className="filter-panel">
            <h3>Projects</h3>
            <div>Project Alpha</div>
            <div>Project Beta</div>
            <div>Project Delta</div>
            <div>Project Gamma</div>
          </div>
          <div className="filter-panel">
            <h3>Expertise</h3>
            <div>Java</div>
            <div>React</div>
            <div>Cybersecurity</div>
            <div>Automated Testing</div>
            <div>Manual Testing</div>
            <div>Python</div>
            <div>Machine Learning</div>
          </div>
        </div>
      )}

      <div className="people-container">
        {mockPeopleData.map((person, index) => (
          <div key={index} className="person">
            <img src={person.image} alt={person.name} />
            <h3>{person.name}</h3>
            <p>Studios: {person.studios}</p>
            <p>Title: {person.jobTitle}</p>
            <p>Projects: {person.projects.join(", ")}</p>
            <p>Expertise: {person.expertise.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FrontPage;
