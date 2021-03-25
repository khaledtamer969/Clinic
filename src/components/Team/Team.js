import React from 'react';

import pic1 from './DR.Kareem.PNG';
import Credits from './Credits/Credits';
import classes from './Team.module.css';

const team =()=>{
    return(
<section id = "Team" className={classes.Team}>
 <div3>
 
<div >
<p>MEET THE TEAM </p>
<h2>Dr. Kareem Abdelfattah</h2>
<p1>More than just a friendly face, Dr.Kareem is a 
    member of the Royal College of Surgeons,
    the International Digital Dental Academy,and
     a graduate from MSA UNiversity with highest 
     honors. Specializing in Esthetic and Restorative
      Dentistry, Dr.Kareem provides the highest
       quality service.</p1>
</div>

<div2>
    <img src={pic1}alt="kareem"/>
</div2>
</div3>

</section>
    );
}
export default team;