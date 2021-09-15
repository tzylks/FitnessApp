
import { Grid, Box } from '@material-ui/core'
import Exercise from './Exercise.js'
import { Typography } from '@material-ui/core'

function Exercises({ exercises, currentUser, favoriteExercises, onFavoriteClick }) {



    return (
        <>
            <Typography style={{ marginLeft: '17vw', fontSize: '10rem', textDecoration: 'none', background: 'linear-gradient(90deg, #FEC260 51%, #78DEC7 24% )', webkitBackgroundClip: 'text', webkitTextFillColor: "transparent", marginTop: '15vh' }}>
                Curated Exercises
            </Typography>
            <Box style={{ overflow: 'auto', whiteSpace: "noWrap" }}>
                <Grid container spacing={5} style={{ paddingLeft: "30px", marginTop: '1vh', marginBottom: '50px', width: "100vw" }} wrap="nowrap">
                    {exercises.map(exercise => {
                        return (<Grid item key={exercise.id} xs={4} md={5} lg={4} style={{ display: "inline-block" }}>
                            <Exercise exercise={exercise} onFavoriteClick={onFavoriteClick} currentUser={currentUser} />
                        </Grid>)
                    })}
                </Grid>
            </Box>
        </>
    )
}

export default Exercises