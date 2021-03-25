import React from 'react';
import Map from './Map locatio.PNG';
import clinic from './clinic chair.PNG';
import classes from './Location.module.css';
const location =() =>
{
    return(
<section id='Location' className={classes.Location}>

<p>ABOUT US </p>
<h2>Located At The Heart Of 6th of October</h2>
<div>
<img src={Map} alt="Location"/>
<img src={clinic} alt="chair"/>
</div>

<div1>
<p1>Driven by a team of passionate,
young, devoted health-care experts. Our mission is to provide
      luxurious ,world-class treatments
       at attainable prices. As members of the Royal 
        College of Surgeons in London and International Digital Dental Academy in UK.We 
        specialize in Esthetic and Restorative dentistry
    .</p1>
<p2>You can find us at <span>11th 
Clinic on the first floor of the 
Cairo Medical Center.</span></p2>
</div1>
</section>
    );
}
export default location;