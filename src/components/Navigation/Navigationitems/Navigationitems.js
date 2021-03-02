import React from 'react';
import { BrowserRouter , Link } from 'react-router-dom'; 
import classes from './Navigationitems.module.css';
 import Navigationitem from './Navigationitem/Navigationitem';
 import Routes from '.././../Routes';

const navigationitems =(props)=>{
    
        return(
    <div>
<ul className={classes.Navigationitems}>
    
<Navigationitem   link='#Location'  class="smoothScroll"  >About  </Navigationitem>
<Navigationitem  link="#Team" >   Team </Navigationitem>
<Navigationitem  link="#Services" >   Services </Navigationitem>
<Navigationitem  link="#Reviews" >   Reviews </Navigationitem>
<Navigationitem  link="#Contact" >   Contact </Navigationitem>
<Link to="/Register"><button><span>Book Appointment </span></button></Link> 

</ul>

</div>
        );
        };
export default navigationitems;