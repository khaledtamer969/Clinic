import React,{Component} from 'react';
import pic from './Collage 2019-07-27 13_46_38.jpg';
import pic1 from './Collage 2021-02-15 19_52_00.jpg';
import Classes from './Pedo.module.css';

import Slideshow from './Slidshow';
class pedo extends Component{
    constructor() {
        super();
        this.state = {
          name: "React"
        };
      }
render() {
return(


    <section id='Cases' className={Classes.Pedo}>
        
<div >
<img src={pic} alt="case"/>
  <img src={pic1} alt="case"/>
  

</div>
</section>
);
}
};
export default pedo;