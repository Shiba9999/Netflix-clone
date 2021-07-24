import React from 'react';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import {Redirect} from "react-router-dom"
import ProfileScreen from './screens/ProfileScreen';

// import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function PrivateRoute( props ) {
  const authenticatedtoken = localStorage.getItem("isSignin");
  return authenticatedtoken ? <Route {...props} /> : <Redirect to="/login" />

}
function App() {
  return (
    <div className="App">



      <Router>

        <Switch>

          <Route exact path="/login" component={LoginScreen} />
          <PrivateRoute exact path="/" component={HomeScreen} />
          <PrivateRoute  path="/profile" component={ProfileScreen} />



        </Switch>

      </Router>

    </div>
  );
}

export default App;
