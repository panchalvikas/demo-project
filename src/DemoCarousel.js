import React,{Component} from "react";
import { Carousel } from "react-responsive-carousel";


    
class DemoCarousel extends Component {
    render(){
        return(
        <Carousel autoPlay selectedItem showStatus={false} showIndicators={false}>
             <div className="productCarousel-slide">
                <p>Free Shipping on Orders Over <span className="orange">$50*</span></p>
            </div>
            <div className="productCarousel-slide">
                <p>Free Shipping on Orders Over <span className="orange">$50*</span></p>
            </div>
            <div className="productCarousel-slide">
                <p>Free Shipping on Orders Over <span className="orange">$50*</span></p>
            </div>
            <div className="productCarousel-slide">
                <p>Free Shipping on Orders Over <span className="orange">$50*</span></p>
            </div>
            <div className="productCarousel-slide">
                <p>Free Shipping on Orders Over <span className="orange">$50*</span></p>
            </div>
            <div className="productCarousel-slide">
                <p>Free Shipping on Orders Over <span className="orange">$50*</span></p>
            </div>
        </Carousel>
        )
    }
}
export default DemoCarousel;
