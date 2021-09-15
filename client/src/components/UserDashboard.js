
import { useHistory } from 'react-router-dom'
import FavoriteExercisesContainer from "./FavoriteExercisesContainer";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Box, Container, Button } from '@material-ui/core';
import { useState, useEffect } from 'react'
import TodaysWorkoutContainer from './TodaysWorkoutContainer'
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginTop: '10vh',
        width: '99vw',
        background: 'black',
        border: '7px solid #FEC260'

    },
    details: {
        display: 'flex',
        flexDirection: 'row',
    },
    content: {
        display: 'flex',
        flex: '1 0 auto',
        fontSize: '40px',
        color: "white",
        marginLeft: '1vw',
        marginRight: '5vw',
        width: '50vw',
        flexDirection: 'row',
        // border: '1px solid #FEC260'
    },
    cover: {
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: 300,
        width: '100vw',
    },
}));

function UserDashboard({ goal, setFavorites, errorMe, currentUser, setCurrentUser, favorites, onDeleteFavorite }) {
    const history = useHistory();
    const classes = useStyles();
    const [currentExercise, setCurrentExercise] = useState(false)
    const [todaysWorkout, setTodaysWorkouts] = useState(false)
    const theme = useTheme();

    // setCurrentUser(currentUser)

    if (!currentUser) {
        history.push('/login')
    }
    // else {
    //     history.push('/userdashboard')
    // }

    // function onHoverAdd(){

    //     newObj
    //     fetch('/todayworkouts', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(obj)
    //     })
    // }

    function mouseOverContainer() {
        if (currentUser)
            fetch('/todayworkouts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(currentExercise)
            })
                .then(() => fetchToday())
    }

    let id = currentUser.id

    function fetchToday() {

        fetch(`/users/${id}/todayworkouts`)
            .then(res => res.json())
            .then(data => setTodaysWorkouts(data))

    }

    useEffect(() => {
        fetch(`/users/${id}/todayworkouts`)
            .then(res => res.json())
            .then(data => {
                if (!data.errors) {
                    setTodaysWorkouts(data)
                }
            })
    }, [])

    console.log(currentExercise.user_id)
    console.log(todaysWorkout)

    return (
        <>

            <Typography component="h1" variant="h1" style={{ fontFamily: "'Monoton', cursive", textDecoration: 'none', background: 'linear-gradient(160deg, #D62AD0 10%, #78DEC7 24% )', webkitBackgroundClip: 'text', webkitTextFillColor: "transparent", marginTop: '17vh', marginLeft: '14vw' }}>
                Let's Get Physical
            </Typography>


            {/* <Grid container> */}
            {/* <Grid item lg={12} sm={12} md={12}> */}
            <Box width='100%'>
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.cover}
                        image="https://cdn.wazimo.com/engine/static/articles/fitness-eighties/images/190327_140724_39.jpg"
                        title="Fitness Banner"
                    />
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            {/* <Typography component="h3" variant="h3" style={{ marginTop: '4vh' }} >
                                Profile */}
                            <Box
                                // border={1}
                                borderRadius="10%"
                                overflow="hidden"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                height="20vh"
                                width="12vw"
                                style={{ borderColor: '#FEC260', marginLeft: '2vw', marginTop: '6vh' }}
                            >
                                {currentUser.profile_image ?
                                    <img
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                        }}
                                        src={currentUser.profile_image}
                                        alt="profile"

                                    /> : <AccountCircleIcon style={{ fontSize: '200px', color: 'white' }} />}

                            </Box>
                            {/* </Typography> */}
                            <Typography variant="subtitle1" color="textSecondary">
                                Your Stats:
                            </Typography>
                            <Typography variant="h4" color="primary" style={{ marginLeft: '4vw', marginTop: '5vh', lineHeight: '50px', wrap: 'no-wrap' }}  >
                                Name: {currentUser.name}
                                <br />
                                height: {currentUser.height}
                                <br />
                                Weight: {currentUser.weight}
                                <br />
                                Location: {currentUser.location}
                                <br />
                                Add Goals
                                <Button component={Link} to='/usergoals'>
                                    <AddCircleRoundedIcon style={{ marginLeft: '10px', fontSize: '30px', color: '#FEC260' }}></AddCircleRoundedIcon>
                                </Button>
                            </Typography>

                        </CardContent>
                    </div>

                </Card>
            </Box>
            {/* </Grid>
            </Grid> */}

            <Typography style={{ marginLeft: '17vw', fontSize: '10rem', textDecoration: 'none', background: 'linear-gradient(90deg, #FEC260 10%, #78DEC7 24% )', webkitBackgroundClip: 'text', webkitTextFillColor: "transparent", marginTop: '10vh' }}>
                Your Fitness Plan
            </Typography>

            {/* <h2 style={{ color: "white" }}>Welcome back {currentUser.username}!</h2> */}
            <FavoriteExercisesContainer currentExercise={currentExercise} todaysWorkout={todaysWorkout} mouseOverContainer={mouseOverContainer} setCurrentExercise={setCurrentExercise} setFavorites={setFavorites} errorMe={errorMe} favorites={favorites} currentUser={currentUser} setCurrentUser={setCurrentUser} onDeleteFavorite={onDeleteFavorite} />

            {/* <Typography style={{ marginLeft: '17vw', fontSize: '10rem', textDecoration: 'none', background: 'linear-gradient(90deg, #FEC260 10%, #78DEC7 24% )', webkitBackgroundClip: 'text', webkitTextFillColor: "transparent", marginTop: '5vh' }}>
                Today's Exercises
            </Typography>

            <Container onMouseOver={mouseOverContainer} style={{ height: '100vh' }}>
                <Box>
                    {todaysWorkout ? <TodaysWorkoutContainer todaysWorkout={todaysWorkout} /> : null}
                </Box>
            </Container> */}

            <Typography style={{ marginLeft: '17vw', fontSize: '10rem', textDecoration: 'none', background: 'linear-gradient(90deg, #FEC260 10%, #78DEC7 24% )', webkitBackgroundClip: 'text', webkitTextFillColor: "transparent", marginTop: '10vh' }}>
                Your Fitness Goal {goal.target_weight}
            </Typography>

            <h1 style={{color: 'white'}}>{goal.target_weight}</h1>
            
        </>
    )
}

export default UserDashboard