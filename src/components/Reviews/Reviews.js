import React from 'react';
import Review1 from './Review1.PNG';
import classes from './Reviews.module.css';
const reviews =()=>{
    return(
<div id= 'Reviews' className={classes.Review}>
    <h2>Reviews</h2>
<img src={Review1}alt="Review 1"/>
</div>
    );
}
export default reviews;