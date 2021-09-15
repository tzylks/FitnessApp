
import { Grid, Box } from '@material-ui/core'
import FavoriteExercises from './FavoriteExercises'
import { useState, useEffect } from 'react'
import Draggable from 'react-draggable'
import Yes from './TodaysWorkout'
import {Typography} from '@material-ui/core'

function TodaysWorkoutContainer({ currentExercise, setFavorites, currentUser, favorites, setCurrentUser, onDeleteFavorite, errorMe, setCurrentExercise, todaysWorkout }) {


    return (
        <>
            <Box style={{ overflow: 'auto', whiteSpace: "noWrap" }}>
                <Grid container spacing={5} style={{ paddingLeft: "30px", marginTop: '10px', marginBottom: '50px', width: "100vw" }} wrap="nowrap">
                    {todaysWorkout ? todaysWorkout.map(todaysWorkout => {
                        return (<Grid item key={todaysWorkout.id} xs={4} md={5} lg={4} style={{ display: "inline-block" }}>
                            <Yes todaysWorkout={todaysWorkout} setCurrentExercise={setCurrentExercise} favorites={favorites} currentUser={currentUser} onDeleteFavorite={onDeleteFavorite} />
                        </Grid>)
                    }) : null}
                </Grid>
            </Box>

        </>
    )
}

export default TodaysWorkoutContainer