import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { InputBase } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { NavLink, useHistory } from 'react-router-dom';
import AlbumIcon from '@material-ui/icons/Album';
import LoyaltySharpIcon from '@material-ui/icons/LoyaltySharp';
import {IconButton} from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import {useState} from 'react'
import { Box, Button } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  }
}));

function NavBar({ search, setSearch, state, toggleDrawer, currentUser }) {
  const [hoverMe, setHoverMe] = useState(false)
  const classes = useStyles();
  const history = useHistory();

  function onSetHover(){
    setHoverMe(!hoverMe)
  }

  function onChangeSearch(event) {
    history.push('/exercises')
    setSearch(event.target.value)
  }

  return (
    <div style={{cursor: "url('https://img.icons8.com/plasticine/100/000000/cursor.png') 39 39, auto;", width: "83vw", float: "right"}}>
    <AppBar position="fixed" style={{background: "rgba(255, 76, 41, .0)", boxShadow: 'none'}}>
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={toggleDrawer} className={classes.menuButton} style={{color: '#FEC260'}} aria-label="menu">
        <FitnessCenterIcon edge="start" color="primary" onClick={toggleDrawer} className={classes.menuButton} style={{color: '#FEC260'}} aria-label="menu"/>
        </IconButton>
        <Typography  variant="h3" className={classes.title} style={{textDecoration: 'none', background: 'linear-gradient(160deg, #D62AD0 10%, #78DEC7 24% )', webkitBackgroundClip: 'text', webkitTextFillColor: "transparent", padding: '0', flexGrow: '1'}}>
          TAO OF PUMP
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }} placeholder="Search Exercises" value={search} onChange={onChangeSearch}
          />
        </div>
        {/* <NavLink onMouseOver={onSetHover} to='/albums'>
          <AlbumIcon style={{paddingRight: "15px", color: "white", fontSize: hoverMe ? '50px' : '24px'}} />
        </NavLink>
        <NavLink onMouseOver={onSetHover} to='/favorites'>
          <LoyaltySharpIcon color="secondary" style={{paddingRight: "15px", color: "white", fontSize: hoverMe ? '50px' : '24px' }}/>
        </NavLink> */}
        {/* <NavLink to="/usersettings" onFocus={onSetHover}>
          <AccountCircleIcon color="secondary" style={{paddingRight: "15px", color: "white", fontSize: hoverMe ? '50px' : '45px'}}/>
        </NavLink> */}
        <Button
            color="inherit"
            component={NavLink}
            to="/usersettings"
          >
        <Box
            
              borderRadius="70%"
              overflow="hidden"
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="50px"
              width="50px"
              style={{borderColor: '#FEC260'}}
            >
              {currentUser ? <img
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundSize: 'cover'
                  
                }}
                src={currentUser.profile_image !== null ? currentUser.profile_image : "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"}
                alt="profile"
              /> : <AccountCircleIcon style={{fontSize: '60px', color: 'white'}} /> }
            
            </Box>
      </Button>
      </Toolbar>
    </AppBar>
    </div>

  )
}

export default NavBar