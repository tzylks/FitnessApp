import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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
      marginTop: '25vh',
  
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
        <form className={classes.root} onSubmit={handleSubmit}>
        <TextField
        label="Username"
        variant="filled"
        required
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <div>
        <Button component={NavLink} to="/signup" variant="contained">
          Signup
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </div>
        </form>
    )
}

export default Login