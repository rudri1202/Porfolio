import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>RUDRI JANI</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            Turning raw ideas into impactful websites or products is my passion.  
            I strive for work that challenges me as an engineer and leaves me feeling proud of what I've created.<br /><br />
            I am fluent in <b>C++</b> and <b>Python</b>, with a keen interest in <b>software development</b> and <b>machine learning</b>. 
            I am currently exploring projects in the <b>MERN</b> stack and plan to expand my skills by learning <b>Next.js</b>, <b>Three.js</b>, and <b>TypeScript</b> in the near future.<br /><br />
            My ultimate goal is to drive meaningful advancements in technology through the power of <b>AI</b>.  
            Oh, and I love <b>coffee, math N codes</b>. <CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}}/>
          </p>


        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home