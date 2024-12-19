import React from "react";
import CardGrid from "./CardGrid";

const Projects = () => {
  const projects = [
    {
      title: "TIK-TAK",
      subtitle: "A simple Tic Tac Toe game",
      date: "2021",
      description: [
        "Interactive Gameplay: Players take turns marking cells on a 3x3 grid, with real-time updates on the game board.",
        "Win Detection: Logic to detect wins, losses, or ties, and displays the result dynamically.",
        "State Management: Utilizes React's useState and conditional rendering to manage the game state.",
        "Responsive Design: Optimized for desktop and mobile devices.",
        "Replay Option: Includes a 'Restart Game' button for new games.",
      ],
      demoLink: "https://tik-tak-toe-i.netlify.app/", 
      technicalSkills: ["ReactJS", "useState", "CSS", "Responsive Design"],
    },
    {
      title: "KATA-STORE",
      subtitle: "E-commerce platform",
      date: "2024",
      description: [
        "Dynamic product listing with search and filter functionalities.",
        "User authentication for secure access and personalized experience.",
        "Real-time shopping cart with automatic price calculations.",
        "State Management: Utilizes React's useState and conditional rendering to manage the game state.",
        "Integrated payment gateway for secure transactions.",
        "Mobile-optimized for a seamless shopping experience.",
      ],
      demoLink: "https://kata-store.netlify.app/", 
      technicalSkills: ["ReactJS", "Redux", "Firebase", "CSS", "Responsive Design"],
    },
    {
      title: "StayWith",
      subtitle: "Baby-sitting and Elder-sitting App",
      date: "2024",
      description: [
        "Caregiver Listings: Search for trusted caregivers for baby-sitting or elder-sitting services.",
        "Secure Booking: Users can book a sitter in real-time, ensuring availability and instant confirmation.",
        "Caregiver Profiles: Caregivers can create profiles with experience, qualifications, and ratings.",
        "Ratings & Reviews: Users can leave reviews and ratings for sitters to ensure trust and quality.",
      ],
      demoLink: "https://staywith-app.netlify.app/",
      technicalSkills: ["ReactJS", "Node.js", "MongoDB", "Express", "JWT Authentication", "CSS", "Responsive Design"],
    },
  ];

  return <CardGrid title="Personal Projects" items={projects} type="project"/>;
};

export default Projects;
