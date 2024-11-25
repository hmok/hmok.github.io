import React, { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Footer from "./components/Footer";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

const projects = {
  kids: [
    {
      image: "/images/dino.webp",
      title: "3D Dinosaur Game",
      description: "Fun and interactive game for kids to explore.",
      link: "https://hmok.github.io/AIKarateBiomechanics/dianasourGameHands",
    },
    {
      image: "/images/ball2goal.webp",
      title: "Ball to Goal",
      description: "Learn physics concepts through gaming.",
      link: "https://hmok.github.io/AIKarateBiomechanics/boxingBallForceMeasure",
    },
  ],
  sports: [
    {
      image: "/images/karate.webp",
      title: "Karate Feedback",
      description: "Improve your karate techniques with feedback.",
      link: "https://hmok.github.io/AIKarateBiomechanics/",
    },
    {
      image: "/images/squat.webp",
      title: "Squat Tracker",
      description: "Track your squat form and progress.",
      link: "https://hmok.github.io/AIKarateBiomechanics/rotateBall",
    },
  ],
  Telehealth: [
    {
      image: "/images/gait.webp",
      title: "Gait Analysis",
      description: "Analyze gait patterns for better mobility.",
      link: "https://hmok.github.io/PoseIQ/drawingHands",
    },
    {
      image: "/images/parkinston.webp",
      title: "Parkinson Handwriting Analysis",
      description: "AI-powered tools for handwriting analysis.",
      link: "",
    },
  ],
  tools: [
    {
      image: "/images/pose.webp",
      title: "Pose-Based Light Control",
      description: "Use pose detection to control lighting.",
      link: "",
    },
    {
      image: "/images/river.webp",
      title: "River Raid Eye/Hand",
      description: "Train your reaction time with River Raid.",
      link: "https://hmok.github.io/AIKarateBiomechanics/riverRaidEye",
    },
  ],
};



  const filterProjects = (category) =>
    projects[category].filter((project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div>
      <Header onSearch={(e) => setSearchQuery(e.target.value)} />
      <Navbar />
      <Section id="kids" title="Kid Games" projects={filterProjects("kids")} />
      <Section id="sports" title="Sport Games" projects={filterProjects("sports")} />
      <Section id="Telehealth" title="Telehealth" projects={filterProjects("Telehealth")} />
      <Section id="tools" title="Exploratory Tools" projects={filterProjects("tools")} />
      <Footer />
    </div>
  );
}

export default App;
