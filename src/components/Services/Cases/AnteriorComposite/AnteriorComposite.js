import React ,{Component} from 'react';
import pic from './Collage 2020-11-08 01_22_47.jpg';
import pic1 from './Collage 2021-02-15 19_53_30-1.jpg';
import pic2 from './Collage 2021-02-15 19_57_54-1.jpg';
import Classes from './AnteriorComposite.module.css';
import SlideShow from './Slidshow';

class anteriorcomposite extends Component{
    constructor() {
        super();
        this.state = {
          name: "React"
        };
      }
render(){
return(

    <section id='Cases' className={Classes.AnteriorComposite}>
        
<div >
  <img src={pic} alt="case"/>
  <img src={pic1} alt="case"/>
  <img src={pic2} alt="case"/>
    
    

    
 

</div>
</section>
);
}
};
export default anteriorcomposite;