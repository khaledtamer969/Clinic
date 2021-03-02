import React,{Component} from 'react';
import pic from './Watermark_1577828582195.jpg';
import Classes from './Implants.module.css';

import Slideshow from './Slidshow';
class implants extends Component{
    constructor() {
        super();
        this.state = {
          name: "React"
        };
      }
render() {
return(
    <section id='Cases' className={Classes.Implants}>
        
<div >
<img src={pic} alt="case"/>
</div>
</section>
);
}
};
export default implants;