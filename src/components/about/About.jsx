import React from 'react'
import './about.css'
//import ME from "../../assets/eldin.jpg";
import {AiFillHtml5,AiFillGithub,AiOutlineFileWord} from "react-icons/ai";
import {IoLogoCss3} from "react-icons/io";
import {DiJavascript1} from  "react-icons/di";
import {BsFillBootstrapFill} from  "react-icons/bs";
import {SiJquery,SiPostman,SiMicrosoftexcel,SiMysql} from  "react-icons/si";
import {DiNodejsSmall,DiPhp,DiJava,DiMongodb} from  "react-icons/di";

import {FaAward,FaReact} from  "react-icons/fa";
const About = () => {
  return (
    <section id="about">
      <h5 id="gettoknow">Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_skill" >
            <p>Here are the technologies I’ve been working with.</p>
            <div className='stack'>
              <span><AiFillHtml5 color='red'/>HTML</span>
              <span><IoLogoCss3 color='blue'/>CSS</span>
              <span><DiJavascript1 color='yellow'/>JavaScript</span>

              <span><AiFillGithub color='red'/>Github</span>
              <span><BsFillBootstrapFill color='blue'/>Bootstrap</span>
              <span><SiJquery color='yellow'/>jQuery</span>

              <span><FaReact color='red'/>ReactJS</span>
              <span><DiNodejsSmall color='blue'/>Node.js</span>
              <span><AiOutlineFileWord color='yellow'/>Express.js</span>

              <span><DiPhp color='red'/>PHP</span>
              <span><DiJava color='blue'/>Java</span>
              <span><SiMysql color='yellow'/>MySQL</span>    

               <span><DiMongodb color='red'/>MongoDB</span>
              <span><SiPostman color='blue'/>Postman</span>
               
            </div>
        </div>

        <div className="about_content">
            <div className="about_cards">
              <article className="about_card">
                <FaAward className="icon"/>
                <h5>Experience</h5>
                <small>6+ Months</small>
              </article>
              <article className="about_card">
                <FaAward className="icon"/>
                <h5>Achievement</h5>
                <small>3+ </small>
              </article>
              <article className="about_card">
                <FaAward className="icon"/>
                <h5>Works</h5>
                <small>0+ Months</small>
              </article>  
            </div>
           <p>Hi, I am Eldin C. Betalmos. I'm 22 years old. I am from Bohol. I just graduated in college last August.
             I graduated from Bohol Island State University with a degree of Bachelor of Science in Computer Science. 
           </p>
           <p>I am a full-stack software developer, currently focused on building beautiful web interfaces and web applications . 
           </p>
           <a href="#contact" className='btn btn-primary'>Lets Talk</a>
        </div> 
      </div>
    </section>
  )
}

export default About