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
            marginRight: '15vw',
            display: 'flex'
        },
    },
}));

function UserGoals({ currentUser }) {

    const classes = useStyles();
    const [open, setOpen] = useState(true)
    const [targetWeight, setTargetWeight] = useState(null)
    const [targetBmi, setTargetBmi] = useState(null)
    const [targetPhysique, setTargetPhysique] = useState(null)
    // const [location, setLocation] = useState(null)
    // const [age, setAge] = useState(null)
    // const [profileImage, setProfileImage] = useState(null)
    // const [open, setOpen] = useState(true);

    const history = useHistory();
    const id = currentUser.id

    function onSubmitForm(e, id){
       e.preventDefault();

        const newObj = {
            targetWeight: targetWeight,
            targetBmi: targetBmi,
            targetPhysique: targetPhysique,
        }
       
        fetch(`/users/${id}/user_goals`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newObj)
        })
        history.push('/userdashboard')
        
    }

    return (
        <>


            <div>

                <Dialog disableBackdropClick='true' open='true' aria-labelledby="form-dialog-title" PaperProps={{
                    style: {
                        background: 'linear-gradient(104deg,  #000 36.07%, #d62ad0 36.07%, #d62ad0 50%, #FEC260 50%, #FEC260 .13%, #d62ad0 44.13%, #d62ad0 50%,  #D62AD0 50%,  #D62AD0 86.07%, #78DEC7 19.07%, #78DEC7 89%, #FEC260 119%, #FEC260 99.13%, #d62ad0 94.13%, #d62ad0 100%)',
                        boxShadow: "0 19px 50px  rgba(0, 0, 0, 1')",
                        width: '100vw'
                    },
                }} style={{ background: 'linear-gradient(329deg, #D62AD0 25%, #78DEC7 24% )' }}>
                    <DialogTitle id="form-dialog-title" style={{ color: 'white', marginLeft: '30vw' }}>User Goals</DialogTitle>
                    <DialogContent>
                        <form className={classes.root} onSubmit={onSubmitForm}>

                            <TextField
                                label="Target Weight"
                                variant="outlined" ƒ
                                required
                                value={targetWeight}
                                onChange={e => setTargetWeight(e.target.value)}
                                color="primary"
                                style={{ background: '#FEC260', display: 'flex' }}


                            />
                            <div>
                                <Button type="submit" variant="contained" color="primary">
                                    Set Weight
                                </Button>
                            </div>

                            <TextField
                                label="Target BMI"
                                variant="outlined"
                                required
                                value={targetBmi}
                                onChange={e => setTargetBmi(e.target.value)}
                                color="primary"
                                style={{ background: '#FEC260' }}
                            />

                            <div>
                                <Button type="submit" variant="contained" color="primary">
                                    Release that Fat!!!
                                </Button>
                            </div>

                            <TextField
                                label="Target Physique"
                                variant="outlined"
                              
                                required
                                value={targetPhysique}
                                onChange={e => setTargetPhysique(e.target.value)}
                                color="primary"
                                style={{ background: '#FEC260' }}
                            />

                            <div>
                                <Button type="submit" variant="contained" color="primary">
                                    Get that Sexy
                                </Button>
                            </div>

                            {/* <TextField
                                label="Location"
                                variant="outlined"
                                
                                required
                                value={location}
                                onChange={e => setLocation(e.target.value)}
                                color="primary"
                                style={{ background: '#FEC260' }}
                            />

                            <div>
                                <Button type="submit" variant="contained" color="primary">
                                    Update Location
                                </Button>
                            </div>

                            <TextField
                                label="Age"
                                variant="outlined"
                                required
                                value={age}
                                onChange={e => setAge(e.target.value)}
                                color="primary"
                                style={{ background: '#FEC260' }}
                            />

                            <div>
                                <Button type="submit" variant="contained" color="primary">
                                    Update Age
                                </Button>
                            </div>

                            <TextField
                                label="Profile Image"
                                variant="outlined"
                                
                                required
                                value={profileImage}
                                onChange={e => setProfileImage(e.target.value)}
                                color="primary"
                                style={{ background: '#FEC260' }}
                            />

                            <div>
                                <Button type="submit" variant="contained" color="primary">
                                    Profile Image
                                </Button>
                            </div> */}

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

export default UserGoals;