import React from'react';
 import classes from './Toolbar.module.css';
 import Logo from './new clinic logo without name.png';
 import Navigationitems from '../../Navigation/Navigationitems/Navigationitems';
 
const toolbar =(props)=>(
<header className={classes.Toolbar}>
    
    <div className={classes.Logo}>
        <img src={Logo} alt="clinic's logo"/>
    </div>
   
    <nav className={classes.Desktoponly} >
        <Navigationitems    />
    </nav>

</header>
);
export default toolbar;