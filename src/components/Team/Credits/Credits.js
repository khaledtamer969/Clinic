import React from 'react';
import pic from './DDA.PNG';
import pic1 from './msalogo-removebg-preview.png';
import pic2 from './rcshi.jpg';
import classes from "./Credits.module.css";
const credit=()=>{
return(
    <section className={classes.Credits}>
        <p>Proud members of</p>
<div >
<span1>
<img src={pic} alt="logo"/>
</span1>
<span2>
<img src={pic1} alt="logo"/>
</span2>
<span3>
<img src={pic2} alt="logo"/>
</span3>
</div>

</section>
);


}
export default credit;