import React from 'react';
import ProjectBox from './ProjectBox';


const Projects = () => {
  
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectName="Generic Data Encryption Module" />
        <ProjectBox projectName="Android Task Manager" />
        <ProjectBox projectName="MIPS Simulator" />
        <ProjectBox projectName="Music Genre Classification" />
        <ProjectBox projectName="Minimum Cost Metro Navigation System" />
        <ProjectBox projectName="Nutritional Analysis System" />
      </div>
    </div>
  );
  
}

export default Projects