import React from 'react'
import './project.css'
import portfolio from "../../assets/portfolio.png";
import weather from "../../assets/weatherapp1.png";
import todotoday from "../../assets/todo-today.png";
import guessnum from "../../assets/guessnum.png";
import qoutes from "../../assets/qoutes.png";
import recipeblog from "../../assets/recipeblog.png";
const Project = () => {
  return (
    <section id="projects">
       <h5 >Featured Projects</h5>
       <h2>This is my projects</h2>
    <div className='container container-project'>
      <div className='project-grid' >
          <div className="project">
              <div className="project-image"><img src={portfolio}  alt="project" /></div>
              <div className="project-detail">
                 <p className="project-title">
                   <span className="code">&lt;</span>
                   Portfolio
                   <span className="code">&#47;&gt;</span>  
                 </p>                   
                  <div className="project-language">
                    <span className="code">#React</span>
                    <span className="code">#EmailJS</span>
                    <span className="code">#CSS</span>
                  </div> 
                  <div className="repo">
                   <a href="https://eldin-betalmos.netlify.app/"className="code">Live view</a>
                   <a href="https://github.com/dinvoid/eldin-betalmos-portfolio"className="code">Repo</a>
                  </div> 
              </div>           
          </div> 
           <div className="project">
              <div className="project-image"><img src={recipeblog}  alt="project" /></div>
              <div className="project-detail">
                <p className="project-title">
                  <span className="code">&lt;</span>
                  Recipe-Blog
                  <span className="code">&#47;&gt;</span>  
                </p>                   
                 <div className="project-language">
                   <span className="code">#MongoDB</span>
                   <span className="code">#Express</span>
                   <span className="code">#EJS</span>
                 </div> 
                 <div className="repo">
                  <a href="https://recipe-blog-535r.onrender.com/"className="code">Live view</a>
                  <a href="https://github.com/dinvoid/recipe-blog"className="code">Repo</a>
                 </div> 
               </div>           
          </div> 
          <div className="project">
               <div className="project-image"><img src={todotoday}  alt="project" /></div>
               <div className="project-detail">
                 <p className="project-title">
                  <span className="code">&lt;</span>
                  Todo-Today
                  <span className="code">&#47;&gt;</span>  
                </p>                   
                 <div className="project-language">
                   <span className="code">#MongoDB</span>
                   <span className="code">#Express</span>
                   <span className="code">#React</span>
                    <span className="code">#Node</span>
                 </div> 
                 <div className="repo">
                  <a href="https://todo-todayapp.netlify.app/"className="code">Live view</a>
                  <a href="https://github.com/dinvoid/todo-today-frontend"className="code">Repo</a>
                 </div>
               </div>         
          </div>
          <div className="project">
              <div className="project-image"><img src={qoutes}  alt="project" /></div>
              <div className="project-detail">
                 <p className="project-title">
                   <span className="code">&lt;</span>
                   Random Qoutes Generator
                   <span className="code">&#47;&gt;</span>  
                 </p>                   
                  <div className="project-language">
                     <span className="code">#HTML</span>
                     <span className="code">#CSS</span>
                     <span className="code">#JQuery</span>
                  </div> 
                  <div className="repo">
                   <a href="https://dinvoid.github.io/random-qoute-generator/" className="code">Live view</a>
                   <a href="https://github.com/dinvoid/random-qoute-generator" className="code">Repo</a>
                  </div> 
              </div>           
          </div> 
           <div className="project">
              <div className="project-image"><img src={weather}  alt="project" /></div>
              <div className="project-detail">
                <p className="project-title">
                  <span className="code">&lt;</span>
                  Recipe-Blog
                  <span className="code">&#47;&gt;</span>  
                </p>                   
                 <div className="project-language">
                   <span className="code">#HTML</span>
                   <span className="code">#CSS</span>
                    <span className="code">#Openweather Api</span>
                   <span className="code">#Js</span>
                 </div> 
                 <div className="repo">
                  <a href="https://dinvoid.github.io/Weather-APP/"className="code">Live view</a>
                  <a href="https://github.com/dinvoid/Weather-APP"className="code">Repo</a>
                 </div> 
               </div>           
          </div> 
          <div className="project">
               <div className="project-image"><img src={guessnum}  alt="project" /></div>
               <div className="project-detail">
                 <p className="project-title">
                  <span className="code">&lt;</span>
                  Guess the Number
                  <span className="code">&#47;&gt;</span>  
                </p>                   
                 <div className="project-language">
                   <span className="code">#HTML</span>
                   <span className="code">#CSS</span>
                   <span className="code">#JS</span>
                 </div> 
                 <div className="repo">
                  <a href="https://dinvoid.github.io/guessthenumber/"className="code">Live view</a>
                  <a href="https://github.com/dinvoid/guessthenumber"className="code">Repo</a>
                 </div>
               </div>         
          </div> 
          
      </div>
    </div>
  </section>
  )
}

export default Project