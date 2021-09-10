import './App.css';
import SignUp from './components/SignUp.js'
import NavBar from './components/NavBar.js'
import {useState, useEffect} from 'react'
import Login from './components/Login.js'
import { Route, Switch } from "react-router-dom";
import Dashboard from './components/Dashboard.js'

function App() {
  
  const [currentUser, setCurrentUser] = useState(null)

  function onLogin(user) {
    setCurrentUser(user)
  }

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setCurrentUser(user));
      }
    });
  }, []);

  // if (!currentUser) return <Dashboard/>

  return (
    <>

      <NavBar />
      <Switch>
              <Route
                path='/signup'
                component={() =>
                  <SignUp onLogin={onLogin}/>}
              />
               <Route
                path='/login'
                component={() =>
                  <Login onLogin={onLogin} />}
              />
              <Route
                path='/dashboard'
                component={() =>
                  <Dashboard />}
              />

      </Switch>
    </>
  );
}

export default App;
