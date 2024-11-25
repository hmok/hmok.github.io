import React from "react";
import Card from "./Card";

const Section = ({ id, title, projects }) => (
  <section id={id}>
    <h2 style={{ textAlign: "center", margin: "20px 0" }}>{title}</h2>
    <div style={containerStyle}>
      {projects.map((project, index) => (
        <Card key={index} {...project} />
      ))}
    </div>
  </section>
);

const containerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "20px",
  padding: "20px",
};

export default Section;
