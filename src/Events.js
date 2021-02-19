import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Eventscard from "./Eventscard";

const Events = () => {
   return (
      <div className="events">
         <div className="container">
         
            <div className="row flex align-item-start">
            <Eventscard imgsrc={`${process.env.PUBLIC_URL}images/img1.jpg`} title="CLIMB"/>      
            <Eventscard imgsrc={`${process.env.PUBLIC_URL}images/img2.jpg`} title="Camp & Hike"/>
            <Eventscard imgsrc={`${process.env.PUBLIC_URL}images/img3.jpg`} title="Sale"/>
            </div>
            
         </div>
      </div>     
          
   );
}
export default Events;