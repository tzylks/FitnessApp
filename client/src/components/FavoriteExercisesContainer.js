
import { Grid, Box } from '@material-ui/core'
import FavoriteExercises from './FavoriteExercises'
import { useState, useEffect } from 'react'
import Draggable from 'react-draggable'
import { Typography, Container } from '@material-ui/core';
import TodaysWorkoutContainer from './TodaysWorkoutContainer';

function FavoriteExercisesContainer({ editThis, setEditThis, sets, reps, mouseOverContainer, todaysWorkout, setFavorites, currentUser, favorites, setCurrentUser, onDeleteFavorite, errorMe, setCurrentExercise }) {


    return (

        <Box style={{ overflow: 'auto', whiteSpace: "noWrap" }}>
            <Grid container spacing={5} style={{ paddingLeft: "30px", marginTop: '10px', marginBottom: '50px', width: "100vw" }} wrap="nowrap">
                {errorMe ? null : favorites.map(favorites => {
                    return (<Grid item key={favorites.id} xs={4} md={5} lg={4} style={{ display: "inline-block" }}>
                        <FavoriteExercises setEditThis={setEditThis} editThis={editThis} sets={sets} reps={reps} setCurrentExercise={setCurrentExercise} favorites={favorites} currentUser={currentUser} onDeleteFavorite={onDeleteFavorite} />
                    </Grid>)
                })}
            </Grid>
            <Typography style={{ marginLeft: '17vw', fontSize: '10rem', textDecoration: 'none', background: 'linear-gradient(90deg, #FEC260 10%, #78DEC7 24% )', webkitBackgroundClip: 'text', webkitTextFillColor: "transparent", marginTop: '5vh' }}>
                Today's Exercises
            </Typography>
            <Container onMouseOver={mouseOverContainer} style={{ height: '70vh', overflow: 'visible' }}>
                <Box>
                    {todaysWorkout ? <TodaysWorkoutContainer mouseOverContainer={mouseOverContainer} todaysWorkout={todaysWorkout} /> : null}
                </Box>
            </Container>
        </Box>

    )
}

export default FavoriteExercisesContainer