import React,{Component} from 'react';
import classes from './Service.module.css';
import Cases from './Cases/Cases';
import NavigationItem from '../Navigation/Navigationitems/Navigationitem/Navigationitem';
const services =()=>{

  
return(

<div id ='Services' className={classes.Service} >
<h1>Services</h1>

   <Cases/>

</div>

);
}
export default services;