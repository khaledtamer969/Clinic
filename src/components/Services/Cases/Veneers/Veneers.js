import React,{Component} from 'react';
import pic from './Collage 2021-01-18 00_41_36.jpg';
import pic1 from './Watermark_1577828319688.jpg';
import pic2 from './Collage 2021-01-20 20_41_57-01.jpg';
import Classes from './Veneers.module.css';

import Slideshow from './Slidshow';
class veneers extends Component{
    constructor() {
        super();
        this.state = {
          name: "React"
        };
      }
render() {
return(


    <section id='Cases' className={Classes.Veneers}>
        
<div >
<img src={pic} alt="case"/>
  <img src={pic1} alt="case"/>
  <img src={pic2} alt="case"/>

</div>
</section>
);
}

};
export default veneers;