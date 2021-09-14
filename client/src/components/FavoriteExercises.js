import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Tooltip from '@material-ui/core/Tooltip';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { CardActions, Container, Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import EditSharpIcon from '@material-ui/icons/EditSharp';

import '../index.css'

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
        border: 'solid 3px #78DEC7',
        marginTop: "10vh"

    },
});

function FavoriteExercises({currentUser, favorites, onDeleteFavorite}){

    const classes = useStyles();

    return(
        
        <Card className={classes.colored} style={{ color: 'white'}}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={favorites.image}
                        title="album cover"
                    />
                    <CardContent>
                        <Typography align='center' gutterBottom variant="h4" component="h2" color="secondary">
                            {favorites.activity}
                        </Typography>
                        <Typography align='center' gutterBottom variant="h5" component="h2">
                            {favorites.muscle_group}
                        </Typography>
                        <Typography align='center' variant="body2"  component="p">
                            Reps:
                        </Typography>
                        <Typography align='center' variant="body2" component="p">
                            Sets:
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Tooltip title="Remove this Exercise" arrow style={{color: "black"}}>
                    <DeleteSharpIcon size="small" onClick={() => onDeleteFavorite(favorites.id)} style={{ color: '#FEC260', marginLeft: "auto", marginRight: '10px', fontSize: "40px" }}>
                        Remove From Exercise Plan
                    </DeleteSharpIcon>
                </Tooltip>
                <Tooltip title="Edit this Exercise" arrow style={{color: "black"}}>
                    <EditSharpIcon size="small" style={{ color: '#FEC260', marginLeft: '0', marginRight: 'auto', fontSize: "40px"  }}>
                        Update Exercise
                    </EditSharpIcon>
                </Tooltip>
                </CardActions>
            </Card>
        
    )
}

export default FavoriteExercises