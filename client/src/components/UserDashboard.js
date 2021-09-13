import { LocalGasStationRounded } from "@material-ui/icons"
import { useHistory } from 'react-router-dom'
import FavoriteExercisesContainer from "./FavoriteExercisesContainer";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core'
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginTop: '10vh',
        width: '90vw',
        marginRight: '10vw',
        background: 'black',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
        fontSize: '40px',
        color: "white",
        marginRight: '3vw'
    },
    cover: {
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: 300,
        width: 900,
    },
}));

function UserDashboard({ currentUser, setCurrentUser, favorites, onDeleteFavorite }) {
    const history = useHistory();
    const classes = useStyles();
    const theme = useTheme();

    // setCurrentUser(currentUser)
    
    if (!currentUser) {
        history.push('/login')
    }
    // else {
    //     history.push('/userdashboard')
    // }


    return (
        <>
            
            <Typography component="h1" variant="h1" style={{ fontFamily: "'Monoton', cursive", textDecoration: 'none', background: 'linear-gradient(160deg, #D62AD0 10%, #78DEC7 24% )', webkitBackgroundClip: 'text', webkitTextFillColor: "transparent", marginTop: '17vh', marginLeft: '14vw' }}>
                Let's Get Physical
            </Typography>
            {/* <Grid container> */}
                {/* <Grid item lg={12} sm={12} md={12}> */}
                <Box width='100%'>
                    <Card width="50%" className={classes.root}>
                        <CardMedia
                            className={classes.cover}
                            image="https://cdn.wazimo.com/engine/static/articles/fitness-eighties/images/190327_140724_39.jpg"
                            title="Fitness Banner"
                        />
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h4" variant="h4" >
                                    Welcome back {currentUser.username}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    Your Stats:
                                </Typography>
                                <Typography variant="h5" color="primary" >
                                    Name: {currentUser.name}
                                    <br />
                                    height: {currentUser.height}
                                    <br />
                                    Weight: {currentUser.weight}
                                    <br />
                                    Location: {currentUser.location}
                                </Typography>
                            </CardContent>
                        </div>

                    </Card>
                    </Box>
                {/* </Grid>
            </Grid> */}

            {/* <h2 style={{ color: "white" }}>Welcome back {currentUser.username}!</h2> */}
            <FavoriteExercisesContainer favorites={favorites} currentUser={currentUser} setCurrentUser={setCurrentUser} onDeleteFavorite={onDeleteFavorite} />
        </>
    )
}

export default UserDashboard