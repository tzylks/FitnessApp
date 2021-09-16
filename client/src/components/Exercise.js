import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Tooltip from '@material-ui/core/Tooltip';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { CardActions } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Draggable from 'react-draggable'
import { motion } from 'framer-motion'
import {useState} from 'react'
import {Box} from '@material-ui/core'
import '../index.css';




const useStyles = makeStyles(theme => ({
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
        marginTop: "3vh",
    },
}));





function Exercise({exercise, onFavoriteClick, currentUser}){
    const [colors, setColor] = useState(false)
    const [bounceMe, setBounceMe] = useState(false)
    const classes = useStyles();

    function onHoverChange() {
        setColor(!colors)
    }

    function onClickBounce() {
        setBounceMe(!bounceMe)
    }

    return(
    <motion.div  whileHover={{ scale: .9}}
    whileTap={{ scale: .94 }}>
    <Draggable>
        <Card className={classes.colored}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={exercise.image}
                        title="Exercise Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h2" color="secondary">
                            {exercise.activity}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            {exercise.muscle_group}
                        </Typography>
                        {/* <Typography variant="body2"  component="p">
                            Hell yeah
                        </Typography>
                        <Typography variant="body2" component="p">
                            The Pump
                        </Typography> */}
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Box onMouseOver={onHoverChange} style={{width: '50px'}}>
                <Tooltip title="Add this item to Exercise Plan"  placement="right">
                    <AddCircleIcon className="square" onClick={() => onFavoriteClick(exercise, currentUser)} size="small" color="primary" >
                        Add to Exercise Plan
                    </AddCircleIcon>
                </Tooltip>
                </Box>
                </CardActions>
            </Card>
        </Draggable>
        </motion.div> 
    )
}

export default Exercise

