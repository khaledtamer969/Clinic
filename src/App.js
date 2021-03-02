import React ,{Component} from 'react';
import { BrowserRouter , Route, Link, Switch ,Redirect} from 'react-router-dom'; 
import classes from './App.module.css';
import Home from './components/Home';
import Layout from './components/Layout/Toolbar/Toolbar';
import Register from './components/Register/Register';
import Routes from './components/Routes';
class App extends Component {

  render(){

  
  return (
   
    <section className={classes.App}>
       <div >
      <BrowserRouter>
     
        <Routes />
      </BrowserRouter>
    </div>
     

    </section>
  
  );
  }
}

export default App;
