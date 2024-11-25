

import React from "react";

const Navbar = () => (
  <nav style={navStyle}>
    <a href="#kids" style={linkStyle}>Kid Games</a>
    <a href="#sports" style={linkStyle}>Sport Games</a>
    <a href="#Telehealth" style={linkStyle}>Telehealth</a>
    <a href="#tools" style={linkStyle}>Exploratory Tools</a>
  </nav>
);

const navStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(to right, #6a11cb, #2575fc)", // Gradient background for a modern look
  padding: "15px 0",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
};

const linkStyle = {
  color: "#fff", // White text for contrast
  textDecoration: "none", // No underline for cleaner look
  margin: "0 15px",
  fontSize: "16px", // Readable font size
  fontWeight: "bold",
  padding: "8px 12px",
  borderRadius: "5px",
  transition: "background-color 0.3s, color 0.3s", // Smooth hover effect
};

linkStyle[":hover"] = {
  backgroundColor: "#fff",
  color: "#6a11cb", // Matches the gradient for consistency
};

export default Navbar;
