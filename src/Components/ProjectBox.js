import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectName }) => {
  // Project descriptions and links
  const projects = {
    "Generic Data Encryption Module": {
      description: "Built a secure and scalable encryption module using Java, Spring Boot, Redis, and AES/RSA algorithms, with custom annotations via aspect-oriented programming. Designed following microservices architecture and design patterns, ensuring reusability. Enhanced API testing with Postman and secure data handling with REST APIs.",
      github: "",
      demo: "",
    },
    "Android Task Manager": {
      description: "Built an Android Task Manager in Kotlin, combining system and Android development concepts. Used Jetpack Compose for a responsive UI and coroutines for efficient CPU and memory stats processing. Added features for process monitoring, search, and termination, demonstrating OS fundamentals.",
      github: "https://github.com/rudri1202/AndroidProcessMonitor",
      demo: "",
    },
    "MIPS Simulator": {
      description: "Developed a Python-based MIPS simulator for system development, handling R-type, I-type, and J-type instructions without pipelining. Simulated memory, registers, and program flow to execute instructions sequentially, enhancing understanding of computer architecture and assembly translation.",
      github: "https://github.com/rudri1202/MIPS-processor-using-Python",
      demo: "",
    },
    "Music Genre Classification": {
      description: "Developed a machine learning model using Python, Librosa, and scikit-learn for genre classification with PCA, LDA, and classifiers like XGBoost. Enhanced expertise in audio processing, ML pipelines, and feature extraction.",
      github: "https://github.com/rudri1202/MusicGenreClassification",
      demo: "",
    },
    "Minimum Cost Metro Navigation System": {
      description: "                Designed a metro navigation system in C++ using DSA and OOPS, modeling routes as AVL trees for efficient fare and path calculations. Implemented dynamic map updates, showcasing expertise in tree-based algorithms and core C++ concepts.                ",
      github: "https://github.com/rudri1202/Minimum-Cost-Metro-Navigation-System",
      demo: "",
    },
    "Nutritional Analysis System": {
      description: "Developed a nutritional analysis system using JavaScript, NodeJS, and MySQL. Integrated an NLP API for food data analysis and presented results in a user-friendly interface. Followed software principles, created an SRS document, and ensured efficient data handling.",
      github: "",
      demo: "",
    },
  };

  // Fetch the relevant project details
  const project = projects[projectName];

  // Handle missing projects gracefully
  if (!project) {
    return <div>Error: Project not found.</div>;
  }

  return (
    <div className='projectBox'>
      <div>
        <h3>{projectName}</h3>
        <p>{project.description}</p>
        <div>
          {project.github && (
            <a href={project.github} target='_blank' rel="noopener noreferrer">
              <button className='projectbtn'><FaGithub /> Github</button>
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target='_blank' rel="noopener noreferrer">
              <button className='projectbtn'><CgFileDocument /> Demo</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectBox;

