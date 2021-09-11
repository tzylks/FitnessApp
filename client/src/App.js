import './App.css';
import SignUp from './components/SignUp.js'
import NavBar from './components/NavBar.js'
import { useState, useEffect } from 'react'
import Login from './components/Login.js'
import { Route, Switch } from "react-router-dom"
import Dashboard from './components/Dashboard.js'
import TempDrawer from './components/TempDrawer'
import { ThemeProvider } from "@material-ui/core"
import Theme from "./components/Theme.js"
import Exercises from './components/Exercises.js'
import Pricing from './components/Pricing.js'
import Footer from './components/Footer.js'
import UserDashboard from './components/UserDashboard'


function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [exercises, setExercises] = useState([])

  function onLogin(user) {
    setCurrentUser(user)
  }

  useEffect(() => {
    fetch('/exercises')
    .then(res => res.json())
    .then(setExercises)
  }, [])

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
    <div style={{backgroundColor: 'black', height: '100vh'}}>
      <ThemeProvider theme={Theme}>
        <TempDrawer />
        {/* <NavBar /> */}
        <Switch>
          <Route
            path='/signup'
            component={() =>
              <SignUp onLogin={onLogin} />}
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
           <Route
            path='/exercises'
            component={() =>
              <Exercises exercises={exercises} />}
          />
            <Route
            path='/pricing'
            component={() =>
              <Pricing />}
          />
            <Route
            path='/userdashboard'
            component={() =>
              <UserDashboard currentUser={currentUser}/>}
          />

        </Switch>
        <Footer />
      </ThemeProvider>
      </div>
    </>
  );
}

export default App;
