import React from "react";

const Header = ({ onSearch }) => (
  <header style={headerStyle}>
    <div style={logoContainerStyle}>
      <img
        src="/images/logo.png"
        alt="PoseIQ Logo"
        style={logoStyle}
      />
      <span style={siteNameStyle}>poseiq.com</span>
    </div>
    <h1 style={titleStyle}>
      PoseIQ:{" "}
      <span style={highlightStyle}>AI-Driven Pose Detection</span> and{" "}
      <span style={highlightStyle}>Video Analysis Showcase</span>
    </h1>
    <input
      type="text"
      placeholder="Search projects..."
      onChange={onSearch}
      style={searchBarStyle}
    />
  </header>
);

const headerStyle = {
  background: "linear-gradient(to right, #4A90E2, #6A11CB)", // Attractive gradient
  color: "#fff",
  padding: "15px 30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Add slight depth
};

const logoContainerStyle = {
  display: "flex",
  alignItems: "center",
};

const logoStyle = {
  height: "50px",
  marginRight: "10px",
  borderRadius: "8px", // Rounded edges for modern look
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Subtle shadow
};

const siteNameStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  color: "#FFD700", // Golden color for the site name
};

const titleStyle = {
  fontFamily: "'Poppins', sans-serif",
  fontSize: "24px",
  textAlign: "center",
  margin: "10px 0",
  flex: 1,
};

const highlightStyle = {
  color: "#FFD700", // Gold for highlights
  fontWeight: "600",
};

const searchBarStyle = {
  padding: "10px 15px",
  borderRadius: "25px",
  border: "none",
  outline: "none",
  width: "250px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Subtle shadow for input
  fontSize: "16px",
};

export default Header;
