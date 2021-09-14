
import {Grid, Box} from '@material-ui/core'
import FavoriteExercises from './FavoriteExercises'
import {useState, useEffect} from 'react'

function FavoriteExercisesContainer({setFavorites, currentUser, favorites, setCurrentUser, onDeleteFavorite, errorMe}){


    setCurrentUser(currentUser)

  
    return(
        <Box style={{overflow: 'auto', whiteSpace: "noWrap"}}>
        <Grid container spacing={5} style={{paddingLeft: "30px", marginTop: '10px', marginBottom: '50px', width: "100vw"}} wrap="nowrap">
            {errorMe ? null : favorites.map(favorites => {
                return (<Grid item key={favorites.id} xs={4} md={5} lg={4} style={{ display: "inline-block" }}>
                    <FavoriteExercises favorites={favorites}  currentUser={currentUser} onDeleteFavorite={onDeleteFavorite} />  
                </Grid> )
            })}
        </Grid>
        </Box>
    )
}

export default FavoriteExercisesContainer