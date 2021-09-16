
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
        marginLeft: '-30vw',
        marginRight: '5vw',
        width: '50vw',
        flexDirection: 'row',
        // border: '1px solid #FEC260'
    },
    cover: {
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: 250,
        width: '30vw',
        zIndex: "1",
    },
}));

function UserDashboard({ editThis, setEditThis, sets, reps, goal, setFavorites, errorMe, currentUser, setCurrentUser, favorites, onDeleteFavorite }) {
    const history = useHistory();
    const classes = useStyles();
    const [currentExercise, setCurrentExercise] = useState(false)
    const [todaysWorkout, setTodaysWorkouts] = useState(false)
    const theme = useTheme();

    if (!currentUser) {
        history.push('/login')
    }

    function mouseOverContainer() {
        if (currentUser)
            fetch('/todayworkouts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(currentExercise)
            })
        // .then(() => fetchToday())
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

    let thing = goal[0]
    console.log(goal)

    return (
        <>
            <motion.div
                animate={{ opacity: 1 }}
                transition={{ from: 0, duration: 1 }}>
                <Typography component="h1" variant="h1" style={{ fontFamily: "'Monoton', cursive", textDecoration: 'none', background: 'linear-gradient(160deg, #D62AD0 10%, #78DEC7 24% )', webkitBackgroundClip: 'text', webkitTextFillColor: "transparent", marginTop: '17vh', marginLeft: '14vw' }}>
                    Let's Get Physical
                </Typography>


                {/* <Grid container> */}
                {/* <Grid item lg={12} sm={12} md={12}> */}
                <Box width='100%'>
                    <Card className={classes.root}>
                        <CardContent className={classes.cover}>
                            <motion.div
                                style={{
                                    zIndex: "1",
                                    borderRadius: "70%",
                                    height: "30vh",
                                    width: "30vh",
                                    marginBottom: '30vh',
                                    border: '100px solid black',
                                    background: "radial-gradient(circle at 65% 15%, white 1px, #D62AD0 3%, purple 60%, #D62AD0 100%)"
                                }}
                                
                                animate={{ x: [0, 100, 100, -100, 0], y: [0, -100, 0, 100], rotate: 1000 }}
                                transition={{ duration: 10, loop: Infinity, ease: "linear" }} />

                            <motion.div
                                style={{
                                   
                                    borderRadius: "70%",
                                    height: "30vh",
                                    width: "30vh",
                                    marginBottom: '30vh',
                                 
                                    background: "radial-gradient(circle at 65% 15%, white 1px, #78DEC7 3%, royalblue 60%, #78DEC7 100%)"
                                }}
                                animate={{ x: [0, 300, 100, -100, 0], y: [0, -900, 0, 100], rotate: 1000 }}
                                transition={{ duration: 10, loop: Infinity, ease: "linear" }}
                            />
                        </CardContent>
                        //     className={classes.cover}
                        //     image="https://cdn.wazimo.com/engine/static/articles/fitness-eighties/images/190327_140724_39.jpg"
                        //     title="Fitness Banner"
                        // />
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Box>
                                    <Typography variant="h3" style={{ marginTop: '2vh', display: 'flex', flexDirection: 'column', marginLeft: '7vw' }} >
                                        Profile Image
                                    </Typography>
                                    <Box
                                        // border={1}
                                        border={3}
                                        borderRadius="70%"
                                        overflow="hidden"
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                        height="30vh"
                                        width="18vw"
                                        style={{ borderColor: 'white', marginLeft: '5.5vw', marginTop: '1vh', display: 'flex', flexDrection: 'column' }}
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
                                </Box>

                                <Typography variant="h6" color="primary" style={{ marginLeft: '10vw', marginTop: '1vh', lineHeight: '50px', wrap: 'no-wrap' }}  >

                                    Name: {currentUser.name}
                                    <br />
                                    height: {currentUser.height}
                                    <br />
                                    Weight: {currentUser.weight}
                                    <br />
                                    Location: {currentUser.location}
                                    <br />
                                    {goal == false ? null : `Target Weight: ${thing.target_weight}lbs`}
                                    <br />
                                    {goal == false ? null : `Target Body Fat: ${thing.target_bmi}%`}
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


                <Typography style={{ marginLeft: '17vw', fontSize: '10rem', textDecoration: 'none', background: 'linear-gradient(90deg, #FEC260 10%, #78DEC7 24% )', webkitBackgroundClip: 'text', webkitTextFillColor: "transparent", marginTop: '10vh' }}>
                    Your Fitness Plan
                </Typography>

                <FavoriteExercisesContainer editThis={editThis} setEditThis={setEditThis} sets={sets} reps={reps} currentExercise={currentExercise} todaysWorkout={todaysWorkout} mouseOverContainer={mouseOverContainer} setCurrentExercise={setCurrentExercise} setFavorites={setFavorites} errorMe={errorMe} favorites={favorites} currentUser={currentUser} setCurrentUser={setCurrentUser} onDeleteFavorite={onDeleteFavorite} />

            </motion.div>


        </>
    )
}

export default UserDashboard