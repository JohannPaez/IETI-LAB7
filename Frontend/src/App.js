import React from 'react';
import './App.css';
import Login from './components/Login';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SidebarPage from './components/SidebarPage';
import Register from './components/Register';
import User from './components/User';
import Profile from './components/Profile';

function App() {
  const LoginView = () => (
    <Login/>
  );
  const RegisterView = () => (
    <Register/>
  );

  const UserView = () => (
    <User/>
  );

  const UpdateProfile = () => (
    <Profile rediFlag = {false}/>
  );

  return (
          <Router>
              <div className="App">
                  <div>                      
                      <Route exact path="/" component={localStorage.getItem('isLoggedIn') ? SidebarPage: LoginView}/>
                      <Route exact path="/home" component={localStorage.getItem('isLoggedIn') ? SidebarPage : LoginView}/>
                      <Route exact path="/register" component={localStorage.getItem('isLoggedIn') ? SidebarPage: RegisterView}/>
                      <Route exact path="/User" component= {UserView} />
                      <Route exact path="/profile" component= {localStorage.getItem('isLoggedIn') ? UpdateProfile: LoginView} />
                  </div>
              </div>
          </Router>
  );
}

export default App;
