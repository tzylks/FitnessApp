
import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax';
import { fadeIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import { Typography, Button } from '@material-ui/core'
import { NavLink } from 'react-router-dom'



function Dashboard({ currentUser }) {

    const styles = StyleSheet.create({
        fadeIn: {
            animationName: fadeIn,
            animationDuration: '1s'
        }
    })

    return (
        <>

            <Parallax y={[2000, -10]} tagOuter="figure">
                <Typography style={{ marginLeft: '17vw', fontSize: '5rem', textDecoration: 'none', background: 'linear-gradient(90deg, #78DEC7  10%, #D62AD0 24% )', webkitBackgroundClip: 'text', webkitTextFillColor: "transparent" }}>
                    Welcome Back, {currentUser.username}
                </Typography>
            </Parallax>

            <Parallax y={[20, -10]} tagOuter="figure">
                <Typography style={{ marginLeft: '17vw', fontSize: '10rem', textDecoration: 'none', background: 'linear-gradient(90deg, #FEC260 10%, #78DEC7 24% )', webkitBackgroundClip: 'text', webkitTextFillColor: "transparent" }}>
                    Your Fitness Journey Begins Now
                </Typography>
            </Parallax>

            <Parallax y={[20, 50]} x={[100, -90]} tagOuter="figure">
                <Typography style={{ overflow: 'hidden', marginLeft: '40vw', fontSize: '5rem', textDecoration: 'none', background: 'linear-gradient(90deg, #FEC260 10%, #78DEC7 24% )', webkitBackgroundClip: 'text', webkitTextFillColor: "transparent" }}>
                    Add Exercises
                </Typography>
            </Parallax>

            <Parallax y={[20, 50]} x={[-20, 120]} tagOuter="figure">
                <Typography style={{ overflow: 'hidden', marginLeft: '40vw', fontSize: '5rem', textDecoration: 'none', background: 'linear-gradient(90deg, #FEC260 10%, #78DEC7 24% )', webkitBackgroundClip: 'text', webkitTextFillColor: "transparent" }}>
                    Add Fitness Goals
                </Typography>
            </Parallax>

            <Parallax y={[20, 50]}  x={[-20, 100]} tagOuter="figure">
                <Typography style={{ overflow: 'hidden', marginLeft: '40vw', fontSize: '4rem', textDecoration: 'none', background: 'linear-gradient(90deg, #FEC260 10%, #78DEC7 24% )', webkitBackgroundClip: 'text', webkitTextFillColor: "transparent" }}>
                    Premium Plans Starting at $10,000
                </Typography>
            </Parallax>
            <Parallax y={[-200, 50]}  x={[190, -100]} tagOuter="figure">
                <Typography style={{ overflow: 'hidden', marginLeft: '40vw', fontSize: '4rem', textDecoration: 'none', background: 'linear-gradient(90deg, #78DEC7  10%, #D62AD0 24% )', webkitBackgroundClip: 'text', webkitTextFillColor: "transparent" }}>
                    Thanks for Choosing Tao
                </Typography>
            </Parallax>



           
            <Parallax y={[-40, 100]} x={[-50, 110]} tagOuter="figure">
                <img src="https://officialpsds.com/imageview/79/91/7991z0_large.png?1521316586" />
            </Parallax>
            


            <Parallax y={[-360, 100]} x={[-20, 200]} tagOuter="figure">
               <Button component={NavLink} to='/exercises'>
                <Typography style={{ overflow: 'hidden', marginLeft: '40vw', fontSize: '6rem', textDecoration: 'none', background: 'linear-gradient(90deg, #FEC260 10%, #78DEC7 24% )', webkitBackgroundClip: 'text', webkitTextFillColor: "transparent" }}>
                    Click Here to Start Now
                </Typography>
                </Button>
            </Parallax>
        </>


    )
}



export default Dashboard