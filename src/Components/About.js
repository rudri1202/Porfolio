import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p> Hi, my name is <b>Rudri Jani</b>, and I am from Surat, Gujarat. 
          I’m currently a <b>pre-final year B.Tech student in Computer Science and Engineering</b> at the Indian Institute of Technology, Jodhpur. 
          </p> <p> With hands-on experience in <b>industry-level projects</b>, I specialize in leveraging <b>cutting-edge technologies</b> to develop secure, scalable, and impactful solutions. 
          My expertise spans areas like encryption systems, AI applications, and full-stack development. </p> 
          <p> Explore my portfolio to see how I push boundaries through innovation and problem-solving. </p> 
          <p> I am <b>open</b> to new collaborations and opportunities to contribute and grow. Let’s connect—links are in the footer! </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap'/>
        
      </div>
    </>
  )
}

export default About