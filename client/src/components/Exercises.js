
import {Grid, Box} from '@material-ui/core'
import Exercise from './Exercise.js'

function Exercises({exercises}){
    
    return(
        <Box style={{overflow: 'auto', whiteSpace: "noWrap"}}>
        <Grid container spacing={5} style={{paddingLeft: "30px", marginTop: '10px', marginBottom: '50px', width: "100vw"}} wrap="nowrap">
            {exercises.map(exercise => {
                return (<Grid item key={exercise.id} xs={4} md={5} lg={4} style={{ display: "inline-block" }}>
                    <Exercise exercise={exercise} />  
                </Grid> )
            })}
        </Grid>
        </Box>
    )
}

export default Exercises