import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core';
import {useState} from 'react'
import {useHistory, NavLink} from 'react-router-dom'


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

function Login({onLogin}) {
    const classes = useStyles();
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
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

    return (
      <>
      
      <div style={{backgroundColor: "#D62AD0", width: "25vw", margin:"auto", marginBottom: '25vh'}}>
      <Box style={{backgroundColor: "#FEC260", width: "25vw", margin:"auto", textAlign:"center", height: "50px"}}>Login</Box>
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
    </div>
  </>
    )
}

export default Login