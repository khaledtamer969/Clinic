import React from 'react';
import Facebook from './Facebook-512.png';
import instagram from './38-instagram-3-512.png';
import classes from './Contact.module.css';
const contact =()=>{

return(
    <div id='Contact' className={classes.Contact}>
        <div>
        <span>
<h1>Request your Apponitment today </h1>
</span>
<span>
    <p>+20 (123) 456-7890</p>
</span>

</div>
<div1 className={classes.a}>
<p1>
© Midtown Dental Clinic</p1>
<a href={"https://www.facebook.com/Midtowndentalclinic1"}><img src={Facebook}alt="FAcebook"/></a>
<a href={"https://www.instagram.com/midtown_dentalclinic/"}><img src={instagram}alt="FAcebook"/></a>
</div1>
    </div>
);


}
export default contact;