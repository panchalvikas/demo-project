import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const Basecampreview = () => {
   return (
      <div className="bascamp-review">
         <div className="container">
            <h3 className="page-heading">Basecamp</h3>
            <h5 className="page-sub-heading">Travel, How To’s, and Gear Reviews</h5>
            <div className="row flex align-item-start justify-content-space-between">
               <div className="bascamp-left colums">
               
                  <img src={`${process.env.PUBLIC_URL}images/postimg.jpg`} alt="postimg" />
                  <h5>
                     The 10 Most Gorgeous Solo Hikes
                  </h5>
               </div>
               <div className="bascamp-right colums">
                  <div className="bascamp-right-top">
                  <img src={`${process.env.PUBLIC_URL}images/postimg1.jpg`} alt="postimg1" />
                     <h5>
                           Eight of the Best Camping Pillows
                     </h5>
                  </div>
                  <div className="bascamp-right-top">
                  <img src={`${process.env.PUBLIC_URL}images/postimg2.jpg`} alt="postimg2" />
                     <h5>
                           Car Camping: A Gear Guide to
                           Sleeping In Your Car
                     </h5>
                  </div>
               </div>
            </div>
         </div>
      </div>         
   );
}
export default Basecampreview;