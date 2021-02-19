import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Footermain from "./Footermain";

const Footer = () => {
   return (
      <div className="footer">
         <div className="container">
            <div className="subscription-block">
               <h3 className="page-heading">Be a Part of the Community!<br></br>
                  Subscribe to Receive Updates and Discounts!</h3>
               <h5 className="page-sub-heading">Full priced items only. Cannot be combined with other offers. Exclusions apply.</h5>
               <div className="subsctip-form">
                  <form>
                     <div className="form-field">
                        <input type="email" placeholder="Enter Your Email and Save" />
                        <input type="submit" value="Subscribe" className="button" />
                     </div>
                  </form>
               </div>
            </div>
         </div>
         <Footermain />
      </div>
   );
}
export default Footer;