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
import Draggable from 'react-draggable'
import { motion } from 'framer-motion'
import {useState} from 'react'
import {IconButton} from '@material-ui/core'
import {useHistory} from 'react-router-dom'

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
        width: "25vw",
        border: 'solid 3px #78DEC7',
        marginTop: "5vh",
    },
});

function FavoriteExercises({ editThis, setEditThis, mouseOverContainer, currentUser, favorites, onDeleteFavorite, setCurrentExercise }) {

    const history = useHistory();
    const classes = useStyles();

    function onClickFavorite(){
        setCurrentExercise({
            activity: favorites.activity,
            muscle_group: favorites.muscle_group,
            user_id: currentUser.id,
            image: favorites.image
        })
    }

    function onClickEdit() {
        setEditThis({
            activity: favorites.activity,
            muscle_group: favorites.muscle_group,
            id: favorites.id,
            image: favorites.image
        })
        history.push('/setsreps')
    }

    // const id = favorites.id
    // function onClickFavorite(){

    //  const newObj = {
    //      sets: sets,
    //      reps: reps
    //  }   
    //  fetch(`/user_favorites/${id}`, {
    //      method: 'PATCH',
    //      headers: {
    //          'Content-Type': 'application/json'
    //      },
    //      body: JSON.stringify()
    //  })
    // }


    return (
    
    <Container>
        <Draggable>
            <Card onClick={onClickFavorite} onDrop={mouseOverContainer} className={classes.colored} style={{ color: 'white' }}
             >
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
                        <Typography align='center' variant="body2" component="p">
                            Reps: {favorites.reps}
                        </Typography>
                        <Typography align='center' variant="body2" component="p">
                            Sets: {favorites.sets}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Tooltip title="Remove this Exercise" arrow style={{ color: "black" }}>
                        <DeleteSharpIcon size="small" onClick={() => onDeleteFavorite(favorites.id)} style={{ color: '#FEC260', marginLeft: "auto", marginRight: '10px', fontSize: "40px" }}>
                            Remove From Exercise Plan
                        </DeleteSharpIcon>
                    </Tooltip>
                    <Tooltip title="Edit this Exercise" arrow style={{ color: "black" }}>
                       <IconButton onClick={onClickEdit}>
                       <EditSharpIcon size="small" style={{ color: '#FEC260', marginLeft: '0', marginRight: 'auto', fontSize: "40px" }}>
                            Update Exercise
                        </EditSharpIcon>
                        </IconButton>
                    </Tooltip>
                </CardActions>
            </Card>
        </Draggable>
    </Container>
        
    
    )
}

export default FavoriteExercises