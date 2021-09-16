import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { OpenWithTwoTone } from '@material-ui/icons';
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles({
  root: {
    width: 500,
    
  },
  list: {
    width: 250,
   
  },
  fullList: {
    width: 'auto',
    
  },
  paper: {
    background: '#FEC260',
    flexShrink: 0,
  },
  icons: {
    paddingLeft: '20px',
    paddingTop: '20px',
    fontSize: '50px'
  }

  
});

function TempDrawer({onLogout, state, toggleDrawer}) {
  const classes = useStyles();
  // const [state, setState] = useState(false);

  // function toggleDrawer() {
  //   setState(!state);
  // };


  let CustomListItem = ({ to, primary }) => (
    
      <ListItem
        button
        component={NavLink}
        to={to}
      >
        <ListItemText primary={primary} />
      </ListItem>
    

  )

  function onHandleLogout(){
    fetch('/logout', {
      method: 'DELETE',
    })
    .then(() => onLogout())
    }

  return (
    <div>
      {/* <MenuOpenIcon onClick={toggleDrawer} className={classes.icons} style={{color: '#FEC260'}}/> */}
      <Drawer variant="persistent" anchor='left' open={state} classes={{ paper: classes.paper }} >
        <List className={classes.list}>
          <MenuOpenIcon onClick={toggleDrawer} className={classes.icons} />
          
          <CustomListItem to="/login" primary="Login" color="secondary" />
          <Divider />
          <CustomListItem to="/signup" primary="Signup" />
          <Divider />
          <CustomListItem to="/exercises" primary="Exercises" />
          <Divider />
          <CustomListItem to="/pricing" primary="Pricing" />
          <Divider />
          <CustomListItem to="/userdashboard" primary="User Dashboard" />
          <Divider />
          
         

        </List>
        <Divider style={{marginTop: '48.3vh'}} />
        <Button component={NavLink} to='/login' onClick={onHandleLogout} style={{marginTop: '1.8vh', justifyContent: 'left', fontSize: '32px', marginLeft: '5vw' }}>Logout</Button>
        <Divider />
      </Drawer>
    </div>
  )
}

export default TempDrawer;