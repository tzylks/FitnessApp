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
import Checkout from './components/Checkout.js'
import UserSettings from './components/UserSettings.js'
import { FavoriteSharp } from '@material-ui/icons';
import UserGoals from './components/UserGoals.js'
import { ParallaxProvider } from 'react-scroll-parallax'
import SideDrawer from './components/SideDrawer'
import SetsReps from './components/SetsReps'



function App() {

  const [currentUser, setCurrentUser] = useState(false)
  const [exercises, setExercises] = useState([])
  const [favorites, setFavorites] = useState([])
  const [goal, setGoal] = useState(false)
  const [search, setSearch] = useState("");
  const [state, setState] = useState(false);
  const [errorMe, setErrorMe] = useState(false)
  const [sets, setSets] = useState('')
  const [reps, setReps] = useState('')
  const [editThis, setEditThis] = useState(false)


  function onLogout() {
    setCurrentUser(false)
  }

  function onLogin(user) {
    setCurrentUser(user)
  }

  function onDeleteFavorite(id) {
    fetch(`/user_exercises/${id}`, {
      method: "DELETE",
    })

    let newFavorites = favorites.filter(favorite => favorite.id !== id)
    setFavorites(newFavorites)
  }
  useEffect(() => {
    fetch('/exercises')
      .then(res => res.json())
      .then(setExercises)
  }, [])

  let id = currentUser.id

  useEffect(() => {
    setGoal([false])
    let whatever = currentUser.id
    fetch(`/users/${whatever}/user_goals`)
    .then(res => res.json())
    .then(data => setGoal(data))
  }, [])

  useEffect(() => {
    fetch(`/users/${id}`)
      .then(res => res.json())
      .then(data => setFavorites(data.user_exercises))
  }, [currentUser])
  

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setCurrentUser(user));
      }
    });
  }, []);

  function onFavoriteClick(exercise, currentUser) {


    const newObj = {
      exercise_id: exercise.id,
      user_id: currentUser.id,
      activity: exercise.activity,
      muscle_group: exercise.muscle_group,
      image: exercise.image
    }


    fetch('/user_exercises', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newObj)
    })
      .then(res => res.json())
      .then(data => {
        if (!data.errors) {
        setFavorites([...favorites, data])}})
      .catch(error => setErrorMe(error))
  }


  function toggleDrawer() {
    setState(!state);
  };

  const exercisesToDisplay = exercises.filter((exercise) =>
    exercise.activity.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <>
    <ParallaxProvider>
      <div>
        <ThemeProvider theme={Theme}>
          <TempDrawer onLogout={onLogout} state={state} toggleDrawer={toggleDrawer} />
          <NavBar search={search} setSearch={setSearch} state={state} toggleDrawer={toggleDrawer} currentUser={currentUser} />
          <SideDrawer />
          <Switch>
            <Route
              path='/signup'
              component={() =>
                <SignUp onLogin={onLogin} setCurrentUser={setCurrentUser} />}
            />
            <Route
              path='/login'
              component={() =>
                <Login onLogin={onLogin} currentUser={currentUser} setGoal={setGoal} />}
            />
            <Route
              path='/dashboard'
              component={() =>
                <Dashboard currentUser={currentUser}/>}
            />
            <Route
              path='/exercises'
              component={() =>
                <Exercises exercises={exercisesToDisplay} currentUser={currentUser} onFavoriteClick={onFavoriteClick} />}
            />
            <Route
              path='/pricing'
              component={() =>
                <Pricing />}
            />
            <Route
              path='/userdashboard'
              component={() =>
                <UserDashboard setEditThis={setEditThis} editThis={editThis} reps={reps} goal={goal} setFavorites={setFavorites} errorMe={errorMe} currentUser={currentUser} favorites={favorites} setCurrentUser={setCurrentUser} onDeleteFavorite={onDeleteFavorite} />}
            />
            <Route
              path='/checkout'
              component={() =>
                <Checkout />}
            />
            <Route
              path='/usersettings'
              component={() =>
                <UserSettings currentUser={currentUser} />}
            />
             <Route
              path='/usergoals'
              component={() =>
                <UserGoals goal={goal} currentUser={currentUser} setGoal={setGoal} />}
            />
             <Route
              path='/setsreps'
              component={() =>
                <SetsReps editThis={editThis} />}
            />

          </Switch>
          <Footer />
        </ThemeProvider>
      </div>
      </ParallaxProvider>
    </>
  );
}

export default App;
