
import { useHistory } from 'react-router-dom'
import FavoriteExercisesContainer from "./FavoriteExercisesContainer";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginTop: '10vh',
        width: '100vw',
        background: 'black',

    },
    details: {
        display: 'flex',
        flexDirection: 'row',
    },
    content: {
        display: 'flex',
        flex: '1 0 auto',
        fontSize: '40px',
        color: "white",
        marginLeft: '10vw',
        width: '50vw',
        flexDirection: 'row'
    },
    cover: {
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: 300,
        width: '100vw',
    },
}));

function UserDashboard({ setFavorites, errorMe, currentUser, setCurrentUser, favorites, onDeleteFavorite }) {
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
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.cover}
                        image="https://cdn.wazimo.com/engine/static/articles/fitness-eighties/images/190327_140724_39.jpg"
                        title="Fitness Banner"
                    />
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h3" variant="h3" style={{marginTop: '4vh'}} >
                                Welcome back {currentUser.username}
                                <Box
                                border={1}
                                borderRadius="70%"
                                overflow="hidden"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                height="100px"
                                width="100px"
                                style={{ borderColor: '#FEC260', marginRight: '10vw'}}
                            >
                                <img
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                    }}
                                    src={currentUser.profile_image}
                                    alt="profile"
                                />

                            </Box>
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                Your Stats:
                            </Typography>
                            <Typography variant="h5" color="primary" style={{marginTop: '5vh'}}  >
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
            <FavoriteExercisesContainer setFavorites={setFavorites} errorMe={errorMe} favorites={favorites} currentUser={currentUser} setCurrentUser={setCurrentUser} onDeleteFavorite={onDeleteFavorite} />
        </>
    )
}

export default UserDashboard