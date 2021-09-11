import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

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

function Exercise({exercise}){

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
                {/* <CardActions>
                <Tooltip title="Add this item to favorites" arrow style={{color: "black"}}>
                    <Button onClick={() => onFavoriteClick(album.id)} size="small" style={{ backgroundColor: '#b9f6ca' }}>
                        Favorite
                    </Button>
                </Tooltip>
                <Tooltip title="Permanently remove album" arrow style={{color: "black"}}>
                    <Button onClick={() => onDelete(album.id)} size="small" style={{ backgroundColor: '#b9f6ca' }}>
                        Delete
                    </Button>
                </Tooltip>
                </CardActions> */}
            </Card>
    )
}

export default Exercise