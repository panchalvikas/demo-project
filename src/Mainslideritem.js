import React, { Component } from 'react';
import ReactDOM from 'react-dom';
function Mainslideritem(props) {
   
   return (
   <>
   <div className="carosuel_img">
      <img src={props.sliderimg} alt="slider1" />
   </div>
   <div className="carosuel_content">
      <h1 className="carosuel-title">{props.slidertitle}</h1>
      <p className="carosuel-description">{props.sliderdesc}</p>
      <p className="carousel-subtext">{props.slidertext}</p>
      <a href={props.btnlink} className="button">{props.sliderbtn}</a>
   </div>
   </>
   )
}



export default Mainslideritem;