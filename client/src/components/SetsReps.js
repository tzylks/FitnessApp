import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';
import { useState } from 'react'
import { useHistory, NavLink } from 'react-router-dom'
import Dialog from '@material-ui/core/Dialog';

import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '300px',
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
        }
    },
    title: {
        fontSize: "100px"
    },
}));

function SetsReps({ editThis }) {
    const [sets, setSets] = useState('')
    const [reps, setReps] = useState('')
    const [open, setOpen] = useState(true);

    const classes = useStyles();
    const history = useHistory();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    let id = editThis.id

    function onSubmitSignUp(e) {
        e.preventDefault()

        const newObj = {
            sets: sets,
            reps: reps
        }

        fetch(`/user_exercises/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newObj)
        })
          
        history.push("/userdashboard")
    }

    console.log(editThis)



    return (


        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog disableBackdropClick='true' open={true} onClose={handleClose} aria-labelledby="form-dialog-title" PaperProps={{
                style: {
                    background: 'linear-gradient(104deg,  #78DEC7 36.07%, #d62ad0 36.07%, #d62ad0 50%, #FEC260 50%, #FEC260 .13%, #d62ad0 44.13%, #d62ad0 50%,  #D62AD0 50%,  #D62AD0 86.07%, #000 19.07%, #000 89%, #000 119%, #FEC260 99.13%, #d62ad0 94.13%, #d62ad0 100%)',
                    boxShadow: "0 19px 50px  rgba(0, 0, 0, 1')",
                },
            }} style={{ background: 'linear-gradient(329deg, #78DEC7 25%, #D62AD0 24% )' }}>
                <DialogTitle className={classes.title} id="form-dialog-title" style={{ color: 'white', marginLeft: '30vw', fontSize: "x-large" }}>Sign-up</DialogTitle>
                <DialogContent>
                    <DialogContentText style={{ marginLeft: '26vw', color: '#FEC260' }}>

                    </DialogContentText>
                    <form className={classes.root} onSubmit={e => onSubmitSignUp(e)}>
                        <TextField
                            label="Reps"
                            variant="filled"
                            required
                            value={reps}
                            onChange={e => setReps(e.target.value)}
                            style={{ background: '#FEC260' }}
                        />

                        <TextField
                            label="Sets"
                            variant="filled"
                            required
                            value={sets}
                            onChange={e => setSets(e.target.value)}
                            style={{ background: '#FEC260' }}
                        />
                        <div>
                            <Button type="submit" variant="contained" color="primary">
                                Update
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
    )
}

export default SetsReps