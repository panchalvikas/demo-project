import React,{Component} from "react";
import { Carousel } from "react-responsive-carousel";
import Mainslideritem from './Mainslideritem';

    
class Mainslider extends Component {
    render(){
        return(
        <Carousel autoPlay selectedItem showStatus={false} showArrows={false}>
             <Mainslideritem sliderimg={`${process.env.PUBLIC_URL}images/slider1.jpg`} 
                slidertitle="Labor Day"
                sliderdesc="Sale"
                slidertext="up to 50% off"
                sliderbtn="Shop Sale" btnlink={`${process.env.PUBLIC_URL}`}
             />
             <Mainslideritem sliderimg={`${process.env.PUBLIC_URL}images/slider1.jpg`} 
                slidertitle="Labor Day"
                sliderdesc="Sale"
                slidertext="up to 50% off"
                sliderbtn="Shop Sale" btnlink={`${process.env.PUBLIC_URL}`}
             />
        </Carousel>
        )
    }
}
export default Mainslider;
