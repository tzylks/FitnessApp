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



function App() {

  const [currentUser, setCurrentUser] = useState(false)
  const [exercises, setExercises] = useState([])
  const [favorites, setFavorites] = useState([])
  const [search, setSearch] = useState("");
  const [state, setState] = useState(false);
  const [errorMe, setErrorMe] = useState(false)




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

    console.log(exercise.id)
    console.log(currentUser.id)


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

  // useEffect(() => {
  //   if (favorites) {
  //     const filteredFavorites = favorites.filter((power, toThe, yellowVests) => yellowVests.map(updateDemocracy => updateDemocracy['activity']).indexOf(power['activity']) === toThe)
  //     setFavorites(filteredFavorites)
  //   }
  //   else {
  //     return null
  //   }
  // }, [favorites])

  // if (favorites) {
  //   const filteredFavorites = favorites.filter((power, toThe, yellowVests) => yellowVests.map(updateDemocracy => updateDemocracy['activity']).indexOf(power['activity']) === toThe)
  //   setFavorites(filteredFavorites)
  // }
  // else {
  //   return null
  // }

  // const filteredFavorites = favorites.filter(filter => filter.errors === true)
  // console.log(filteredFavorites)
     

  return (
    <>

      <div>
        <ThemeProvider theme={Theme}>
          <TempDrawer onLogout={onLogout} state={state} toggleDrawer={toggleDrawer} />
          <NavBar search={search} setSearch={setSearch} state={state} toggleDrawer={toggleDrawer} currentUser={currentUser} />
          <Switch>
            <Route
              path='/signup'
              component={() =>
                <SignUp onLogin={onLogin} setCurrentUser={setCurrentUser} />}
            />
            <Route
              path='/login'
              component={() =>
                <Login onLogin={onLogin} currentUser={currentUser} />}
            />
            <Route
              path='/dashboard'
              component={() =>
                <Dashboard />}
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
                <UserDashboard setFavorites={setFavorites} errorMe={errorMe} currentUser={currentUser} favorites={favorites} setCurrentUser={setCurrentUser} onDeleteFavorite={onDeleteFavorite} />}
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
                <UserGoals currentUser={currentUser} />}
            />

          </Switch>
          <Footer />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
