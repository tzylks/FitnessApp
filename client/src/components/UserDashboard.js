import { LocalGasStationRounded } from "@material-ui/icons"
import {useHistory} from 'react-router-dom'

function UserDashboard({currentUser}) {
    const history = useHistory();
    // if (!currentUser) {
    //     history.push('/login')
    //     return ('/login')
    // }
    return(
        <h2 style={{color: "white"}}>Welcome back {currentUser.username}!</h2>
    )
}

export default UserDashboard