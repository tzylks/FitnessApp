import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Tooltip from '@material-ui/core/Tooltip';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { CardActions } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
    root: {
        maxWidth: 100,
    },
    media: {
        height: 283,
    },
    colored: {
        backgroundColor: "#000",
        color: "#fff",
        width: "300px",
        border: 'solid 3px #78DEC7'

    },
});

function Exercise({exercise, onFavoriteClick, currentUser, favoriteExercises}){

    const classes = useStyles();

    return(
        <Card className={classes.colored}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        // image={album.img_url}
                        title="album cover"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h2" color="secondary">
                            {exercise.activity}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            {exercise.muscle_group}
                        </Typography>
                        <Typography variant="body2"  component="p">
                            Hell yeah
                        </Typography>
                        <Typography variant="body2" component="p">
                            The Pump
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Tooltip title="Add this item to Exercise Plan" arrow style={{color: "black"}}>
                    <Button onClick={() => onFavoriteClick(exercise, currentUser)} size="small" style={{ backgroundColor: '#FEC260' }}>
                        Add to Exercise Plan
                    </Button>
                </Tooltip>
                </CardActions>
            </Card>
    )
}

export default Exercise