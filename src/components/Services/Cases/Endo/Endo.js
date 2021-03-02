import React ,{Component}from 'react';
import pic from './IMG_20201107_232554.jpg';
import pic1 from './IMG_20201110_135830.jpg';
import pic2 from './IMG_20201130_161835.jpg';
import Classes from './Endo.module.css';
import Slideshow from './Slidshow';
class endo extends Component{
    constructor() {
        super();
        this.state = {
          name: "React"
        };
      }
render() {
return(

    <section id='Cases' className={Classes.Endo}>
        
<div >
  
<img src={pic} alt="case"/>
  <img src={pic1} alt="case"/>
  <img src={pic2} alt="case"/>
 

</div>
</section>
);
}
};
export default endo;