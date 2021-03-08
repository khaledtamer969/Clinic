import React from 'react';
import pic from './4b01c806-7dd0-43e5-878c-ecdb9705cff6.png';
import classes from './Intro.module.css';
import Arrow from './Untitled.jpg';
import Navigationitem from '../Navigation/Navigationitems/Navigationitem/Navigationitem';
const intro =()=>{

return(
<section className={classes.Intro}>
<div1>
<h2>World class treatment,</h2>
<h1>at Affordable prices.</h1>
<p>Book same day appointments instantly.</p>
<span>
    <a href='#Services'>
<p1>Learn more </p1>
<img src={Arrow} alt="arrow"/></a>
</span>

</div1>
<div>
    <img src={pic} alt ="kareem operating on patient"/>
</div>

</section>
);


}
export default intro;