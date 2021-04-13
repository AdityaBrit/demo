
import './App.css';
import RandomUser  from './Components/RandomUser';
import Details from './Components/Details'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import { Component } from 'react';


 class App extends Component {
   render (){
  return (
    
     <Router> 
       <Route exact path="/" component={RandomUser }/>
       <Route exact path="/details" component={Details }/>
     </Router> 
   
    
  );
}
 }

export default App;


 

