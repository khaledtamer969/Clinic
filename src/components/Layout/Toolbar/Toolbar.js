import React from'react';
 import classes from './Toolbar.module.css';
 import Logo from './new clinic logo without name.png';
 import Navigationitems from '../../Navigation/Navigationitems/Navigationitems';
 import Sidebar from '../Sidebar/Sidebar';
 import {  Link } from 'react-router-dom'; 
const toolbar =(props)=>(
<header className={classes.Toolbar}>
    
    <div className={classes.Logo}>
        <img src={Logo} alt="clinic's logo"/>
        
    </div>
    <div className={classes.Sidebaronly} className={classes.button}>
    <Link to="/Register"><button><span>Book Appointment </span></button></Link> 
    </div>
  
    <nav className={classes.Desktoponly} >
        <Navigationitems    />
        
    </nav>

</header>
);
export default toolbar;