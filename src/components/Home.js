import React  from 'react';
import Layout from './Layout/Toolbar/Toolbar';
import Intro from './Intro/Intro';
import Review from './Reviews/Reviews';
import Location from './Location/Location';
import Team from './Team/Team';
import Contact from './Contact/Contact';
import Credits from './Team/Credits/Credits';
import Services from './Services/Service';
import Vision from './Vision/Vision';
import Quality from './QualityControl/QualityControl';
import classes from './Home.module.css';
import './_variables.scss';
const Home =()=> {

  
  
    
    return (
     
      <section >
     
       
      <div className={classes.Home}>
        <Layout/>
        <Intro/>
        <Location/>
        <Team/>
        <Credits/>
        <Vision/>
        <Quality/>
        <Services/>
        <Review/>
        <Contact/>
      </div>
     
      </section>
    
    );
    
  }
  
  export default Home;
  