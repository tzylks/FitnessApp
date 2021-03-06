import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box'
import { makeStyles, Typography, Grid } from '@material-ui/core';
import { useState } from 'react'
import { useHistory, NavLink } from 'react-router-dom'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

function Login({ onLogin, currentUser, setGoal }) {
  const classes = useStyles();
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      }
      history.push('/dashboard')
    }
    );
  }

  if (currentUser) {
    history.push('/userdashboard')
  }

  return (
    <>

      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom color="secondary">
        Login
      </Typography>

      {/* <div style={{ backgroundColor: "#D62AD0", width: "25vw", margin: "auto", marginBottom: '25vh' }}>
      
       
        <Box style={{ backgroundColor: "#FEC260", width: "25vw", margin: "auto", textAlign: "center", height: "50px" }}>Login</Box>
        
          <form className={classes.root} onSubmit={handleSubmit}>
          
            <TextField
              label="Username"
              variant="outlined"
              required
              value={username}
              onChange={e => setUsername(e.target.value)}
              color="primary"

            />

            <TextField
              label="Password"
              variant="outlined"
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              color="primary"
            />
           
            <div>
              <Button component={NavLink} to="/signup" variant="contained" color="primary">
                Signup
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
            </div>
          </form>
        
      </div> */}

      <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Open form dialog
        </Button>
        <Dialog disableBackdropClick='true' open={open} onClose={handleClose} aria-labelledby="form-dialog-title" PaperProps={{
          style: {
            background: 'linear-gradient(104deg,  #000 36.07%, #d62ad0 36.07%, #d62ad0 50%, #FEC260 50%, #FEC260 .13%, #d62ad0 44.13%, #d62ad0 50%,  #D62AD0 50%,  #D62AD0 86.07%, #78DEC7 19.07%, #78DEC7 89%, #FEC260 119%, #FEC260 99.13%, #d62ad0 94.13%, #d62ad0 100%)',
            boxShadow: "0 19px 50px  rgba(0, 0, 0, 1')",
          },
        }} style={{ background: 'linear-gradient(329deg, #D62AD0 25%, #78DEC7 24% )' }}>
          <DialogTitle id="form-dialog-title" style={{ color: 'white', marginLeft: '30vw' }}>Login</DialogTitle>
          <DialogContent>
            <DialogContentText style={{ marginLeft: '26vw', color: '#FEC260' }}>
              Login or signup below!
            </DialogContentText>
            <form className={classes.root} onSubmit={handleSubmit}>

              <TextField
                label="Username"
                variant="outlined"
                required
                value={username}
                onChange={e => setUsername(e.target.value)}
                color="primary"
                style={{ background: '#FEC260' }}


              />

              <TextField
                label="Password"
                variant="outlined"
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                color="primary"
                style={{ background: '#FEC260' }}
              />

              <div>
                <Button component={NavLink} to="/signup" variant="contained" color="primary">
                  Signup
                </Button>
                <Button type="submit" variant="contained" color="primary">
                  Login
                </Button>
              </div>
            </form>

          </DialogContent>
          {/* <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions> */}
        </Dialog>
      </div>
    </>
  )
}

export default Login