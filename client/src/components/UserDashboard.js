function UserDashboard({currentUser}) {
    console.log(currentUser)
    return(
        <h2 style={{color: "white"}}>Welcome back {currentUser.username}!</h2>
    )
}

export default UserDashboard