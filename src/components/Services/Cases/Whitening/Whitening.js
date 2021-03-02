import React,{Component} from 'react';
import Navigationitem from '../../../Navigation/Navigationitems/Navigationitem/Navigationitem';
import Classes from './Whitening.module.css';
import pic from './Collage 2020-11-17 03_19_23.jpg';
import pic1 from './Collage 2020-12-24 18_45_32.jpg';
import pic2 from './IMG_20201117_000449_472.jpg';
import SlideShow from './Sildshow/Slidshow';

class whitening extends Component{
    constructor() {
        super();
        this.state = {
          name: "React"
        };
      }
render() {
return(


    <section id='Cases' className={Classes.Whitening}>
        
<div >
<img src={pic} alt="case"/>
  <img src={pic1} alt="case"/>
  <img src={pic2} alt="case"/>
</div>

</section>
);
}
};
export default whitening;