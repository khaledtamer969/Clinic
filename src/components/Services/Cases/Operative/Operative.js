import React,{Component} from 'react';
import pic from './Collage 2020-07-12 03_19_28.jpg';
import pic1 from './Collage 2020-08-29 19_16_23.jpg';
import pic2 from './Collage 2020-11-08 16_06_05.jpg';
import Classes from './Operative.module.css';
import Slideshow from './Slidshow';
class operative extends Component{
    constructor() {
        super();
        this.state = {
          name: "React"
        };
      }
render() {
return(

    <section id='Cases' className={Classes.Operative}>
        
<div >
<img src={pic} alt="case"/>
  <img src={pic1} alt="case"/>
  <img src={pic2} alt="case"/>
</div>
</section>
);
}
};
export default operative;