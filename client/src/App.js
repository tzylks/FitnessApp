import './App.css';
import SignIn from './components/SignUp.js'
import NavBar from './components/NavBar.js'
import {useState} from 'react'
import Login from './components/Login.js'
import { Route, Switch } from "react-router-dom";
import Dashboard from './components/Dashboard.js'

function App() {
  
  const [currentUser, setCurrentUser] = useState(null)

  function onLogin(user) {
    setCurrentUser(user)
  }

  return (
    <>

      <NavBar />
      <Switch>
              <Route
                path='/signup'
                component={() =>
                  <SignIn onLogin={onLogin}/>}
              />
               <Route
                path='/login'
                component={() =>
                  <Login setCurrentUser={setCurrentUser} />}
              />
              <Route
                path='/'
                component={() =>
                  <Dashboard />}
              />

      </Switch>
    </>
  );
}

export default App;
