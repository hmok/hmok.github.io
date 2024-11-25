import React from "react";

const Card = ({ image, title, description, link }) => (
  <div style={cardStyle}>
    <img src={image} alt={title} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
    <h3>{title}</h3>
    <p>{description}</p>
    {link && (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        Play Now
      </a>
    )}
  </div>
);

const cardStyle = {
  background: "white",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  padding: "10px",
  textAlign: "center",
};

const linkStyle = {
  display: "inline-block",
  marginTop: "10px",
  padding: "8px 12px",
  backgroundColor: "#4CAF50",
  color: "white",
  textDecoration: "none",
  borderRadius: "5px",
  fontSize: "14px",
};

export default Card;
