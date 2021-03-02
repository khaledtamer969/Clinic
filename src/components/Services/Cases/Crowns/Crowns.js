import React,{Component} from 'react';
import Classes from './Crowns.module.css';
import SlideShow from './Slidshow';
import pic from './Collage 2019-12-31 23_10_51.jpg';
import pic1 from './Collage 2020-11-12 22_46_19.jpg';
import pic2 from './Collage 2020-11-12 23_20_38.jpg';
class crowns extends Component{
    constructor() {
        super();
        this.state = {
          name: "React"
        };
      }
render() {
return(

    <section id='Cases' className={Classes.Crowns}>
        
<div >
<img src={pic} alt="case"/>
  <img src={pic1} alt="case"/>
  <img src={pic2} alt="case"/>
    
</div>
</section>
);
}
};
export default crowns;