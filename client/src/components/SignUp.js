import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';
import {useState} from 'react'
import {useHistory} from 'react-router-dom'


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

function SignUp({onLogin}) {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const classes = useStyles();
    const history = useHistory();

    function onSubmitSignUp(e) {
      e.preventDefault()
      const newObj = {
        username: username,
        password: password
      }

      fetch('/users', {
        method: 'Post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newObj)
      })
      .then(res => res.json())
      .then(onLogin)
      history.push("/dashboard")
    }

    return (
        <form className={classes.root} onSubmit={onSubmitSignUp}>
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
        <Button variant="contained">
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </div>
        </form>
    )
}

export default SignUp