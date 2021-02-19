import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Footermain = () => {
   return (
      <div className="footer-main">
         <div className="container">
            <div className="row">
               <div className="col-md-3 colums">
                  <h5 className="footer-info-heading">CONTACT US</h5>
                  <p>demo store</p>
                  <p>Campman</p>
                  <p>9072 South 300 West</p>
                  <p>Sandy, UT 84070</p>
               </div>
               <div className="col-md-3 colums">
                  <h5 className="footer-info-heading">COMPANY INFO</h5>
                  <ul className="footer-list">
                     <li><a href="">About</a></li>
                     <li><a href="">Blog</a></li>
                     <li><a href="">Careers</a></li>
                     <li><a href="">Contacts</a></li>
                     <li><a href="">Reviews</a></li>
                     <li><a href="">Changelog</a></li>
                     <li><a href="">Shipping & Returns</a></li>
                     <li><a href="">Sitemap</a></li>
                  </ul>
               </div>
               <div className="col-md-3 colums">
                  <h5 className="footer-info-heading">CUSTOMER SERVICE</h5>
                  <ul className="footer-list">
                     <li><a href="">My Account</a></li>
                     <li><a href="">Coupons & Promotions</a></li>
                     <li><a href="">Price Match Guarantee</a></li>
                     <li><a href="">Shipping & Returns</a></li>
                     <li><a href="">Monthly Giveaway</a></li>
                  </ul>
               </div>
               <div className="col-md-3 colums">
                  <h5 className="footer-info-heading">Connect With Us</h5>
                  <ul className="social-list">
                     <li><a href="">My Account</a></li>
                     <li><a href="">Coupons & Promotions</a></li>
                     <li><a href="">Price Match Guarantee</a></li>
                     <li><a href="">Shipping & Returns</a></li>
                     <li><a href="">Monthly Giveaway</a></li>
                  </ul>
               </div>
               
            </div>
         </div>
         
      </div>
   );
}
export default Footermain;