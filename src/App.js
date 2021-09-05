
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignInForm from './componentes/SignInForm';
import RegisterForm from './componentes/Register/RegisterForm'


const App = () => {
  return (
    <Router>
             
      <Switch>
      <Route path="/" exact>
           <SignInForm/>
       </Route>
      <Route path="/RegisterPage">
           <RegisterForm/>
        </Route>
     
      </Switch>    
    </Router>
     

 
  )
}



export default App;
