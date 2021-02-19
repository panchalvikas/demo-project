import React, { Component } from 'react';
import ReactDOM from 'react-dom';
function Eventscard(props) {
   
   return (
   <>
   <div className="event-part colums">
      <div className="event-inner">
         <img src={props.imgsrc} alt="img1" />
         <div className="event-title">
               <h2>
                  <a href="#">{props.title}</a>
               </h2>
         </div>
      </div>
   </div>
   </>
   )
}



export default Eventscard;