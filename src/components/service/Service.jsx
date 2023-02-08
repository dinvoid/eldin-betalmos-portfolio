import React from 'react'
import './service.css'
import Webdev  from '../../assets/webdev.svg'
import Art  from '../../assets/art.svg'
import Webdes from '../../assets/webdes.svg'

const Service = () => {
  return (
    <section id="services">
       <h5 id="">My Services</h5>
       <h2>What I Do</h2>
       <div className="container">
         <div className="service-container">
            <div className="service">
                <div className="service-image"> <img src={Webdev} alt="develop" /></div>
                <div className="service-detail">
                <h3>Web Design</h3>
                <p>Gives you a unique website design that is ideal for company website.</p>  
                </div>
            </div>
            <div className="service">
               <div className="service-image"> <img src={Art} alt="develop" /></div>
               <div className="service-detail">
               <h3>Drawing/Sketching</h3>
               <p>Offer hand drawing using pencil, graphite and charcoal.</p>

               </div>
            </div>
            <div className="service">
               <div className="service-image"> <img src={Webdes} alt="develop" /></div>
               <div className="service-detail">
               <h3>Backend Development</h3>
               <p>"Develop efficient and secure backends for your web."</p>      
               </div>  
            </div>
         
         </div> 
       </div>   
    </section>
  )
}

export default Service