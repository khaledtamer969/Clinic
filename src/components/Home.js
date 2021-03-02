import React  from 'react';
import Layout from './Layout/Toolbar/Toolbar';
import Intro from './Intro/Intro';
import Review from './Reviews/Reviews';
import Location from './Location/Location';
import Team from './Team/Team';
import Contact from './Contact/Contact';
import Credits from './Team/Credits/Credits';
import Services from './Services/Service';



const Home =()=> {

  
  
    
    return (
     
      <section >
     
       
      <div >
        <Layout/>
        <Intro/>
        <Location/>
        <Team/>
        <Credits/>
        <Services/>
        <Review/>
        <Contact/>
      </div>
     
      </section>
    
    );
    
  }
  
  export default Home;
  