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
import PhoneIcon from '@material-ui/icons/Phone';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import { IconButton } from '@material-ui/core'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const useStyles = makeStyles({
  root: {
    width: 500,

  },
  list: {
    width: 30,

  },
  fullList: {
    width: 'auto',

  },
  paper: {
    background: "rgba(0, 0, 0, 0.5)",
    flexShrink: 0,
    height: 'calc(100% - 790px)',
    top: 100,
    borderTopLeftRadius: '10%',
    borderBottomLeftRadius: '10%'
  },
  icons: {
    paddingLeft: '20px',
    paddingTop: '20px',
    fontSize: '50px'
  }


});

function SideDrawer({ onLogout, state, toggleDrawer }) {
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

  function onHandleLogout() {
    fetch('/logout', {
      method: 'DELETE',
    })
      .then(() => onLogout())
  }

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div  style={{ textAlign: 'center', borderTopLeftRadius: '30%',  borderBottomLeftRadius: '30%', position: 'fixed', color: 'yellow', marginLeft: '96vw', marginBototm: '10vh', background: 'rgba(0,0,0,.5)', zIndex: '1', marginTop: '10vh', flexDirection: 'column' }}>

          <PhoneEnabledIcon onClick={() => window.open('tel:7192662837', "_system")} style={{ fontSize: '50px' }} />
          <AttachMoneyIcon onClick={() => {window.location.href = "https://www.venmo.com/u/Trevor-zylks";}} style={{ fontSize: '50px', color: '#78DEC7' }} />
        </div>

      </div>
    </>
  )
}

export default SideDrawer;