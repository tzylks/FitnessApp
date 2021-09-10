import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { InputBase } from '@material-ui/core'
import BlurOnIcon from '@material-ui/icons/BlurOn';
import SearchIcon from '@material-ui/icons/Search';
import { NavLink } from 'react-router-dom';
import AlbumIcon from '@material-ui/icons/Album';
import LoyaltySharpIcon from '@material-ui/icons/LoyaltySharp';
import LibraryMusicSharpIcon from '@material-ui/icons/LibraryMusicSharp';
import {IconButton} from '@material-ui/core'

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

function NavBar({ search, setSearch }) {

  const classes = useStyles();

  function onChangeSearch(event) {
    setSearch(event.target.value)
  }

  return (
    <div style={{cursor: "url('https://img.icons8.com/plasticine/100/000000/cursor.png') 39 39, auto;"}}>
    <AppBar position="sticky">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <BlurOnIcon />
        </IconButton>
        <Typography component={NavLink} to="/" variant="h6" style={{color: "white"}} className={classes.title} style={{textDecoration: 'none', color: "white"}}>
          Slowly We Rot
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }} placeholder="Search Albums" value={search} onChange={onChangeSearch}
          />
        </div>
        <NavLink to='/albums'>
          <AlbumIcon style={{paddingRight: "15px", color: "white"}} />
        </NavLink>
        <NavLink to='/favorites'>
          <LoyaltySharpIcon color="secondary" style={{paddingRight: "15px", color: "white"}}/>
        </NavLink>
        <NavLink to="/addalbum">
          <LibraryMusicSharpIcon color="secondary" style={{paddingRight: "15px", color: "white"}}/>
        </NavLink>
      </Toolbar>
    </AppBar>
    </div>

  )
}

export default NavBar