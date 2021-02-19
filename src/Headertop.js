import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DemoCarousel from "./DemoCarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Headertop = () => {
   return (
      <div className="topbar">
         <div className="container">
            <div className="row">
               <div className="top-left col-md-3">
                  <ul>
                     <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="supportDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           Support
                        </a>
                        <div className="dropdown-menu" aria-labelledby="supportDropdown">
                           <a className="dropdown-item" href="#">Support1</a>
                           <a className="dropdown-item" href="#">Support2</a>
                           <div className="dropdown-divider"></div>
                           <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                     </li>
                  </ul>
               </div>
               <div className="top-center col-md-4">
               <DemoCarousel />
               </div>
               <div className="top-righ col-md-5">
               <ul>
                     <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="BasecampDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           Basecamp
                        </a>
                        <div className="dropdown-menu" aria-labelledby="BasecampDropdown">
                           <a className="dropdown-item" href="#">Basecamp1</a>
                           <a className="dropdown-item" href="#">Basecamp2</a>
                           <div className="dropdown-divider"></div>
                           <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                     </li>
                     <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="accountDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           account
                        </a>
                        <div className="dropdown-menu" aria-labelledby="accountDropdown">
                           <a className="dropdown-item" href="#">signin</a>
                           <a className="dropdown-item" href="#">gift certificate</a>
                           <div className="dropdown-divider"></div>
                           <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
    </div>
 );
}
export default Headertop;





