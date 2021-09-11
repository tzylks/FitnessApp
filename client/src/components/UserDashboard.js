import { LocalGasStationRounded } from "@material-ui/icons"
import { useHistory } from 'react-router-dom'
import FavoriteExercisesContainer from "./FavoriteExercisesContainer";

function UserDashboard({ currentUser, setCurrentUser, favorites }) {
    const history = useHistory();
    if (!currentUser) {
        history.push('/login')
        return ('/login')
    }

    setCurrentUser(currentUser)
    return (
        <>
            {/* <h2 style={{ color: "white" }}>Welcome back {currentUser.username}!</h2> */}
            <FavoriteExercisesContainer favorites={favorites} currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </>
    )
}

export default UserDashboard